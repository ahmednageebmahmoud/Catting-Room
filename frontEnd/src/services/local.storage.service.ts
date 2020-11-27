export class LocalStorageService {

    /**
     * Save User Langauge In Local Storage
     */
    static get currentLanguage(): string | null {
        return localStorage.getItem('lang');
    }

    /**
     * Get User Langauge In Local Storage
     */
    static set currentLanguage(value: string | null) {
        localStorage.setItem('lang', value || "");
    }

}//End Class