"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupController = void 0;
const group_service_1 = require("./../services/group.service");
class GroupController {
    /**
     * Get Groups
     * @param req
     * @param res
     */
    getGroups(req, res) {
        res.send(group_service_1.GroupService.groups);
    }
} //End Class
exports.GroupController = GroupController;
