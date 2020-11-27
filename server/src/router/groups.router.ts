import { Router } from "express";
import { GroupController } from "../controller/group.controller";



let route = Router(),
    controller = new GroupController();


/**
 * Get Groups By Url  /api/groups/getGroups
 */
route.get('/getGroups', controller.getGroups);

export { route as groupRouter }