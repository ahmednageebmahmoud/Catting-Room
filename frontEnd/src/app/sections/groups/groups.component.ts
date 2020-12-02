import { IGroup } from './../../../interfaces/i.group';
import { HttpService } from './../../../services/http/http.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrentUserService } from 'src/services/current.user.service';
import { environment } from 'src/environments/environment';
declare var initChat:any;

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styles: [
  ]
})
export class GroupsComponent implements OnInit {
  textSearch?:string;
  groups?: IGroup[];
  env=environment;

@Output()  ifChangeingGroupEvent:EventEmitter<IGroup>=new EventEmitter<IGroup>();
  constructor(private http: HttpService,public user:CurrentUserService) { }

  ngOnInit(): void {
    this.getGroups();

  
  }


  /**
   * Get Groups
   */
  getGroups(): void {
    this.http.getGroups<IGroup[]>().subscribe(res => {
      this.groups = res;
      setTimeout(()=>{
        initChat();
      },0)
    },error=>{
      alert('Error')
      console.error('Get Groups ',error);
    });
  }

}//End Class
