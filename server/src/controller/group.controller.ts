import { GroupService } from './../services/group.service';
import { Request, Response } from "express";

export class GroupController {

     /**
      * Get Groups
      * @param req 
      * @param res 
      */
     getGroups(req: Request, res: Response): void {
       res.send(GroupService.groups);
    }

}//End Class