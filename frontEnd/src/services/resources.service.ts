import { LocalStorageService } from './local.storage.service';
import { ResourcesAr } from './../resources/resources.ar.class';
import { ResourcesEn } from './../resources/resources.en.class';
import { IResources } from './../resources/i.resources.interface';
export class ResourcesService {

    /**
     * Get Resourcws By Language Type
     */
    static getCurrentResources(): IResources {
        switch (LocalStorageService.currentLanguage) {
            case "ar":
                return new ResourcesAr();
            default:
                return new ResourcesEn();
        }
    }

}//End Class