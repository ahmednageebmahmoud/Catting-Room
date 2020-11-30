import { LocalStorageService } from './local.storage.service';
import { IUser } from './../interfaces/i.user.interface';
import { languageConst } from './../consts/language.const';
import { ILanguage } from './../interfaces/i.language.interface';
import { ResourcesService } from './resources.service';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { LanguageService } from './language.service';

@Injectable()
export class CurrentUserService {

    userData?: IUser|null;

    isLoggedIn:boolean=false;

    currentLanguage = LanguageService.currentLanugage;

    resources = ResourcesService.getCurrentResources();

    constructor() {
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

        this.userData=LocalStorageService.userData;
        this.isLoggedIn=this.userData?true:false;


        //Update Page Css Files
        this.updateCssFiles();
    }


    /** Update Csss Files */
    updateCssFiles(): void {
        let currentDirection = this.currentLanguage.code == languageConst.english ? "ltr" : "rtl";

        let style = document.getElementById('mainStayle') as HTMLLinkElement;

        style.href = style.href.replace(/rtl|ltr/, currentDirection);
    }


    /**
     * Save User Data In Local Sotage
     */
    signIn(userData: IUser) {
        this.userData = userData;
        this.isLoggedIn=true;
        LocalStorageService.userData=this.userData;
    }

    /**
     * Sign Out
     */
    signOut(){
        LocalStorageService.userData=null;
        this.isLoggedIn=false;
        this.userData=null;
    }

}//End CLass