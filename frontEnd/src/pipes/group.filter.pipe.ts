import { CurrentUserService } from './../services/current.user.service';
import { IGroup } from './../interfaces/i.group';
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "groupFilter"
})
export class GroupFilterPipe implements PipeTransform {

    constructor(private user: CurrentUserService) {

    }

    transform(items: IGroup[] | undefined, textSearch: string | null | undefined) {

        if (!textSearch || !items)
            return items;

        return this.filterNow(<IGroup[]>items, textSearch);
    }

    /**
     * Filter Group Now
     */

    filterNow(items: IGroup[], textSearch: string): IGroup[] {
        return items.filter(group =>
            this.user.resources[group.resourcesKey].search(new RegExp(textSearch, "i"))>=0
        )
    }

}//End Class