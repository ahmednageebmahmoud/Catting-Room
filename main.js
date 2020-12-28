(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/6ZK":
/*!***********************************************!*\
  !*** ./src/services/google.signin.service.ts ***!
  \***********************************************/
/*! exports provided: GoogleSignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleSignInService", function() { return GoogleSignInService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");

class GoogleSignInService {
    /** Init Google SDK  */
    static initGoogleSDK() {
        return new Promise((resolve, reject) => {
            window["googleSDKLoaded"] = () => {
                gapi.load('auth2', () => {
                    resolve(gapi.auth2.init({
                        client_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].googleClinetId,
                        scope: "email profile"
                    }));
                });
            };
            (function () {
                let elemnt = document.createElement("script");
                elemnt.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
                document.body.insertAdjacentElement("beforeend", elemnt);
            })();
        });
    }
} //End Class


/***/ }),

/***/ "/y+i":
/*!*****************************************************!*\
  !*** ./src/app/sections/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _change_language_change_language_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../change-language/change-language.component */ "f1/p");
/* harmony import */ var _logged_user_logged_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logged-user/logged-user.component */ "AF45");




class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 0, consts: [[1, "header-container", "fixed-top"], [1, "header", "navbar", "navbar-expand-sm", "expand-header"], [1, "navbar-item", "flex-row", "ml-auto"], [1, "nav-item", "dropdown", "language-dropdown"], [1, "nav-item", "dropdown", "user-profile-dropdown", "order-lg-0", "order-1"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-change-language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-logged-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_change_language_change_language_component__WEBPACK_IMPORTED_MODULE_1__["ChangeLanguageComponent"], _logged_user_logged_user_component__WEBPACK_IMPORTED_MODULE_2__["LoggedUserComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/ahmed/Programming/Projects/Courses/ChatingRoom/frontEnd/src/main.ts */"zUnb");


/***/ }),

/***/ "1JUL":
/*!*******************************************!*\
  !*** ./src/services/resources.service.ts ***!
  \*******************************************/
/*! exports provided: ResourcesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesService", function() { return ResourcesService; });
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local.storage.service */ "LKR5");
/* harmony import */ var _resources_resources_ar_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../resources/resources.ar.class */ "JRGT");
/* harmony import */ var _resources_resources_en_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../resources/resources.en.class */ "YQ2q");



class ResourcesService {
    /**
     * Get Resourcws By Language Type
     */
    static getCurrentResources() {
        switch (_local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"].currentLanguage) {
            case "ar":
                return new _resources_resources_ar_class__WEBPACK_IMPORTED_MODULE_1__["ResourcesAr"]();
            default:
                return new _resources_resources_en_class__WEBPACK_IMPORTED_MODULE_2__["ResourcesEn"]();
        }
    }
} //End Class


/***/ }),

/***/ "3Sm/":
/*!******************************************************!*\
  !*** ./src/services/http/http.intercptor.service.ts ***!
  \******************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
class HttpInterceptorService {
    intercept(req, next) {
        let myOverHeader = req.clone({
            headers: req.headers.append("content-type", "application/json")
        });
        return next.handle(myOverHeader);
    }
}


/***/ }),

/***/ "87lf":
/*!************************************************!*\
  !*** ./src/app/chatting/chatting.component.ts ***!
  \************************************************/
/*! exports provided: ChattingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChattingComponent", function() { return ChattingComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/current.user.service */ "PwXG");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sections_groups_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/groups/groups.component */ "C7Oo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function ChattingComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.env.apiUrl + ctx_r0.currentChat.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.user.resources[ctx_r0.currentChat.resourcesKey], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0, a1) { return { "me": a0, "you": a1 }; };
function ChattingComponent_div_92_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 64);
} if (rf & 2) {
    const ms_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ms_r5.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ms_r5.isFromMe, !ms_r5.isFromMe));
} }
function ChattingComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChattingComponent_div_92_div_2_Template, 1, 5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-chat", group_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r3.messages);
} }
function ChattingComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ChattingComponent_div_93_Template_form_submit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.sendMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.sendMessageForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r2.user.resources.message);
} }
class ChattingComponent {
    constructor(user, http, router) {
        this.user = user;
        this.http = http;
        this.router = router;
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"];
        this.sendMessageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.groups = [];
        this.getGroupsWheneLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ;
    ngOnInit() {
        //Subscribe On Event To Load Groups From Chaild
        this.getGroupsWheneLoaded.subscribe((groups) => {
            this.groups = groups;
            //Fill Current Chat
            this.fillCurretnChat(this.router.snapshot.params.name);
        });
        //Fill Current Chat Every Change URL
        this.router.params.subscribe(newParm => {
            //Fill Current Chat
            this.fillCurretnChat(newParm.name);
        });
    }
    /**Send Message To User */
    sendMessage() {
        var _a, _b, _c;
        if ((_a = this.sendMessageForm) === null || _a === void 0 ? void 0 : _a.invalid) {
            return;
        }
        let newmessage = {
            isFromMe: true,
            userInfo: this.user.userData,
            message: (_b = this.sendMessageForm) === null || _b === void 0 ? void 0 : _b.controls.message.value,
            groupId: (_c = this.currentChat) === null || _c === void 0 ? void 0 : _c.id
        };
        this.http.sendMessage(newmessage).subscribe(res => {
            this.sendMessageForm.reset();
            // this.appendNewMessage(newmessage)
        }, error => {
            alert('Some Error Has Been');
            console.error(error);
        });
    }
    // I Stoped This Code Becuse I Will Push Message To Messages By Socket.io
    // appendNewMessage(newMessage: IMessage): void {
    //   let groupTargt = this.groups?.find(c => c.id == newMessage.groupId) as IGroup;
    //   groupTargt.messages.push(newMessage);
    //   groupTargt.lastMessage = newMessage.message;
    // }
    /**
     * Fill Current Chat
     * @param groupName
     */
    fillCurretnChat(groupName) {
        var _a;
        if (!this.groups)
            return;
        this.currentChat = this.groups.find(gr => gr.resourcesKey == groupName);
        clickOnGroupChat((_a = this.currentChat) === null || _a === void 0 ? void 0 : _a.id);
    }
} //End Class
ChattingComponent.ɵfac = function ChattingComponent_Factory(t) { return new (t || ChattingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
ChattingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChattingComponent, selectors: [["app-chatting"]], decls: 94, vars: 4, consts: [[1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12"], [1, "chat-system"], [1, "hamburger"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-menu", "mail-menu", "d-lg-none"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], [1, "user-list-box"], [3, "groupsLoaded"], [1, "chat-box"], [1, "chat-not-selected"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-message-square"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], [1, "overlay-phone-call"], [1, ""], [1, "calling-user-info"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-arrow-left-circle", "go-back-chat"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 8 8 12 12 16"], ["x1", "16", "y1", "12", "x2", "8", "y2", "12"], [1, "user-name"], [1, "call-status"], [1, "calling-user-img"], ["src", "assets/img/90x90.jpg", "alt", "dynamic-image"], [1, "timer"], [1, "minutes"], [1, "seconds"], [1, "calling-options"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-video", "switch-to-video-call"], ["points", "23 7 16 12 23 17 23 7"], ["x", "1", "y", "5", "width", "15", "height", "14", "rx", "2", "ry", "2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-mic", "switch-to-microphone"], ["d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"], ["d", "M19 10v2a7 7 0 0 1-14 0v-2"], ["x1", "12", "y1", "19", "x2", "12", "y2", "23"], ["x1", "8", "y1", "23", "x2", "16", "y2", "23"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-plus", "add-more-caller"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-phone-off", "cancel-call"], ["d", "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"], ["x1", "23", "y1", "1", "x2", "1", "y2", "23"], [1, "overlay-video-call"], ["src", "assets/img/175x115.jpg", "alt", "video-chat", 1, "video-caller"], [1, "d-flex"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-phone", "switch-to-phone-call"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-video-off", "cancel-call"], ["d", "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [1, "chat-box-inner"], [1, "chat-meta-user"], ["class", "current-chat-user-name", 4, "ngIf"], [1, "chat-conversation-box"], ["id", "chat-conversation-box-scroll", 1, "chat-conversation-box-scroll"], ["class", "chat", 4, "ngFor", "ngForOf"], ["class", "chat-footer", 4, "ngIf"], [1, "current-chat-user-name"], ["alt", "dynamic-image", 3, "src"], [1, "name", 3, "innerHtml"], [1, "chat"], [1, "conversation-start"], ["class", "bubble", 3, "innerHtml", "ngClass", 4, "ngFor", "ngForOf"], [1, "bubble", 3, "innerHtml", "ngClass"], [1, "chat-footer"], [1, "chat-input"], [1, "chat-form", 3, "formGroup", "submit"], ["type", "text", "formControlName", "message", 1, "mail-write-box", "form-control", 3, "placeholder"]], template: function ChattingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "line", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "line", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "line", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-groups", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Click User To Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "circle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "polyline", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "line", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Calling...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "polygon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "rect", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "svg", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "line", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "line", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "line", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "line", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "svg", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "line", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "circle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "polyline", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "line", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Calling...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "svg", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "svg", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "line", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "line", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "line", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "line", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "svg", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "line", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, ChattingComponent_div_89_Template, 4, 2, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, ChattingComponent_div_92_Template, 3, 2, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, ChattingComponent_div_93_Template, 6, 2, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("groupsLoaded", ctx.getGroupsWheneLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentChat);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.isLoggedIn);
    } }, directives: [_sections_groups_groups_component__WEBPACK_IMPORTED_MODULE_6__["GroupsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0dGluZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChattingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-chatting',
                templateUrl: './chatting.component.html',
                styleUrls: ['./chatting.component.css']
            }]
    }], function () { return [{ type: _services_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"] }, { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "AF45":
/*!***************************************************************!*\
  !*** ./src/app/sections/logged-user/logged-user.component.ts ***!
  \***************************************************************/
/*! exports provided: LoggedUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedUserComponent", function() { return LoggedUserComponent; });
/* harmony import */ var _services_google_signin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/google.signin.service */ "/6ZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/current.user.service */ "PwXG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["signInElemnt"];
function LoggedUserComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.user.userData.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.user.userData.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class LoggedUserComponent {
    constructor(user) {
        this.user = user;
    }
    ngOnInit() {
        this.initGoogleSDK();
    }
    /**
     * Init Google SDK
     */
    initGoogleSDK() {
        _services_google_signin_service__WEBPACK_IMPORTED_MODULE_0__["GoogleSignInService"].initGoogleSDK().then(auth => {
            var _a;
            auth.attachClickHandler((_a = this.signInElemnt) === null || _a === void 0 ? void 0 : _a.nativeElement, {}, userInfo => {
                let userIn = userInfo.getBasicProfile();
                this.signIn(userIn);
            }, error => {
                alert("Error In Sign In By Google");
            });
        });
    }
    /**Sign out */
    signOut() {
        this.user.signOut();
    }
    /** User Sign In */
    signIn(userIn) {
        this.user.signIn({
            name: userIn.getName(),
            email: userIn.getEmail(),
            image: userIn.getImageUrl()
        });
    }
} //End Class
LoggedUserComponent.ɵfac = function LoggedUserComponent_Factory(t) { return new (t || LoggedUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"])); };
LoggedUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoggedUserComponent, selectors: [["app-logged-user"]], viewQuery: function LoggedUserComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.signInElemnt = _t.first);
    } }, decls: 20, vars: 5, consts: [["href", "javascript:void(0);", "id", "userProfileDropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "user"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-user-check"], ["d", "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "8.5", "cy", "7", "r", "4"], ["points", "17 11 19 13 23 9"], ["aria-labelledby", "userProfileDropdown", 1, "dropdown-menu", "position-absolute", "e-animated", "e-fadeInUp"], ["class", "user-profile-section", 4, "ngIf"], [1, "dropdown-item", 3, "hidden"], ["signInElemnt", ""], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "google", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 488 512", 1, "svg-inline--fa", "fa-google", "fa-w-16"], ["fill", "currentColor", "d", "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"], [3, "innerHtml"], [3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-log-out"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "user-profile-section"], [1, "media", "mx-auto"], ["alt", "avatar", 1, "img-fluid", "mr-2", 3, "src"], [1, "media-body"]], template: function LoggedUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "circle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "polyline", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LoggedUserComponent_div_6_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoggedUserComponent_Template_a_click_14_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "polyline", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "line", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.user.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx.user.resources.signinByGoogle, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.user.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx.user.resources.logOut, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dnZWQtdXNlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoggedUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-logged-user',
                templateUrl: './logged-user.component.html',
                styleUrls: ['./logged-user.component.css']
            }]
    }], function () { return [{ type: _services_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"] }]; }, { signInElemnt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["signInElemnt"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "https://chattingroomserver.herokuapp.com/",
    googleClinetId: "342448434212-hugkcjlskevb9qvbjfhfadj30kjmis53.apps.googleusercontent.com"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C7Oo":
/*!*****************************************************!*\
  !*** ./src/app/sections/groups/groups.component.ts ***!
  \*****************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/socket.io.service */ "d5sn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/http/http.service */ "H5vj");
/* harmony import */ var src_services_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/current.user.service */ "PwXG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_group_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/group.filter.pipe */ "ZuHj");










const _c0 = function (a1) { return ["/", a1]; };
function GroupsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, group_r1.resourcesKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-chat", group_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.env.apiUrl + group_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.user.resources[group_r1.resourcesKey], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", group_r1.lastMessage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class GroupsComponent {
    constructor(http, user) {
        this.http = http;
        this.user = user;
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    ngOnInit() {
        this.getGroups();
    }
    /**
     * Get Groups
     */
    getGroups() {
        this.http.getGroups().subscribe(res => {
            var _a;
            this.groups = res;
            _services_socket_io_service__WEBPACK_IMPORTED_MODULE_0__["SocketIoService"].onMessage().subscribe((newMessage) => {
                var _a;
                newMessage.isFromMe = newMessage.userInfo.email == ((_a = this.user.userData) === null || _a === void 0 ? void 0 : _a.email);
                if (newMessage.isFromMe)
                    return;
                this.appendNewMessage(newMessage);
            });
            //Pass Groups To Parent Component
            (_a = this.groupsLoaded) === null || _a === void 0 ? void 0 : _a.emit(this.groups);
            setTimeout(() => {
                initChat();
            }, 0);
        }, error => {
            alert('Error');
            console.error('Get Groups ', error);
        });
    }
    appendNewMessage(newMessage) {
        var _a;
        let groupTargt = (_a = this.groups) === null || _a === void 0 ? void 0 : _a.find(c => c.id == newMessage.groupId);
        groupTargt.messages.push(newMessage);
        groupTargt.lastMessage = newMessage.message;
    }
} //End Class
GroupsComponent.ɵfac = function GroupsComponent_Factory(t) { return new (t || GroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"])); };
GroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GroupsComponent, selectors: [["app-groups"]], inputs: { groupsLoaded: "groupsLoaded" }, decls: 8, vars: 5, consts: [[1, "search"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-search"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "people"], ["class", "person", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "person", 3, "routerLink"], [1, "user-info"], [1, "f-head"], ["alt", "avatar", 3, "src"], [1, "f-body"], [1, "meta-info"], ["data-name", "Nia Hillyer", 1, "user-name", 3, "innerHtml"], [1, "preview", 3, "innerHtml"]], template: function GroupsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "line", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupsComponent_Template_input_ngModelChange_4_listener($event) { return ctx.textSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, GroupsComponent_div_6_Template, 8, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "groupFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.textSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 2, ctx.groups, ctx.textSearch));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], pipes: [_pipes_group_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["GroupFilterPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GroupsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-groups',
                templateUrl: './groups.component.html',
                styles: []
            }]
    }], function () { return [{ type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: src_services_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"] }]; }, { groupsLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "H5vj":
/*!*******************************************!*\
  !*** ./src/services/http/http.service.ts ***!
  \*******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class HttpService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Get Groups
     */
    getGroups() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}api/groups/getGroups`);
    }
    /**Send Message */
    sendMessage(message) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}api/messages/send`, JSON.stringify(message));
    }
} //End Class
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "JRGT":
/*!*********************************************!*\
  !*** ./src/resources/resources.ar.class.ts ***!
  \*********************************************/
/*! exports provided: ResourcesAr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesAr", function() { return ResourcesAr; });
class ResourcesAr {
    constructor() {
        this.arabic = "العربية";
        this.english = "الإنجليزية";
        this.humor = "الفكاهة";
        this.science_tech = "العلوم والتكنولوجيا";
        this.travel = "السفر";
        this.buy_sell = "بيع وشراء";
        this.business = "الأعمال";
        this.style = "استايل و موضة";
        this.health = "الصحة";
        this.animals = "الحيوانات";
        this.sports_fitness = "الرياضة واللياقة البدنية";
        this.education = "التعليم";
        this.arts = "الفنون";
        this.Entertainment = "الترفيه";
        this.relationships_identity = "العلاقات والهوية";
        this.parenting = "الابوه و الامومة";
        this.hobbies_interests = "الهوايات والاهتمامات";
        this.food_drink = "الطعام والشراب";
        this.vehicles_commutes = "المركبات و التنقلات";
        this.civics_community = "التربية المدنية والمجتمع";
        this.covid = "كورونا 19";
        this.signinByGoogle = "سجل الدخول بواسطة جوجل";
        this.logOut = "تسجيل الخروج";
        this.message = "الرسالة";
    }
}


/***/ }),

/***/ "LKR5":
/*!***********************************************!*\
  !*** ./src/services/local.storage.service.ts ***!
  \***********************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _consts_language_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../consts/language.const */ "NUmk");

class LocalStorageService {
    /**
     * Save User Langauge In Local Storage
     */
    static get currentLanguage() {
        return localStorage.getItem('lang') || _consts_language_const__WEBPACK_IMPORTED_MODULE_0__["languageConst"].english;
    }
    /**
     * Get User Langauge In Local Storage
     */
    static set currentLanguage(value) {
        localStorage.setItem('lang', value || "");
    }
    /**
 * Save User Data In Local Storage
 */
    static get userData() {
        return JSON.parse(localStorage.getItem('userData'));
    }
    /**
     * Get User Data From  Local Storage
     */
    static set userData(value) {
        if (!value)
            localStorage.removeItem("userData");
        else
            localStorage.setItem('userData', JSON.stringify(value));
    }
} //End Class


/***/ }),

/***/ "NUmk":
/*!**************************************!*\
  !*** ./src/consts/language.const.ts ***!
  \**************************************/
/*! exports provided: languageConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageConst", function() { return languageConst; });
const languageConst = {
    arabic: "ar",
    english: "en"
};


/***/ }),

/***/ "PwXG":
/*!**********************************************!*\
  !*** ./src/services/current.user.service.ts ***!
  \**********************************************/
/*! exports provided: CurrentUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserService", function() { return CurrentUserService; });
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local.storage.service */ "LKR5");
/* harmony import */ var _consts_language_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../consts/language.const */ "NUmk");
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources.service */ "1JUL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./language.service */ "lRKa");






class CurrentUserService {
    constructor() {
        this.isLoggedIn = false;
        this.currentLanguage = _language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"].currentLanugage;
        this.resources = _resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"].getCurrentResources();
        this.updateUserInformation(true);
    }
    /**
     * Update User Information
     */
    updateUserInformation(updateToFirstTime = false) {
        //Update Current Lanugage
        this.currentLanguage = _language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"].currentLanugage;
        //Update Resources
        this.resources = _resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"].getCurrentResources();
        this.userData = _local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"].userData;
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
    updateCssFiles(updateToFirstTime = false) {
        let newElement = document.createElement('link');
        newElement.rel = "stylesheet";
        switch (this.currentLanguage.code) {
            case _consts_language_const__WEBPACK_IMPORTED_MODULE_1__["languageConst"].arabic:
                {
                    debugger;
                    //Add New RTL File
                    newElement.href = "assets/css/rtl/plugins.css";
                    newElement.id = "styleRTL";
                    document.head.appendChild(newElement);
                    //Remove Old LTR File Style
                    setTimeout(() => {
                        var _a;
                        (_a = document.getElementById('styleLTR')) === null || _a === void 0 ? void 0 : _a.remove();
                    }, updateToFirstTime ? 0 : 100);
                }
                break;
            default:
                {
                    newElement.href = "assets/css/ltr/plugins.css";
                    newElement.id = "styleLTR";
                    document.head.appendChild(newElement);
                    //Remove Old RTL File Style
                    setTimeout(() => {
                        var _a;
                        (_a = document.getElementById('styleRTL')) === null || _a === void 0 ? void 0 : _a.remove();
                    }, updateToFirstTime ? 0 : 100);
                }
                break;
        }
    }
    /**
     * Save User Data In Local Sotage
     */
    signIn(userData) {
        this.userData = userData;
        this.isLoggedIn = true;
        _local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"].userData = this.userData;
    }
    /**
     * Sign Out
     */
    signOut() {
        _local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"].userData = null;
        this.isLoggedIn = false;
        this.userData = null;
    }
} //End CLass
CurrentUserService.ɵfac = function CurrentUserService_Factory(t) { return new (t || CurrentUserService)(); };
CurrentUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CurrentUserService, factory: CurrentUserService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CurrentUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/socket.io.service */ "d5sn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sections_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/header/header.component */ "/y+i");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor() {
        this.title = 'frontEnd';
    }
    ngOnInit() {
        _services_socket_io_service__WEBPACK_IMPORTED_MODULE_0__["SocketIoService"].init();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_sections_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "YQ2q":
/*!*********************************************!*\
  !*** ./src/resources/resources.en.class.ts ***!
  \*********************************************/
/*! exports provided: ResourcesEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesEn", function() { return ResourcesEn; });
class ResourcesEn {
    constructor() {
        this.arabic = "Arabic";
        this.english = "Endlish";
        this.humor = "Humor";
        this.science_tech = "Science And Tech";
        this.travel = "Travel";
        this.buy_sell = "Buy And Sell";
        this.business = "Business";
        this.style = "Style";
        this.health = "Health";
        this.animals = "Animals";
        this.sports_fitness = "Sports And fitness";
        this.education = "Education";
        this.arts = "Arts";
        this.Entertainment = "Entertainment";
        this.relationships_identity = "Relationships And Identity";
        this.parenting = "Parenting";
        this.hobbies_interests = "Hobbies And Interests";
        this.food_drink = "Food And Drink";
        this.vehicles_commutes = "Vehicles And Commutes";
        this.civics_community = "Civics And community";
        this.covid = "Covid 19";
        this.signinByGoogle = "Sign-in by google";
        this.logOut = "Log Out";
        this.message = "Message";
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_http_http_intercptor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/http/http.intercptor.service */ "3Sm/");
/* harmony import */ var _pipes_group_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pipes/group.filter.pipe */ "ZuHj");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/http/http.service */ "H5vj");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _sections_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/header/header.component */ "/y+i");
/* harmony import */ var _chatting_chatting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chatting/chatting.component */ "87lf");
/* harmony import */ var _sections_change_language_change_language_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/change-language/change-language.component */ "f1/p");
/* harmony import */ var src_services_current_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/current.user.service */ "PwXG");
/* harmony import */ var _sections_groups_groups_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/groups/groups.component */ "C7Oo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _sections_logged_user_logged_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sections/logged-user/logged-user.component */ "AF45");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [src_services_current_user_service__WEBPACK_IMPORTED_MODULE_10__["CurrentUserService"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
            useClass: _services_http_http_intercptor_service__WEBPACK_IMPORTED_MODULE_0__["HttpInterceptorService"],
            multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _sections_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _chatting_chatting_component__WEBPACK_IMPORTED_MODULE_8__["ChattingComponent"],
        _sections_change_language_change_language_component__WEBPACK_IMPORTED_MODULE_9__["ChangeLanguageComponent"],
        _sections_groups_groups_component__WEBPACK_IMPORTED_MODULE_11__["GroupsComponent"],
        _pipes_group_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["GroupFilterPipe"],
        _sections_logged_user_logged_user_component__WEBPACK_IMPORTED_MODULE_14__["LoggedUserComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _sections_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _chatting_chatting_component__WEBPACK_IMPORTED_MODULE_8__["ChattingComponent"],
                    _sections_change_language_change_language_component__WEBPACK_IMPORTED_MODULE_9__["ChangeLanguageComponent"],
                    _sections_groups_groups_component__WEBPACK_IMPORTED_MODULE_11__["GroupsComponent"],
                    _pipes_group_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["GroupFilterPipe"],
                    _sections_logged_user_logged_user_component__WEBPACK_IMPORTED_MODULE_14__["LoggedUserComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
                ],
                providers: [src_services_current_user_service__WEBPACK_IMPORTED_MODULE_10__["CurrentUserService"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
                        useClass: _services_http_http_intercptor_service__WEBPACK_IMPORTED_MODULE_0__["HttpInterceptorService"],
                        multi: true
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZuHj":
/*!****************************************!*\
  !*** ./src/pipes/group.filter.pipe.ts ***!
  \****************************************/
/*! exports provided: GroupFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFilterPipe", function() { return GroupFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/current.user.service */ "PwXG");



class GroupFilterPipe {
    constructor(user) {
        this.user = user;
    }
    transform(items, textSearch) {
        if (!textSearch || !items)
            return items;
        return this.filterNow(items, textSearch);
    }
    /**
     * Filter Group Now
     */
    filterNow(items, textSearch) {
        return items.filter(group => this.user.resources[group.resourcesKey].search(new RegExp(textSearch, "i")) >= 0);
    }
} //End Class
GroupFilterPipe.ɵfac = function GroupFilterPipe_Factory(t) { return new (t || GroupFilterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
GroupFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "groupFilter", type: GroupFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "groupFilter"
            }]
    }], function () { return [{ type: _services_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"] }]; }, null); })();


/***/ }),

/***/ "d5sn":
/*!*******************************************!*\
  !*** ./src/services/socket.io.service.ts ***!
  \*******************************************/
/*! exports provided: SocketIoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketIoService", function() { return SocketIoService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");



class SocketIoService {
    static init() {
        this.socketServer = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_1__["io"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);
    }
    static onMessage() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](obs => {
            this.socketServer.on("sendMessage", (message) => {
                obs.next(message);
            });
        });
    }
} //End Class


/***/ }),

/***/ "f1/p":
/*!***********************************************************************!*\
  !*** ./src/app/sections/change-language/change-language.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChangeLanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLanguageComponent", function() { return ChangeLanguageComponent; });
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/local.storage.service */ "LKR5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/language.service */ "lRKa");
/* harmony import */ var src_services_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/current.user.service */ "PwXG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ChangeLanguageComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangeLanguageComponent_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const lang_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.updateUserLnaguage(lang_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", lang_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0", ctx_r0.user.resources[lang_r1.resourcesKey], "");
} }
class ChangeLanguageComponent {
    constructor(user) {
        this.user = user;
    }
    ngOnInit() {
        this.languages = src_services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"].getLnaguages();
    }
    /**
     * Udate Current User Language
     */
    updateUserLnaguage(lang) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"].currentLanguage = lang.code;
        this.user.updateUserInformation();
    }
} //End Class
ChangeLanguageComponent.ɵfac = function ChangeLanguageComponent_Factory(t) { return new (t || ChangeLanguageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"])); };
ChangeLanguageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChangeLanguageComponent, selectors: [["app-change-language"]], decls: 4, vars: 2, consts: [["href", "javascript:void(0);", "id", "language-dropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["alt", "flag", 1, "flag-width", 3, "src"], ["aria-labelledby", "language-dropdown", 1, "dropdown-menu", "position-absolute"], ["class", "dropdown-item d-flex", "href", "javascript:void(0);", 3, "click", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", 3, "click"], [1, "align-self-center"]], template: function ChangeLanguageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChangeLanguageComponent_a_3_Template, 4, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.user.currentLanguage.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.languages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtbGFuZ3VhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChangeLanguageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-change-language',
                templateUrl: './change-language.component.html',
                styleUrls: ['./change-language.component.css']
            }]
    }], function () { return [{ type: src_services_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"] }]; }, null); })();


/***/ }),

/***/ "lRKa":
/*!******************************************!*\
  !*** ./src/services/language.service.ts ***!
  \******************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local.storage.service */ "LKR5");
/* harmony import */ var _consts_language_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../consts/language.const */ "NUmk");


class LanguageService {
    /**
     * Get All Languages
     */
    static getLnaguages() {
        return [{
                code: _consts_language_const__WEBPACK_IMPORTED_MODULE_1__["languageConst"].arabic,
                name: "Arabic Language",
                icon: "assets/img/sa.svg",
                resourcesKey: "arabic"
            },
            {
                code: _consts_language_const__WEBPACK_IMPORTED_MODULE_1__["languageConst"].english,
                name: "English Language",
                icon: "assets/img/usa.svg",
                resourcesKey: "english"
            }];
    }
    /**Get Current Lanugage */
    static get currentLanugage() {
        return this.getLnaguages().find(lang => lang.code == _local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"].currentLanguage);
    }
} //End Class


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _chatting_chatting_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatting/chatting.component */ "87lf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    {
        path: "",
        component: _chatting_chatting_component__WEBPACK_IMPORTED_MODULE_0__["ChattingComponent"],
        pathMatch: "full"
    },
    {
        path: ":name",
        component: _chatting_chatting_component__WEBPACK_IMPORTED_MODULE_0__["ChattingComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map