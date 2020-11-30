import { IUser } from './../interfaces/i.user.interface';
import { languageConst } from './../consts/language.const';
export class LocalStorageService {

    /**
     * Save User Langauge In Local Storage
     */
    static get currentLanguage(): string | null {
        return localStorage.getItem('lang') || languageConst.english;
    }

    /**
     * Get User Langauge In Local Storage
     */
    static set currentLanguage(value: string | null) {
        localStorage.setItem('lang', value || "");
    }



    /**
 * Save User Data In Local Storage
 */
    static get userData(): IUser | any {
        return JSON.parse(localStorage.getItem('userData') as string) as IUser;
    }

    /**
     * Get User Data From  Local Storage
     */
    static set userData(value: IUser | any) {
        if(!value)
        localStorage.removeItem("userData");
        else
        localStorage.setItem('userData', JSON.stringify(value));
    }



}//End Class