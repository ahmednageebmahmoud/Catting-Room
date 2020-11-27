import { LocalStorageService } from './local.storage.service';
import { languageConst } from './../consts/language.const';
import { ILanguage } from './../interfaces/i.language.interface';

export class LanguageService {


    /**
     * Get All Languages 
     */
static getLnaguages():ILanguage[]{
    return [{
        code:languageConst.arabic,
        name:"Arabic Language",
        icon:"assets/img/sa.svg",
        resourcesKey:"arabic"
    },
    {
        code:languageConst.english,
        name:"English Language",
        icon:"assets/img/usa.svg",
        resourcesKey:"english"
    }] ;
}


/**Get Current Lanugage */
static get currentLanugage():ILanguage{
 return   this.getLnaguages().find(lang=> lang.code==LocalStorageService.currentLanguage) as ILanguage;
}

}//End Class
