import { IUser } from './../../interfaces/i.user.interface';
import { HttpService } from './../../services/http/http.service';
import { IMessage } from './../../interfaces/i.message.interface';
import { environment } from './../../environments/environment';
import { IGroup } from './../../interfaces/i.group';
import { CurrentUserService } from './../../services/current.user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css']
})
export class ChattingComponent implements OnInit {

  env = environment;
  currentChat: IGroup = {
    id: 1,
    name: "Food & Drink",
    resourcesKey: "food_drink",
    image: "images/food-and-drink.jpg",
    messages: [
      {
        message: "Hello Test",
        isFromMe: true
      },
      {
        message: "Hello Test 2",
        isFromMe: true
      },
      {
        message: "Hello Test 3 From Another",
        isFromMe: false
      }
    ] as IMessage[]
  } as IGroup;


  sendMessageForm: FormGroup=new FormGroup({
    message: new FormControl(null, Validators.required)
  });;

  constructor(public user: CurrentUserService, private http: HttpService) { }

  ngOnInit(): void {

  }


  sendMessage(): void {
    if (this.sendMessageForm?.invalid) {
      return;
    }
    let newmessage = {
      isFromMe: true,
      userInfo: this.user.userData as IUser,
      message: this.sendMessageForm?.controls.message.value,
      groupId:this.currentChat.id
    };
    this.http.sendMessage(newmessage).subscribe(res => {
      this.sendMessageForm.reset();
      this.currentChat.messages.push(newmessage)
    }, error => {
      alert('Some Error Has Been')
      console.error(error);
    })
  }

}//End Class
