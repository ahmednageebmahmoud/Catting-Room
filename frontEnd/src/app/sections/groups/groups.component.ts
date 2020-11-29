import { IGroup } from './../../../interfaces/i.group';
import { HttpService } from './../../../services/http/http.service';
import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/services/current.user.service';
import { environment } from 'src/environments/environment';

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
    },error=>{
      alert('Error')
      console.error('Get Groups ',error);
    });
  }

}//End Class
