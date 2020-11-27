import { languageConst } from './../consts/language.const';
import { ILanguage } from './../interfaces/i.language.interface';
import { ResourcesService } from './resources.service';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { LanguageService } from './language.service';

@Injectable()
export class CurrentUserService {

    userName?: string;
    email?: string;

    currentLanguage: ILanguage = LanguageService.currentLanugage;

    resources = ResourcesService.getCurrentResources();

constructor(){
    this.updateUserInformation();
}

    /**
     * Update User Information
     */
    updateUserInformation(): void {
        //Update Current Lanugage
        this.currentLanguage = LanguageService.currentLanugage;
        //Update Resources
        this.resources = ResourcesService.getCurrentResources();

        //Update Page Css Files
        this.updateCssFiles();
    }


    /** Update Csss Files */
    updateCssFiles(): void {
        let currentDirection = this.currentLanguage.code == languageConst.english ? "ltr" : "rtl";

        let style = document.getElementById('mainStayle') as HTMLLinkElement;
        
        style.href =   style.href.replace(/rtl|ltr/, currentDirection);
    }


}//End CLass