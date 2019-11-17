(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Top toolbar -->\n<mat-toolbar class=\"toolbar mat-elevation-z3\">\n  <button\n    type=\"button\"\n    mat-icon-button\n    *ngIf=\"isHandset$ | async\"\n    (click)=\"sidenav.toggle()\"\n  >\n    <mat-icon>menu</mat-icon>\n  </button>\n\n  <img\n    *ngIf=\"!(isHandset$ | async)\"\n    width=\"25px\"\n    src=\"assets/images/logo.png\"\n  />\n  <a routerLink=\"/\"><span class=\"radvil\">&nbsp;TMF ESPORT</span></a>\n\n  <span class=\"spacer\"></span>\n  <div *ngIf=\"!(isHandset$ | async)\">\n    <a\n      mat-button\n      routerLink=\"auth/sign-in\"\n      routerLinkActive=\"active\"\n      *ngIf=\"!authService.loggedIn()\"\n    >\n      <span>LOGIN</span>\n    </a>\n    <a\n      mat-button\n      routerLink=\"esport/registration\"\n      routerLinkActive=\"active\"\n      *ngIf=\"authService.loggedIn()\"\n    >\n      <span>ADD TEAM</span>\n    </a>\n    <a\n      mat-button\n      routerLink=\"esport/all-teams\"\n      routerLinkActive=\"active\"\n    >\n      <span>ALL TEAMS</span>\n    </a>\n    <a\n      mat-button\n      routerLink=\"esport/edit-teams\"\n      routerLinkActive=\"active\"\n      *ngIf=\"authService.loggedIn()\"\n    >\n      <span>MANAGE TEAMS</span>\n    </a>\n    <a\n      mat-button\n      routerLink=\"auth/register\"\n      routerLinkActive=\"active\"\n      *ngIf=\"authService.loggedIn()\"\n    >\n      <span>ADD ADMIN</span>\n    </a>\n  </div>\n\n  <!-- USER MENU -->\n  <button mat-icon-button [matMenuTriggerFor]=\"userMenu\">\n    <mat-icon class=\"user-icon\">account_circle</mat-icon>\n  </button>\n  <mat-menu class=\"user-panel\" #userMenu=\"matMenu\" xPosition=\"before\">\n    <a mat-menu-item routerLink=\"auth/sign-in\" routerLinkActive=\"active\" *ngIf=\"!authService.loggedIn()\">LOGIN</a>\n    <a mat-menu-item routerLink=\"esport/profile\" routerLinkActive=\"active\" *ngIf=\"authService.loggedIn()\">PROFILE</a>\n    <a mat-menu-item  (click)=\"onLogoutClick()\" *ngIf=\"authService.loggedIn()\">LOGOUT</a>\n  </mat-menu>\n</mat-toolbar>\n\n<!-- Sidenav container -->\n<mat-sidenav-container>\n  <mat-sidenav\n    #sidenav\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n  >\n    <!-- Menu list -->\n    <div class=\"menu-group\">\n      <span class=\"nav-subt\">MAIN MENU</span>\n      <mat-nav-list (click)=\"sidenav.toggle()\">\n        <!-- <a\n          mat-list-item\n          routerLink=\"auth/sign-in\"\n          routerLinkActive=\"active\"\n          *ngIf=\"!authService.loggedIn()\"\n        >\n          <mat-icon>fingerprint</mat-icon>\n          <span class=\"menu-list\">LOGIN</span>\n        </a> -->\n        <a\n          mat-list-item\n          routerLink=\"esport/registration\"\n          routerLinkActive=\"active\"\n          *ngIf=\"authService.loggedIn()\"\n        >\n          <mat-icon>assignment</mat-icon>\n          <span class=\"menu-list\">ADD TEAM</span>\n        </a>\n        <a\n          mat-list-item\n          routerLink=\"esport/all-teams\"\n          routerLinkActive=\"active\"\n        >\n          <mat-icon>subject</mat-icon>\n          <span class=\"menu-list\">ALL TEAMS</span>\n        </a>\n        <a\n          mat-list-item\n          *ngIf=\"authService.loggedIn()\"\n          routerLink=\"esport/edit-teams\"\n          routerLinkActive=\"active\"\n        >\n          <mat-icon>edit</mat-icon>\n          <span class=\"menu-list\">MANAGE TEAMS</span>\n        </a>\n        <a\n          mat-list-item\n          routerLink=\"auth/register\"\n          routerLinkActive=\"active\"\n          *ngIf=\"authService.loggedIn()\"\n        >\n          <mat-icon>person_add</mat-icon>\n          <span class=\"menu-list\">ADD ADMIN</span>\n        </a>\n        <!-- <a\n          mat-list-item\n          *ngIf=\"authService.loggedIn()\"\n          routerLink=\"esport/profile\"\n          routerLinkActive=\"active\"\n        >\n          <mat-icon>person_pin</mat-icon>\n          <span class=\"menu-list\">PROFILE</span>\n        </a>\n        <a\n          mat-list-item\n          *ngIf=\"authService.loggedIn()\"\n          (click)=\"onLogoutClick()\"\n        >\n          <mat-icon>power_settings_new</mat-icon>\n          <span class=\"menu-list\">LOGOUT</span>\n        </a> -->\n      </mat-nav-list>\n      <mat-divider></mat-divider>\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content class=\"page-container\">\n    <router-outlet></router-outlet>\n\n    <!-- Footer -->\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 links\">\n          <a href=\"https://esport.teammodifier.com\" target=\"_blank\">\n            <mat-icon fontSet=\"fas\" fontIcon=\"fa-globe-asia\"></mat-icon>\n            <span *ngIf=\"!(isHandset$ | async)\">Website</span>\n          </a>\n          <a href=\"https://www.github.com/radvil\" target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-github\"></mat-icon>\n            <span *ngIf=\"!(isHandset$ | async)\">Github</span>\n          </a>\n          <a href=\"https://www.facebook.com/rtikkolakatimur\" target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-facebook\"></mat-icon>\n            <span *ngIf=\"!(isHandset$ | async)\">Facebook</span>\n          </a>\n          <a href=\"https://www.instagram.com/rtikkolakatimur\" target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-instagram\"></mat-icon>\n            <span *ngIf=\"!(isHandset$ | async)\">Instagram</span>\n          </a>\n          <a href=\"https://www.youtube.com/channel/UCXC56sWhi2sM22gFqpojaYg\" target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-youtube\"></mat-icon>\n            <span *ngIf=\"!(isHandset$ | async)\">Youtube</span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 signature\">\n          &#169; <span class=\"year\">{{ year }}</span> - Team Modifier\n          <br class=\"d-block d-sm-none\" />\n          <!-- <a matTooltip=\"Radvil\" matTooltipPosition=\"before\" href=\"#\">\n            <mat-icon fontSet=\"fas\" fontIcon=\"fa-rocket\"></mat-icon>\n            1.0.0 <span>Dev mode</span>\n          </a> -->\n        </div>\n      </div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/fesm2015/service-work-is-loading.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(isLoadingService, router) {
                    this.isLoadingService = isLoadingService;
                    this.router = router;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // Note, because `IsLoadingService#isLoading$()` returns
                    // a new observable each time it is called, it shouldn't
                    // be called directly inside a component template.
                    this.isLoading = this.isLoadingService.isLoading$();
                    this.router.events
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"] ||
                        event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] ||
                        event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] ||
                        event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]; })).subscribe(function (event) {
                        // If it's the start of navigation, `add()` a loading indicator
                        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                            _this.isLoadingService.add();
                            return;
                        }
                        // Else navigation has ended, so `remove()` a loading indicator
                        _this.isLoadingService.remove();
                    });
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_3__["IsLoadingService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: "\n    <mat-progress-bar\n      *ngIf=\"isLoading | async\"\n      mode=\"indeterminate\"\n      color=\"warn\"\n      style=\"position: absolute; top: 0; z-index: 999; height: 3px;\"\n    >\n    </mat-progress-bar>\n\n    <app-layout>\n    </app-layout>\n  ",
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: jwtTokenGetter, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtTokenGetter", function () { return jwtTokenGetter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
            /* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            function jwtTokenGetter() {
                return localStorage.getItem('access_token');
            }
            ;
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                        _app_routing__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                        _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtModule"].forRoot({ config: {
                                tokenGetter: jwtTokenGetter
                            } }),
                        _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production })
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/app.routing.ts": 
        /*!********************************!*\
          !*** ./src/app/app.routing.ts ***!
          \********************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var appRoutes = [
                {
                    path: '',
                    redirectTo: 'esport',
                    pathMatch: 'full'
                },
                {
                    path: 'esport',
                    loadChildren: function () { return Promise.all(/*! import() | esport-esport-module */ [__webpack_require__.e("common"), __webpack_require__.e("esport-esport-module")]).then(__webpack_require__.bind(null, /*! ./esport/esport.module */ "./src/app/esport/esport.module.ts")).then(function (m) { return m.EsportModule; }); }
                },
                {
                    path: 'auth',
                    loadChildren: function () { return Promise.all(/*! import() | auth-auth-module */ [__webpack_require__.e("common"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then(function (m) { return m.AuthModule; }); }
                },
                {
                    path: 'pages',
                    loadChildren: function () { return __webpack_require__.e(/*! import() | pages-pages-module */ "pages-pages-module").then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "./src/app/pages/pages.module.ts")).then(function (m) { return m.PagesModule; }); }
                },
                {
                    path: '**',
                    redirectTo: 'pages/404',
                    pathMatch: 'full'
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/layout/layout.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/layout/layout.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".toolbar {\n  top: 0px;\n  position: fixed;\n  z-index: 998;\n  background-color: #f5f5f5 !important;\n}\n.toolbar .spacer {\n  flex: 1 1 auto;\n}\n.toolbar a {\n  color: #666;\n}\n.toolbar a:hover {\n  color: #333;\n}\n.toolbar .mat-button {\n  color: #666;\n}\n.toolbar .mat-button.active {\n  color: white;\n  background-color: #35aace;\n}\n.toolbar mat-icon {\n  font-size: 20px;\n}\n.mat-icon-button .user-icon {\n  font-size: 170%;\n}\nmat-sidenav-container {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n}\nmat-sidenav-container mat-sidenav.sidenav {\n  padding-top: 57px;\n  position: fixed;\n  width: 245px;\n}\nmat-sidenav-container mat-sidenav.sidenav .menu-group {\n  padding-top: 10px;\n}\nmat-sidenav-container mat-sidenav.sidenav .nav-subt {\n  font-size: 15px;\n  font-weight: bold;\n  margin-left: 25px;\n  color: #bbb;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-icon {\n  margin-left: 9px;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list {\n  padding-top: 0;\n  padding-bottom: 0;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item {\n  font-size: 14px;\n  color: #666;\n  height: 46px;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item.active {\n  font-weight: bold;\n  background-color: #ddd;\n  color: #333;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item.active mat-icon {\n  color: #35aace;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item:hover {\n  color: #35aace;\n  background-color: #eee;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item:hover mat-icon {\n  margin-top: -9px;\n  margin-left: 5px;\n  font-size: 33px;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item:hover .menu-list {\n  margin-left: 31px;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item mat-icon {\n  font-size: 22px;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item .menu-list {\n  margin-left: 27px;\n}\nmat-sidenav-container .footer {\n  flex: 0 0 auto;\n  padding: 0 15px;\n  text-align: center;\n}\nmat-sidenav-container .footer .row {\n  padding: 10px 0;\n}\nmat-sidenav-container .footer .row .links a {\n  transition: padding 0.5s;\n  display: inline-block;\n  padding: 20px 5px;\n  color: #5c5c5c;\n}\nmat-sidenav-container .footer .row .links a:hover {\n  text-decoration: none;\n}\nmat-sidenav-container .footer .row .links a mat-icon {\n  font-size: 30px;\n  width: 35px;\n}\nmat-sidenav-container .footer .row .links a span {\n  display: inline-block;\n  width: 75px;\n  padding: 0 0 0 3px;\n  overflow: hidden;\n  text-align: left;\n  white-space: nowrap;\n  transition: width 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmFwYWFhaC9Db2Rlcy9fU0FNUExFUy90ZWFtbW9kaWZpZXIvY2xpZW50L3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDQUY7QURDRTtFQUNFLGNBQUE7QUNDSjtBRENFO0VBQ0UsV0FBQTtBQ0NKO0FEQUk7RUFDRSxXQUFBO0FDRU47QURDRTtFQUNFLFdBQUE7QUNDSjtBREFJO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDRU47QURDRTtFQUNFLGVBQUE7QUNDSjtBRElFO0VBQ0UsZUFBQTtBQ0RKO0FES0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNGRjtBRElFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FER0k7RUFDRSxpQkFBQTtBQ0ROO0FER0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNETjtBREdJO0VBQ0UsZ0JBQUE7QUNETjtBREtJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDSE47QURJTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FER1E7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0RWO0FERVU7RUFDRSxjQUFBO0FDQVo7QURHUTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQ0RWO0FERVU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0FaO0FERVU7RUFDRSxpQkFBQTtBQ0FaO0FER1E7RUFDRSxlQUFBO0FDRFY7QURHUTtFQUNFLGlCQUFBO0FDRFY7QURRRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRE9JO0VBQ0UsZUFBQTtBQ0xOO0FET1E7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDTFY7QURNVTtFQUNFLHFCQUFBO0FDSlo7QURNVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDSlo7QURNVTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNKWiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUb3AgdG9vbGJhclxyXG4udG9vbGJhciB7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5ODtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XHJcbiAgLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgIH1cclxuICB9XHJcbiAgLm1hdC1idXR0b24ge1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCAxNzAsIDIwNik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtaWNvbi1idXR0b24ge1xyXG4gIC51c2VyLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNzAlO1xyXG4gIH1cclxufVxyXG5cclxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgbWF0LXNpZGVuYXYuc2lkZW5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTdweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAyNDVweDtcclxuICAgIC5tZW51LWdyb3VwIHtcclxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubmF2LXN1YnQge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgY29sb3I6ICNiYmI7XHJcbiAgICB9XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTGlzdCBpdGVtc1xyXG4gICAgbWF0LW5hdi1saXN0IHtcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICBhLm1hdC1saXN0LWl0ZW0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNTMsIDE3MCwgMjA2KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDUzLCAxNzAsIDIwNik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtOXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudS1saXN0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMxcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnUtbGlzdCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjdweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEZvb3RlclxyXG4gIC5mb290ZXIge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAucm93IHtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAubGlua3Mge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjVzO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCA1cHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAzcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IC8vIEVuZCBvZiByb3dcclxuICAgIH1cclxuICB9XHJcbiAgLy8gRW5kIG9mIGZvb3RlclxyXG59XHJcbiIsIi50b29sYmFyIHtcbiAgdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG59XG4udG9vbGJhciAuc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4udG9vbGJhciBhIHtcbiAgY29sb3I6ICM2NjY7XG59XG4udG9vbGJhciBhOmhvdmVyIHtcbiAgY29sb3I6ICMzMzM7XG59XG4udG9vbGJhciAubWF0LWJ1dHRvbiB7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnRvb2xiYXIgLm1hdC1idXR0b24uYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVhYWNlO1xufVxuLnRvb2xiYXIgbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5tYXQtaWNvbi1idXR0b24gLnVzZXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTcwJTtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi5zaWRlbmF2IHtcbiAgcGFkZGluZy10b3A6IDU3cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI0NXB4O1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LnNpZGVuYXYgLm1lbnUtZ3JvdXAge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi5zaWRlbmF2IC5uYXYtc3VidCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBjb2xvcjogI2JiYjtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi5zaWRlbmF2IG1hdC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi5zaWRlbmF2IG1hdC1uYXYtbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi5zaWRlbmF2IG1hdC1uYXYtbGlzdCBhLm1hdC1saXN0LWl0ZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xuICBoZWlnaHQ6IDQ2cHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYuc2lkZW5hdiBtYXQtbmF2LWxpc3QgYS5tYXQtbGlzdC1pdGVtLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogIzMzMztcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi5zaWRlbmF2IG1hdC1uYXYtbGlzdCBhLm1hdC1saXN0LWl0ZW0uYWN0aXZlIG1hdC1pY29uIHtcbiAgY29sb3I6ICMzNWFhY2U7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYuc2lkZW5hdiBtYXQtbmF2LWxpc3QgYS5tYXQtbGlzdC1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICMzNWFhY2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYuc2lkZW5hdiBtYXQtbmF2LWxpc3QgYS5tYXQtbGlzdC1pdGVtOmhvdmVyIG1hdC1pY29uIHtcbiAgbWFyZ2luLXRvcDogLTlweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAzM3B4O1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LnNpZGVuYXYgbWF0LW5hdi1saXN0IGEubWF0LWxpc3QtaXRlbTpob3ZlciAubWVudS1saXN0IHtcbiAgbWFyZ2luLWxlZnQ6IDMxcHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYuc2lkZW5hdiBtYXQtbmF2LWxpc3QgYS5tYXQtbGlzdC1pdGVtIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LnNpZGVuYXYgbWF0LW5hdi1saXN0IGEubWF0LWxpc3QtaXRlbSAubWVudS1saXN0IHtcbiAgbWFyZ2luLWxlZnQ6IDI3cHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLmZvb3RlciB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciAuZm9vdGVyIC5yb3cge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLmZvb3RlciAucm93IC5saW5rcyBhIHtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjVzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHggNXB4O1xuICBjb2xvcjogIzVjNWM1Yztcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciAuZm9vdGVyIC5yb3cgLmxpbmtzIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLmZvb3RlciAucm93IC5saW5rcyBhIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB3aWR0aDogMzVweDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciAuZm9vdGVyIC5yb3cgLmxpbmtzIGEgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDc1cHg7XG4gIHBhZGRpbmc6IDAgMCAwIDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/layout/layout.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/layout/layout.component.ts ***!
          \********************************************/
        /*! exports provided: LayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () { return LayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
            /* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/fesm2015/service-work-is-loading.js");
            var LayoutComponent = /** @class */ (function () {
                function LayoutComponent(breakpointObserver, authService, router, isLoadingService, notification) {
                    this.breakpointObserver = breakpointObserver;
                    this.authService = authService;
                    this.router = router;
                    this.isLoadingService = isLoadingService;
                    this.notification = notification;
                    this.isHandset$ = this.breakpointObserver
                        .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
                    this.year = new Date().getFullYear();
                    this.isAuthenticated$ = this.authService.loggedIn();
                }
                LayoutComponent.prototype.onLogoutClick = function () {
                    var _this = this;
                    this.isLoadingService.add();
                    setTimeout(function () {
                        _this.authService.logoutUser();
                        _this.router.navigate(['/auth/sign-in']);
                        _this.isLoadingService.remove();
                        _this.notification.success('You are now logged out');
                        return false;
                    }, 1000);
                };
                return LayoutComponent;
            }());
            LayoutComponent.ctorParameters = function () { return [
                { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_6__["IsLoadingService"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] }
            ]; };
            LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-layout",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")).default]
                })
            ], LayoutComponent);
            /***/ 
        }),
        /***/ "./src/app/layout/layout.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/layout/layout.module.ts ***!
          \*****************************************/
        /*! exports provided: LayoutModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function () { return LayoutModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
            /* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
            var LAYOUTS_COMPONENTS = [
                _layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
            ];
            var LayoutModule = /** @class */ (function () {
                function LayoutModule() {
                }
                return LayoutModule;
            }());
            LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]],
                    declarations: LAYOUTS_COMPONENTS.slice(),
                    exports: LAYOUTS_COMPONENTS.slice(),
                    providers: [_shared__WEBPACK_IMPORTED_MODULE_5__["AuthService"]]
                })
            ], LayoutModule);
            /***/ 
        }),
        /***/ "./src/app/shared/animations/element.animations.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/shared/animations/element.animations.ts ***!
          \*********************************************************/
        /*! exports provided: elementAnimations */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementAnimations", function () { return elementAnimations; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            var elementAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("rowsAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => *", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: "*",
                        opacity: "0",
                        transform: "translateX(-550px)",
                        "box-shadow": "none"
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["sequence"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(".35s ease", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            height: "*",
                            opacity: ".2",
                            transform: "translateX(0)",
                            "box-shadow": "none"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(".35s ease", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: "*", opacity: 1, transform: "translateX(0)" }))
                    ]) // end sequence
                ])
            ]);
            // const STEPS_ALL: any[] = [
            //   query(':enter > *', style({ opacity: 0, position: 'fixed' }), {
            //     optional: true
            //   }),
            //   query(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, style({ opacity: 0 }), {
            //     optional: true
            //   }),
            //   sequence([
            //     query(
            //       ':leave > *',
            //       [
            //         style({ transform: 'translateY(0%)', opacity: 1 }),
            //         animate(
            //           '0.2s ease-in-out',
            //           style({ transform: 'translateY(-3%)', opacity: 0 })
            //         ),
            //         style({ position: 'fixed' })
            //       ],
            //       { optional: true }
            //     ),
            //     query(
            //       ':enter > *',
            //       [
            //         style({
            //           transform: 'translateY(-3%)',
            //           opacity: 0,
            //           position: 'static'
            //         }),
            //         animate(
            //           '0.5s ease-in-out',
            //           style({ transform: 'translateY(0%)', opacity: 1 })
            //         )
            //       ],
            //       { optional: true }
            //     )
            //   ]),
            //   query(
            //     ':enter .' + ROUTE_ANIMATIONS_ELEMENTS,
            //     stagger(75, [
            //       style({ transform: 'translateY(10%)', opacity: 0 }),
            //       animate(
            //         '0.5s ease-in-out',
            //         style({ transform: 'translateY(0%)', opacity: 1 })
            //       )
            //     ]),
            //     { optional: true }
            //   )
            // ];
            /***/ 
        }),
        /***/ "./src/app/shared/index.ts": 
        /*!*********************************!*\
          !*** ./src/app/shared/index.ts ***!
          \*********************************/
        /*! exports provided: AuthService, EsportService, NotificationsService, elementAnimations, MaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/shared/services/auth.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });
            /* harmony import */ var _services_esport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/esport.service */ "./src/app/shared/services/esport.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EsportService", function () { return _services_esport_service__WEBPACK_IMPORTED_MODULE_2__["EsportService"]; });
            /* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/notifications.service */ "./src/app/shared/services/notifications.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function () { return _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]; });
            /* harmony import */ var _animations_element_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations/element.animations */ "./src/app/shared/animations/element.animations.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementAnimations", function () { return _animations_element_animations__WEBPACK_IMPORTED_MODULE_4__["elementAnimations"]; });
            /* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function () { return _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]; });
            /***/ 
        }),
        /***/ "./src/app/shared/material.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/shared/material.module.ts ***!
          \*******************************************/
        /*! exports provided: MaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function () { return MaterialModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
            /* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm2015/accordion.js");
            /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
            /* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
            /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
            /* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm2015/observers.js");
            /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
            var MaterialModule = /** @class */ (function () {
                function MaterialModule() {
                }
                return MaterialModule;
            }());
            MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    exports: [
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
                        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"],
                        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_4__["CdkAccordionModule"],
                        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"],
                        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"],
                        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"]
                    ]
                })
            ], MaterialModule);
            /***/ 
        }),
        /***/ "./src/app/shared/services/auth.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/shared/services/auth.service.ts ***!
          \*************************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
            var AuthService = /** @class */ (function () {
                function AuthService(HTTP) {
                    this.HTTP = HTTP;
                    this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/users';
                }
                // LOAD token for auth
                AuthService.prototype.loadToken = function () {
                    this.authToken = localStorage.getItem('token');
                };
                // STORE user information in LS
                AuthService.prototype.storeUserData = function (token, user) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user));
                    this.authToken = token;
                    this.user = user;
                };
                // REGISTER newUser
                AuthService.prototype.registerUser = function (name, username, email, password, userAvatar) {
                    var formData = new FormData();
                    formData.append("name", name);
                    formData.append("username", username);
                    formData.append("email", email);
                    formData.append("password", password);
                    formData.append("avatar", userAvatar);
                    return this.HTTP.post(this.baseURL + "/register", formData, {
                        reportProgress: true,
                        observe: "events"
                    });
                };
                // LOGIN user
                AuthService.prototype.authenticateUser = function (user) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                    headers.append('Content-Type', 'application/json');
                    return this.HTTP.post(this.baseURL + '/login', user, { headers: headers })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
                        console.log(user.username + ' logged in.');
                    }));
                };
                // LOGGEDIN status
                AuthService.prototype.loggedIn = function () {
                    return localStorage.getItem('token') !== null;
                };
                // LOGOUT user
                AuthService.prototype.logoutUser = function () {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                };
                // ERROR handling
                AuthService.prototype.errorMgmt = function (error) {
                    var errorMessage = "";
                    if (error.error instanceof ErrorEvent) {
                        errorMessage = error.error.message; // Get client-side error
                    }
                    else {
                        errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message; // Get server-side error
                    }
                    console.log(errorMessage);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/shared/services/esport.service.ts": 
        /*!***************************************************!*\
          !*** ./src/app/shared/services/esport.service.ts ***!
          \***************************************************/
        /*! exports provided: EsportService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsportService", function () { return EsportService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
            var EsportService = /** @class */ (function () {
                function EsportService(HTTP, authService) {
                    this.HTTP = HTTP;
                    this.authService = authService;
                    this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/teams';
                }
                // CREATE auth header
                EsportService.prototype.createAuthenticationHeaders = function () {
                    this.authService.loadToken();
                    this.authToken = this.authService.authToken;
                    // Headers option config
                    this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'authorization': this.authToken
                    });
                };
                // GET ALL TEAMS
                EsportService.prototype.getTeams = function () {
                    return this.HTTP.get(this.baseURL);
                };
                // POST Team
                EsportService.prototype.addTeam = function (name, contact, address, logoTeam) {
                    var formData = new FormData();
                    formData.append("name", name);
                    formData.append("contact", contact);
                    formData.append("address", address);
                    formData.append("logo", logoTeam);
                    return this.HTTP.post(this.baseURL + "/register", formData, {
                        reportProgress: true,
                        observe: "events"
                    });
                };
                // PUT to verify team
                EsportService.prototype.verifyTeam = function (isVerified) {
                    this.createAuthenticationHeaders();
                    return this.HTTP.put(this.baseURL + '/verifyTeam', isVerified, { headers: this.options });
                };
                // PUT score
                EsportService.prototype.addScore = function (score) {
                    this.createAuthenticationHeaders();
                    // console.log(this.authToken);
                    return this.HTTP.put(this.baseURL + '/add_score', score, { headers: this.options });
                };
                return EsportService;
            }());
            EsportService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            EsportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], EsportService);
            /***/ 
        }),
        /***/ "./src/app/shared/services/notifications.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/shared/services/notifications.service.ts ***!
          \**********************************************************/
        /*! exports provided: NotificationsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function () { return NotificationsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var NotificationsService = /** @class */ (function () {
                function NotificationsService(snackBar, zone) {
                    this.snackBar = snackBar;
                    this.zone = zone;
                }
                NotificationsService.prototype.default = function (message) {
                    this.show(message, {
                        duration: 2000,
                        panelClass: 'default-notification-overlay'
                    });
                };
                NotificationsService.prototype.info = function (message) {
                    this.show(message, {
                        duration: 2000,
                        panelClass: 'info-notification-overlay'
                    });
                };
                NotificationsService.prototype.success = function (message) {
                    this.show(message, {
                        duration: 2000,
                        panelClass: 'success-notification-overlay'
                    });
                };
                NotificationsService.prototype.warn = function (message) {
                    this.show(message, {
                        duration: 2500,
                        panelClass: 'warning-notification-overlay'
                    });
                };
                NotificationsService.prototype.error = function (message) {
                    this.show(message, {
                        duration: 3000,
                        panelClass: 'error-notification-overlay'
                    });
                };
                NotificationsService.prototype.show = function (message, configuration) {
                    var _this = this;
                    // Need to open snackBar from Angular zone to prevent issues with its position per
                    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
                    this.zone.run(function () { return _this.snackBar.open(message, null, configuration); });
                };
                return NotificationsService;
            }());
            NotificationsService.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ]; };
            NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], NotificationsService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                name: 'heroku',
                apiUrl: 'http://localhost:8080'
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/jerapaaah/Codes/_SAMPLES/teammodifier/client/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map