import { LocalStorageService } from './../services/local.storage.service';
import { IResources } from './../resources/i.resources.interface';
import { ResourcesService } from './../services/resources.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontEnd';

  ngOnInit() {
  }

}
