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

    userData?: IUser | null;

    isLoggedIn: boolean = false;

    currentLanguage = LanguageService.currentLanugage;

    resources = ResourcesService.getCurrentResources();

    constructor() {
        this.updateUserInformation(true);

    }

    /**
     * Update User Information
     */
    updateUserInformation(updateToFirstTime:boolean=false): void {
        //Update Current Lanugage
        this.currentLanguage = LanguageService.currentLanugage;
        //Update Resources
        this.resources = ResourcesService.getCurrentResources();

        this.userData = LocalStorageService.userData;
        this.isLoggedIn = this.userData ? true : false;


        //Update Page Css Files
        this.updateCssFiles(updateToFirstTime);
    }


    /** Update Csss Files */
    // I Stoped Tihs Code To Fix Big Image Whene Toggle Files
    //  updateCssFiles(): void {
    //     let currentDirection = this.currentLanguage.code == languageConst.english ? "ltr" : "rtl";

    //     let style = document.getElementById('mainStayle') as HTMLLinkElement;

    //     style.href = style.href.replace(/rtl|ltr/, currentDirection);
    // }

    /** Here I Will Add New Link Style Element To Loade Befor Remove Old Style Link Element */
    updateCssFiles(updateToFirstTime:boolean=false): void {
        
        let newElement = document.createElement('link');
        newElement.rel="stylesheet";
        switch (this.currentLanguage.code) {
            case languageConst.arabic:
                {
                    debugger
                    //Add New RTL File
                    newElement.href = "assets/css/rtl/plugins.css";
                    newElement.id = "styleRTL";
                    document.head.appendChild(newElement);

                    //Remove Old LTR File Style
                    setTimeout(() => {
                        document.getElementById('styleLTR')?.remove();
                    }, updateToFirstTime?0:100);

                }
                break;
            default:
                {
                    newElement.href = "assets/css/ltr/plugins.css";
                    newElement.id = "styleLTR";
                    document.head.appendChild(newElement);

                    //Remove Old RTL File Style
                    setTimeout(() => {
                        document.getElementById('styleRTL')?.remove();
                    }, updateToFirstTime?0:100);
                }
                break;
        }

    }


    /**
     * Save User Data In Local Sotage
     */
    signIn(userData: IUser) {
        this.userData = userData;
        this.isLoggedIn = true;
        LocalStorageService.userData = this.userData;
    }

    /**
     * Sign Out
     */
    signOut() {
        LocalStorageService.userData = null;
        this.isLoggedIn = false;
        this.userData = null;
    }

}//End CLass