import { ILanguage } from './../../../interfaces/i.language.interface';
import { languageConst } from './../../../consts/language.const';
import { LocalStorageService } from './../../../services/local.storage.service';
import { ResourcesService } from './../../../services/resources.service';
import { IResources } from './../../../resources/i.resources.interface';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/services/language.service';
import { CurrentUserService } from 'src/services/current.user.service';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.css']
})
export class ChangeLanguageComponent implements OnInit {


  languages?: ILanguage[];


  constructor(public user: CurrentUserService) { }

  ngOnInit(): void {
    this.languages = LanguageService.getLnaguages();

  }


  /**
   * Udate Current User Language
   */
  updateUserLnaguage(lang: ILanguage): void {
    LocalStorageService.currentLanguage = lang.code;
    this.user.updateUserInformation();
  }

}//End Class
