import { IUser } from './../../../interfaces/i.user.interface';
import { GoogleSignInService } from './../../../services/google.signin.service';
import { CurrentUserService } from './../../../services/current.user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.css']
})
export class LoggedUserComponent implements OnInit {

  @ViewChild("signInElemnt") signInElemnt?: ElementRef;
  constructor(public user: CurrentUserService) { }

  ngOnInit(): void {
    this.initGoogleSDK();
  }


  /**
   * Init Google SDK
   */
  initGoogleSDK(): void {
    GoogleSignInService.initGoogleSDK().then(auth => {
      auth.attachClickHandler(this.signInElemnt?.nativeElement, {}, userInfo => {
        let userIn = userInfo.getBasicProfile();
       this.signIn(userIn);
      }, error => {
        alert("Error In Sign In By Google")
      })
    });
  }


  /**Sign out */

  signOut(){
    this.user.signOut();
  }

  /** User Sign In */
  signIn(userIn:gapi.auth2.BasicProfile){
    this.user.signIn({
      name: userIn.getName(),
      email: userIn.getEmail(),
      image: userIn.getImageUrl()

    } as IUser);
  }
}//End Class
