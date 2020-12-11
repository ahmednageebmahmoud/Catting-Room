"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupRouter = void 0;
const express_1 = require("express");
const group_controller_1 = require("../controller/group.controller");
let route = express_1.Router(), controller = new group_controller_1.GroupController();
exports.groupRouter = route;
/**
 * Get Groups By Url  /api/groups/getGroups
 */
route.get('/getGroups', controller.getGroups);
