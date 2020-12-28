import { LanguageService } from './../../../services/language.service';
import { IMessage } from './../../../interfaces/i.message.interface';
import { SocketIoService } from './../../../services/socket.io.service';
import { IGroup } from './../../../interfaces/i.group';
import { HttpService } from './../../../services/http/http.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrentUserService } from 'src/services/current.user.service';
import { environment } from 'src/environments/environment';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
declare var initChat: any;

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styles: [
  ]
})
export class GroupsComponent implements OnInit {
  textSearch?: string;
  groups?: IGroup[];
  env = environment;

  
  @Input() groupsLoaded?: EventEmitter<IGroup[]>

  constructor(private http: HttpService, public user: CurrentUserService) { }

  ngOnInit(): void {
    this.getGroups();


  }


  /**
   * Get Groups
   */
  getGroups(): void {
    this.http.getGroups<IGroup[]>().subscribe(res => {
      this.groups = res;

      SocketIoService.onMessage().subscribe((newMessage: IMessage) => {
        newMessage.isFromMe = newMessage.userInfo.email == this.user.userData?.email;
          this.appendNewMessage(newMessage);
      });


      //Pass Groups To Parent Component
      this.groupsLoaded?.emit(this.groups);

      setTimeout(() => {
        initChat();
      }, 0)
    }, error => {
      alert('Error')
      console.error('Get Groups ', error);
    });
  }


  appendNewMessage(newMessage:IMessage):void{
    let groupTargt = this.groups?.find(c => c.id == newMessage.groupId) as IGroup;
    groupTargt.messages.push(newMessage);
    groupTargt.lastMessage = newMessage.message;
  }
}//End Class
