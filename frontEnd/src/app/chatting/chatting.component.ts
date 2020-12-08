import { PipeTransform } from '@angular/core';
import { IUser } from './../../interfaces/i.user.interface';
import { HttpService } from './../../services/http/http.service';
import { IMessage } from './../../interfaces/i.message.interface';
import { environment } from './../../environments/environment';
import { IGroup } from './../../interfaces/i.group';
import { CurrentUserService } from './../../services/current.user.service';
import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

declare var clickOnGroupChat:any;

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css']
})
export class ChattingComponent implements OnInit {

  env = environment;

  currentChat?: IGroup;

  sendMessageForm: FormGroup = new FormGroup({
    message: new FormControl(null, Validators.required)
  });;

  groups: IGroup[] = [];
  getGroupsWheneLoaded: EventEmitter<IGroup[]> = new EventEmitter<IGroup[]>();

  constructor(public user: CurrentUserService, private http: HttpService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    //Subscribe On Event To Load Groups From Chaild
    this.getGroupsWheneLoaded.subscribe((groups: IGroup[]) => {
      this.groups = groups;
      //Fill Current Chat
      this.fillCurretnChat(this.router.snapshot.params.name);
    });

    //Fill Current Chat Every Change URL
    this.router.params.subscribe(newParm => {
      //Fill Current Chat
      this.fillCurretnChat(newParm.name);
    });
  }

  /**Send Message To User */
  sendMessage(): void {
    if (this.sendMessageForm?.invalid) {
      return;
    }
    let newmessage = {
      isFromMe: true,
      userInfo: this.user.userData as IUser,
      message: this.sendMessageForm?.controls.message.value,
      groupId: this.currentChat?.id as number
    };
    this.http.sendMessage(newmessage).subscribe(res => {
      this.sendMessageForm.reset();
      this.appendNewMessage(newmessage)
    }, error => {
      alert('Some Error Has Been')
      console.error(error);
    })
  }





  appendNewMessage(newMessage: IMessage): void {
    let groupTargt = this.groups?.find(c => c.id == newMessage.groupId) as IGroup;
    groupTargt.messages.push(newMessage);
    groupTargt.lastMessage = newMessage.message;
  }


  /**
   * Fill Current Chat
   * @param groupName 
   */
  fillCurretnChat(groupName: string): void {
    if (!this.groups) return;
    this.currentChat = this.groups.find(gr => gr.resourcesKey == groupName);
    clickOnGroupChat(this.currentChat?.id);
  }
}//End Class
