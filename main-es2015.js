(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/add-team/add-team.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/esport/add-team/add-team.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"form-card\">\n  <h3>PENDAFTARAN</h3>\n  <mat-card-subtitle>DAFTARKAN TIM ANDA KE TURNAMEN</mat-card-subtitle>\n  <br />\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n\n    <!-- Image Preview -->\n    <div class=\"form-group\">\n      <div class=\"preview\" [@rowsAnimation]=\"\" *ngIf=\"preview && preview !== null\">\n        <img [src]=\"preview\" [alt]=\"form.value.name\" style=\"width: 150px\" />\n      </div>\n    </div>\n\n    <!-- File Input -->\n    <div class=\"form-group\">\n      <input type=\"file\" (change)=\"onFileSelected($event)\"/>\n    </div>\n\n    <div class=\"form-container\">\n      <mat-form-field [@rowsAnimation]=\"\">\n        <input\n          matInput\n          placeholder=\"Nama tim\"\n          formControlName=\"name\"\n          id=\"name\"\n        />\n        <mat-error *ngIf=\"form?.controls?.name?.hasError('required')\"\n          >Masukkan nama tim</mat-error\n        >\n        <mat-error *ngIf=\"form?.controls?.name?.hasError('maxLength')\"\n          >Jangan terlalu panjang, bro</mat-error\n        >\n      </mat-form-field>\n\n      <mat-form-field [@rowsAnimation]=\"\">\n        <input\n          matInput\n          placeholder=\"Nomor yang bisa dihubungi\"\n          formControlName=\"contact\"\n          id=\"contact\"\n        />\n        <mat-error *ngIf=\"form?.controls?.contact?.hasError('required')\"\n          >Masukkan nomor hp</mat-error\n        >\n        <mat-error *ngIf=\"form?.controls?.contact?.hasError('minLength')\"\n          >Jangan ko terlalu kasian</mat-error\n        >\n        <mat-error *ngIf=\"form?.controls?.contact?.hasError('maxLength')\"\n          >Panjang skali kasian</mat-error\n        >\n      </mat-form-field>\n\n      <mat-form-field [@rowsAnimation]=\"\">\n        <input\n          matInput\n          placeholder=\"Alamat tim\"\n          formControlName=\"address\"\n          id=\"address\"\n        />\n        <mat-error *ngIf=\"form?.controls?.address?.hasError('required')\"\n          >Masukkan alamat tim.</mat-error\n        >\n        <mat-error *ngIf=\"form?.controls?.address?.hasError('maxLength')\"\n          >Uvuvwevwevwe***, terlalu panjang.</mat-error\n        >\n      </mat-form-field>\n    </div>\n\n    <!-- Submit -->\n    <button\n      type=\"submit\"\n      [disabled]=\"form.invalid || form.disabled\"\n      mat-raised-button\n      class=\"mat-elevation-z6\"\n      color=\"accent\"\n    >\n      Daftar tim\n    </button>\n  </form>\n</mat-card>\n\n<br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/edit-teams/edit-teams.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/esport/edit-teams/edit-teams.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Search field -->\n<mat-form-field appearance=\"outline\">\n    <mat-label>Pencarian</mat-label>\n    <input\n      matInput\n      (keyup)=\"applyFilter($event.target.value)\"\n      placeholder=\"Cari...\"\n    />\n    <mat-icon matSuffix>search</mat-icon>\n  </mat-form-field>\n  \n  <!-- TABLE OF TEAMS -->\n  <table mat-table [dataSource]=\"DATA_SOURCE\" matSort class=\"mat-elevation-z1\">\n  \n    <!-- isVerified field -->\n    <ng-container matColumnDef=\"isVerified\">\n      <th mat-header-cell *matHeaderCellDef>Status</th>\n      <td mat-cell *matCellDef=\"let team\">\n        <mat-icon *ngIf=\"team.isVerified === true\" style=\"color: green;\">verified_user</mat-icon>\n        <mat-icon *ngIf=\"team.isVerified === false\" style=\"color: red;\">clear</mat-icon>\n      </td>\n    </ng-container>\n  \n    <!-- Team's name field -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef>Team's name</th>\n      <td mat-cell *matCellDef=\"let team\">{{ team.name }}</td>\n    </ng-container>\n  \n    <!-- Address field -->\n    <ng-container matColumnDef=\"address\">\n      <th mat-header-cell *matHeaderCellDef>Address</th>\n      <td mat-cell *matCellDef=\"let team\">{{ team.address }}</td>\n    </ng-container>\n\n    <!-- Score field -->\n    <ng-container matColumnDef=\"score\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef>Score</th>\n      <td mat-cell *matCellDef=\"let team\">{{ team.score }}</td>\n    </ng-container>\n  \n    <!-- Logo field -->\n    <ng-container matColumnDef=\"logo\">\n      <th mat-header-cell *matHeaderCellDef class=\"table-image\">Logo</th>\n      <td mat-cell *matCellDef=\"let team\">\n        <img [src]='team.logo' [alt]='team.name' style=\"max-width: 30px;\" />\n      </td>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef class=\"action-link\"><mat-icon>edit</mat-icon></th>\n      <td mat-cell *matCellDef=\"let team; let i = index;\" class=\"action-link\">\n        <!-- <a mat-icon-button (click)=\"editScore(team)\"><mat-icon>edit</mat-icon></a> -->\n        <mat-slide-toggle\n          [checked]=\"team.isVerified === true\"\n          (change)=\"onToggle(i, $event)\"\n        ></mat-slide-toggle>\n      </td>\n    </ng-container>\n  \n    <!-- displayedColumns -->\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row [@rowsAnimation]=\"\" *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n  \n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 50]\" showFirstLastButtons></mat-paginator>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/fetch-teams/fetch-teams.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/esport/fetch-teams/fetch-teams.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Search field -->\n<mat-form-field appearance=\"outline\">\n  <mat-label>Pencarian</mat-label>\n  <input\n    matInput\n    (keyup)=\"applyFilter($event.target.value)\"\n    placeholder=\"Cari...\"\n  />\n  <mat-icon matSuffix>search</mat-icon>\n</mat-form-field>\n\n<!-- TABLE OF TEAMS -->\n<table mat-table [dataSource]=\"DATA_SOURCE\" matSort class=\"mat-elevation-z1\">\n\n  <!-- isVerified field -->\n  <ng-container matColumnDef=\"isVerified\">\n    <th mat-header-cell *matHeaderCellDef>Status</th>\n    <td mat-cell *matCellDef=\"let team\">\n      <mat-icon *ngIf=\"team.isVerified === true\" style=\"color: green;\">verified_user</mat-icon>\n      <mat-icon *ngIf=\"team.isVerified === false\" style=\"color: red;\">clear</mat-icon>\n    </td>\n  </ng-container>\n\n  <!-- Team's name field -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell mat-sort-header *matHeaderCellDef>Team's name</th>\n    <td mat-cell *matCellDef=\"let team\">{{ team.name }}</td>\n  </ng-container>\n\n  <!-- Address field -->\n  <ng-container matColumnDef=\"address\">\n    <th mat-header-cell *matHeaderCellDef>Address</th>\n    <td mat-cell *matCellDef=\"let team\">{{ team.address }}</td>\n  </ng-container>\n\n  <!-- Logo field -->\n  <ng-container matColumnDef=\"logo\">\n    <th mat-header-cell *matHeaderCellDef class=\"table-image\">Logo</th>\n    <td mat-cell *matCellDef=\"let team\">\n      <img [src]='team.logo' [alt]='team.name' style=\"max-width: 30px;\" />\n    </td>\n  </ng-container>\n\n  <!-- displayedColumns -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row [@rowsAnimation]=\"\" *matRowDef=\"let row; columns: displayedColumns\"></tr>\n</table>\n\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/profile/profile.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/esport/profile/profile.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-6\">\n    <mat-card>\n      <mat-card-header>\n        <img mat-card-avatar src=\"../../../assets/images/teams/dota2.png\" alt=\"logo team\">\n        <mat-card-title>TEAM NAME</mat-card-title>\n        <!-- <mat-card-title class=\"lead\">Jalan Kontunaga, Sultra</mat-card-title> -->\n      </mat-card-header>\n      <img mat-card-image src=\"../../../assets/images/posts/Smile-Quote.png\" alt=\"card image\">\n      <mat-card-content style=\"text-align: justify;\">\n        <h6>Team address: Jalan Kontunaga, Sultra</h6>\n        <h6>Contact person: 0833 3333 3333</h6>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"text-center\" style=\"margin-top: 50px;\">\n      <!-- <mat-icon style=\"color: green;\">verified_user</mat-icon> -->\n      <mat-icon style=\"color: red;\">clear</mat-icon>\n    </div>\n    <br><br>\n    <!-- <h3 class=\"text-center\">This team has been verified.</h3> -->\n    <h3 class=\"text-center\">This team is not yet verified.</h3>\n\n    <div class=\"upload\">\n      <input type=\"file\" />\n      <button mat-raised-button color=\"accent\">Upload file</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Top toolbar -->\n<mat-toolbar class=\"toolbar mat-elevation-z3\">\n  <button\n    type=\"button\"\n    mat-icon-button\n    *ngIf=\"isHandset$ | async\"\n    (click)=\"sidenav.toggle()\"\n  >\n    <mat-icon>menu</mat-icon>\n  </button>\n\n  <img\n    *ngIf=\"!(isHandset$ | async)\"\n    width=\"25px\"\n    src=\"assets/images/logo.png\"\n  />\n  <a routerLink=\"/\"><span class=\"radvil\">&nbsp;TMF ESPORT</span></a>\n\n  <span class=\"spacer\"></span>\n  <div *ngIf=\"!(isHandset$ | async)\">\n    <a\n      mat-button\n      routerLink=\"auth/sign-in\"\n      routerLinkActive=\"active\"\n      *ngIf=\"!authService.loggedIn()\"\n    >\n      <span>LOGIN</span>\n    </a>\n    <a\n      mat-button\n      routerLink=\"esport/registration\"\n      routerLinkActive=\"active\"\n      *ngIf=\"!authService.loggedIn()\"\n    >\n      <span>DAFTAR TIM</span>\n    </a>\n    <a\n      mat-button\n      routerLink=\"esport/edit-teams\"\n      routerLinkActive=\"active\"\n      *ngIf=\"authService.loggedIn()\"\n    >\n      <span>EDIT TIM</span>\n    </a>\n    <a\n      mat-button\n      routerLink=\"esport/all-teams\"\n      routerLinkActive=\"active\"\n    >\n      <span>SEMUA TIM</span>\n    </a>\n    <a\n      mat-button\n      routerLink=\"esport/profile\"\n      routerLinkActive=\"active\"\n      *ngIf=\"authService.loggedIn()\"\n    >\n      <span>PROFILE</span>\n    </a>\n    <a *ngIf=\"authService.loggedIn()\" mat-button (click)=\"onLogoutClick()\">\n      <span>LOGOUT</span>\n    </a>\n  </div>\n</mat-toolbar>\n\n<!-- Sidenav container -->\n<mat-sidenav-container>\n  <mat-sidenav\n    #sidenav\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n  >\n    <!-- Menu list -->\n    <div class=\"menu-group\">\n      <span class=\"nav-subt\">MAIN MENU</span>\n      <mat-nav-list (click)=\"sidenav.toggle()\">\n        <a\n          mat-list-item\n          routerLink=\"auth/sign-in\"\n          routerLinkActive=\"active\"\n          *ngIf=\"!authService.loggedIn()\"\n        >\n          <mat-icon>home</mat-icon>\n          <span class=\"menu-list\">LOGIN</span>\n        </a>\n        <a\n          mat-list-item\n          routerLink=\"esport/registration\"\n          routerLinkActive=\"active\"\n          *ngIf=\"!authService.loggedIn()\"\n        >\n          <mat-icon>home</mat-icon>\n          <span class=\"menu-list\">DAFTAR TIM</span>\n        </a>\n        <a\n          mat-list-item\n          routerLink=\"esport/all-teams\"\n          routerLinkActive=\"active\"\n        >\n          <mat-icon>home</mat-icon>\n          <span class=\"menu-list\">SEMUA TIM</span>\n        </a>\n        <a\n          mat-list-item\n          *ngIf=\"authService.loggedIn()\"\n          routerLink=\"esport/edit-teams\"\n          routerLinkActive=\"active\"\n        >\n          <mat-icon>edit</mat-icon>\n          <span class=\"menu-list\">EDIT TIM</span>\n        </a>\n        <a\n          mat-list-item\n          *ngIf=\"authService.loggedIn()\"\n          (click)=\"onLogoutClick()\"\n        >\n          <mat-icon>home</mat-icon>\n          <span class=\"menu-list\">LOGOUT</span>\n        </a>\n      </mat-nav-list>\n      <mat-divider></mat-divider>\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content class=\"page-container\">\n    <router-outlet></router-outlet>\n\n    <!-- Footer -->\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 links\">\n          <a href=\"https://esport.teammodifier.com\" target=\"_blank\">\n            <mat-icon fontSet=\"fas\" fontIcon=\"fa-globe-asia\"></mat-icon>\n            <span *ngIf=\"!(isHandset$ | async)\">Website</span>\n          </a>\n          <a href=\"https://www.github.com/radvil\" target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-github\"></mat-icon>\n            <span *ngIf=\"!(isHandset$ | async)\">Github</span>\n          </a>\n          <a href=\"https://www.facebook.com/rtikkolakatimur\" target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-facebook\"></mat-icon>\n            <span *ngIf=\"!(isHandset$ | async)\">Facebook</span>\n          </a>\n          <a href=\"https://www.instagram.com/rtikkolakatimur\" target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-instagram\"></mat-icon>\n            <span *ngIf=\"!(isHandset$ | async)\">Instagram</span>\n          </a>\n          <a href=\"https://www.youtube.com/channel/UCXC56sWhi2sM22gFqpojaYg\" target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-youtube\"></mat-icon>\n            <span *ngIf=\"!(isHandset$ | async)\">Youtube</span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 signature\">\n          &#169; <span class=\"year\">{{ year }}</span> - Team Modifier\n          <br class=\"d-block d-sm-none\" />\n          <a matTooltip=\"Radvil\" matTooltipPosition=\"before\" href=\"#\">\n            <!-- <mat-icon fontSet=\"fas\" fontIcon=\"fa-rocket\"></mat-icon>\n            1.0.0 <span>Dev mode</span> -->\n          </a>\n        </div>\n      </div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/fesm2015/service-work-is-loading.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AppComponent = class AppComponent {
    constructor(isLoadingService, router) {
        this.isLoadingService = isLoadingService;
        this.router = router;
    }
    ngOnInit() {
        // Note, because `IsLoadingService#isLoading$()` returns
        // a new observable each time it is called, it shouldn't
        // be called directly inside a component template.
        this.isLoading = this.isLoadingService.isLoading$();
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"] ||
            event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] ||
            event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] ||
            event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]))
            .subscribe(event => {
            // If it's the start of navigation, `add()` a loading indicator
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.isLoadingService.add();
                return;
            }
            // Else navigation has ended, so `remove()` a loading indicator
            this.isLoadingService.remove();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_3__["IsLoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `
    <mat-progress-bar
      *ngIf="isLoading | async"
      mode="indeterminate"
      color="warn"
      style="position: absolute; top: 0; z-index: 999;"
    >
    </mat-progress-bar>

    <app-layout>
    </app-layout>
  `,
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _esport_fetch_teams_fetch_teams_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./esport/fetch-teams/fetch-teams.component */ "./src/app/esport/fetch-teams/fetch-teams.component.ts");
/* harmony import */ var _esport_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./esport/add-team/add-team.component */ "./src/app/esport/add-team/add-team.component.ts");
/* harmony import */ var _esport_edit_teams_edit_teams_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./esport/edit-teams/edit-teams.component */ "./src/app/esport/edit-teams/edit-teams.component.ts");
/* harmony import */ var _esport_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./esport/profile/profile.component */ "./src/app/esport/profile/profile.component.ts");

















const ESPORT_COMPONENTS = [
    _esport_fetch_teams_fetch_teams_component__WEBPACK_IMPORTED_MODULE_12__["FetchTeamsComponent"],
    _esport_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_13__["AddTeamComponent"],
    _esport_edit_teams_edit_teams_component__WEBPACK_IMPORTED_MODULE_14__["EditTeamsComponent"]
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            ...ESPORT_COMPONENTS,
            _esport_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtModule"].forRoot({
                config: {
                    tokenGetter: function tokenGetter() {
                        return localStorage.getItem('access_token');
                    },
                    whitelistedDomains: ['https://localhost:3000', 'https://tmf-esport.herokuapp.com'],
                }
            })
        ],
        providers: [_shared__WEBPACK_IMPORTED_MODULE_7__["EsportService"], _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _esport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./esport */ "./src/app/esport/index.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");





const appRoutes = [
    {
        path: '',
        redirectTo: 'esport',
        pathMatch: 'full'
    },
    {
        path: 'esport',
        children: [
            {
                path: '',
                redirectTo: 'registration',
                pathMatch: 'full'
            },
            {
                path: 'all-teams',
                component: _esport__WEBPACK_IMPORTED_MODULE_3__["FetchTeamsComponent"],
            },
            {
                path: 'registration',
                component: _esport__WEBPACK_IMPORTED_MODULE_3__["AddTeamComponent"]
            },
            {
                path: 'profile',
                component: _esport__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'edit-teams',
                component: _esport__WEBPACK_IMPORTED_MODULE_3__["EditTeamsComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: '**',
                redirectTo: 'registration'
            }
        ]
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then(m => m.AuthModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/esport/add-team/add-team.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/esport/add-team/add-team.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-card {\n  text-align: center;\n}\n\n.logo-reg {\n  width: 40px;\n  height: 40px;\n}\n\n.mat-form-field {\n  width: 95%;\n}\n\n.mat-raised-button {\n  width: 200px;\n  height: 60px;\n}\n\n.mat-raised-button:hover {\n  background-color: #35aace;\n}\n\n.mat-raised-button[disabled] {\n  background-color: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmFwYWFhaC9Db2Rlcy9fU0FNUExFUy90ZWFtbW9kaWZpZXIvY2xpZW50L3NyYy9hcHAvZXNwb3J0L2FkZC10ZWFtL2FkZC10ZWFtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lc3BvcnQvYWRkLXRlYW0vYWRkLXRlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDSUY7O0FESEU7RUFDRSx5QkFBQTtBQ0tKOztBREZBO0VBQ0Usc0JBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2VzcG9ydC9hZGQtdGVhbS9hZGQtdGVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9nby1yZWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDk1JTtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDE3MCwgMjA2KTtcbiAgfVxufVxuLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG4iLCIuZm9ybS1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nby1yZWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogOTUlO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNWFhY2U7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/esport/add-team/add-team.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/esport/add-team/add-team.component.ts ***!
  \*******************************************************/
/*! exports provided: AddTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeamComponent", function() { return AddTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/fesm2015/service-work-is-loading.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");







let AddTeamComponent = class AddTeamComponent {
    constructor(router, esportService, isLoadingService, notification) {
        this.router = router;
        this.esportService = esportService;
        this.isLoadingService = isLoadingService;
        this.notification = notification;
        this.percentDone = 0;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    ngOnInit() {
    }
    onFileSelected(event) {
        const file = event.target.files[0];
        this.form.patchValue({
            logo: file
        });
        this.form.get('logo').updateValueAndValidity();
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.preview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    submitForm() {
        this.isLoadingService.add();
        this.form.disable();
        this.esportService.addTeam(this.form.value.name, this.form.value.contact, this.form.value.address, this.form.value.logo)
            .subscribe((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Sent:
                    console.log("Request has been made!");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].ResponseHeader:
                    console.log("Response header has been received!");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress:
                    this.percentDone = Math.round((event.loaded / event.total) * 100);
                    console.log(`Uploaded! ${this.percentDone}%`);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response:
                    if (event.body.success === false) {
                        this.notification.error(event.body.message);
                    }
                    else if (event.body.success === true) {
                        this.percentDone = false;
                        this.notification.success(event.body.message);
                        this.router.navigate(["esport/profile"]);
                        this.isLoadingService.remove();
                    }
            }
        });
    }
};
AddTeamComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_6__["EsportService"] },
    { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_5__["IsLoadingService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"] }
];
AddTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teams-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/add-team/add-team.component.html")).default,
        animations: [_shared__WEBPACK_IMPORTED_MODULE_6__["elementAnimations"]]
        // changeDetection: ChangeDetectionStrategy.OnPush
        ,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-team.component.scss */ "./src/app/esport/add-team/add-team.component.scss")).default]
    })
], AddTeamComponent);



/***/ }),

/***/ "./src/app/esport/edit-teams/edit-teams.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/esport/edit-teams/edit-teams.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\ntd.mat-cell:last-of-type,\ntd.mat-footer-cell:last-of-type,\nth.mat-header-cell:last-of-type {\n  padding-right: 10px;\n}\n\ntd.mat-cell:first-of-type,\ntd.mat-footer-cell:first-of-type,\nth.mat-header-cell:first-of-type {\n  padding-left: 10px;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.action-link {\n  padding-right: 10px;\n  padding-left: 10px;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmFwYWFhaC9Db2Rlcy9fU0FNUExFUy90ZWFtbW9kaWZpZXIvY2xpZW50L3NyYy9hcHAvZXNwb3J0L2VkaXQtdGVhbXMvZWRpdC10ZWFtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXNwb3J0L2VkaXQtdGVhbXMvZWRpdC10ZWFtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURHQTs7O0VBR0UsbUJBQUE7QUNBRjs7QURHQTs7O0VBR0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZXNwb3J0L2VkaXQtdGVhbXMvZWRpdC10ZWFtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG50ZC5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsXG50ZC5tYXQtZm9vdGVyLWNlbGw6bGFzdC1vZi10eXBlLFxudGgubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsXG50ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWN0aW9uLWxpbmsge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246ZW5kO1xufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSxcbnRkLm1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsXG50aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxudGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLFxudGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3Rpb24tbGluayB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/esport/edit-teams/edit-teams.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/esport/edit-teams/edit-teams.component.ts ***!
  \***********************************************************/
/*! exports provided: EditTeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamsComponent", function() { return EditTeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/fesm2015/service-work-is-loading.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");







let EditTeamsComponent = class EditTeamsComponent {
    constructor(esportService, authService, isLoadingService) {
        this.esportService = esportService;
        this.authService = authService;
        this.isLoadingService = isLoadingService;
        this.isVerified = true;
        this.allTeams = [];
        this.DATA_SOURCE = [];
        this.displayedColumns = ['isVerified', 'name', 'address', 'score', 'logo', 'action'];
    }
    ngOnInit() {
        // GET all teams onInit
        this.authService.loadToken();
        this.esportService.getTeams().subscribe(res => {
            this.allTeams = res['teams'];
            this.DATA_SOURCE = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allTeams);
            this.DATA_SOURCE.paginator = this.paginator;
            this.DATA_SOURCE.sort = this.sort;
        });
        // apply loader OnInit service
        this.isLoadingService.add(this.esportService.getTeams());
    }
    // Filtering on (keyup)
    applyFilter(filterValue) {
        this.DATA_SOURCE.filter = filterValue.trim().toLowerCase();
    }
    onToggle(i, event) {
        // console.log(this.DATA_SOURCE.filteredData[i].isVerified);
        this.team = {
            _id: this.DATA_SOURCE.filteredData[i]._id,
            name: this.DATA_SOURCE.filteredData[i].name,
            isVerified: this.DATA_SOURCE.filteredData[i].isVerified
        };
        // console.log(team);
        this.esportService.verifyTeam(this.team).subscribe((data) => {
            this.team.isVerified = (this.DATA_SOURCE.filteredData[i].isVerified = !this.DATA_SOURCE.filteredData[i].isVerified);
        });
        console.log(this.team);
    }
};
EditTeamsComponent.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_6__["EsportService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_5__["IsLoadingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], EditTeamsComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], EditTeamsComponent.prototype, "sort", void 0);
EditTeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-teams',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-teams.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/edit-teams/edit-teams.component.html")).default,
        animations: [_shared__WEBPACK_IMPORTED_MODULE_6__["elementAnimations"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-teams.component.scss */ "./src/app/esport/edit-teams/edit-teams.component.scss")).default]
    })
], EditTeamsComponent);



/***/ }),

/***/ "./src/app/esport/fetch-teams/fetch-teams.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/esport/fetch-teams/fetch-teams.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\ntd.mat-cell:last-of-type,\ntd.mat-footer-cell:last-of-type,\nth.mat-header-cell:last-of-type {\n  padding-right: 10px;\n}\n\ntd.mat-cell:first-of-type,\ntd.mat-footer-cell:first-of-type,\nth.mat-header-cell:first-of-type {\n  padding-left: 10px;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmFwYWFhaC9Db2Rlcy9fU0FNUExFUy90ZWFtbW9kaWZpZXIvY2xpZW50L3NyYy9hcHAvZXNwb3J0L2ZldGNoLXRlYW1zL2ZldGNoLXRlYW1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lc3BvcnQvZmV0Y2gtdGVhbXMvZmV0Y2gtdGVhbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FER0E7OztFQUdFLG1CQUFBO0FDQUY7O0FER0E7OztFQUdFLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZXNwb3J0L2ZldGNoLXRlYW1zL2ZldGNoLXRlYW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgLy8gbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbnRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSxcbnRkLm1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsXG50aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxudGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLFxudGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZC5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsXG50ZC5tYXQtZm9vdGVyLWNlbGw6bGFzdC1vZi10eXBlLFxudGgubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsXG50ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/esport/fetch-teams/fetch-teams.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/esport/fetch-teams/fetch-teams.component.ts ***!
  \*************************************************************/
/*! exports provided: FetchTeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchTeamsComponent", function() { return FetchTeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/fesm2015/service-work-is-loading.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");







let FetchTeamsComponent = class FetchTeamsComponent {
    constructor(esportService, authService, isLoadingService) {
        this.esportService = esportService;
        this.authService = authService;
        this.isLoadingService = isLoadingService;
        this.DATA_SOURCE = [];
        this.displayedColumns = ['isVerified', 'name', 'address', 'logo'];
    }
    ngOnInit() {
        // GET all teams onInit
        this.authService.loadToken();
        this.esportService.getTeams().subscribe(res => {
            let teamsList = res['teams'];
            this.DATA_SOURCE = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](teamsList);
            this.DATA_SOURCE.paginator = this.paginator;
            this.DATA_SOURCE.sort = this.sort;
        });
        // apply loader OnInit service
        this.isLoadingService.add(this.esportService.getTeams());
    }
    // Filtering on (keyup)
    applyFilter(filterValue) {
        this.DATA_SOURCE.filter = filterValue.trim().toLowerCase();
    }
};
FetchTeamsComponent.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_6__["EsportService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_5__["IsLoadingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], FetchTeamsComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], FetchTeamsComponent.prototype, "sort", void 0);
FetchTeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fetch-teams',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fetch-teams.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/fetch-teams/fetch-teams.component.html")).default,
        animations: [_shared__WEBPACK_IMPORTED_MODULE_6__["elementAnimations"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fetch-teams.component.scss */ "./src/app/esport/fetch-teams/fetch-teams.component.scss")).default]
    })
], FetchTeamsComponent);



/***/ }),

/***/ "./src/app/esport/index.ts":
/*!*********************************!*\
  !*** ./src/app/esport/index.ts ***!
  \*********************************/
/*! exports provided: AddTeamComponent, FetchTeamsComponent, EditTeamsComponent, ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _add_team_add_team_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-team/add-team.component */ "./src/app/esport/add-team/add-team.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddTeamComponent", function() { return _add_team_add_team_component__WEBPACK_IMPORTED_MODULE_1__["AddTeamComponent"]; });

/* harmony import */ var _fetch_teams_fetch_teams_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch-teams/fetch-teams.component */ "./src/app/esport/fetch-teams/fetch-teams.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchTeamsComponent", function() { return _fetch_teams_fetch_teams_component__WEBPACK_IMPORTED_MODULE_2__["FetchTeamsComponent"]; });

/* harmony import */ var _edit_teams_edit_teams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-teams/edit-teams.component */ "./src/app/esport/edit-teams/edit-teams.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditTeamsComponent", function() { return _edit_teams_edit_teams_component__WEBPACK_IMPORTED_MODULE_3__["EditTeamsComponent"]; });

/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/esport/profile/profile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]; });








/***/ }),

/***/ "./src/app/esport/profile/profile.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/esport/profile/profile.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-icon {\n  font-size: 200px;\n  height: auto;\n  width: auto;\n}\n\nmat-card-header mat-card-title {\n  font-size: 27px;\n}\n\nmat-card-content {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmFwYWFhaC9Db2Rlcy9fU0FNUExFUy90ZWFtbW9kaWZpZXIvY2xpZW50L3NyYy9hcHAvZXNwb3J0L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXNwb3J0L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSDs7QURFRztFQUNHLGVBQUE7QUNDTjs7QURFQTtFQUNHLHlCQUFBO0FDQ0giLCJmaWxlIjoic3JjL2FwcC9lc3BvcnQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb24ge1xuICAgZm9udC1zaXplOiAyMDBweDtcbiAgIGhlaWdodDogYXV0bztcbiAgIHdpZHRoOiBhdXRvO1xufVxubWF0LWNhcmQtaGVhZGVyIHtcbiAgIG1hdC1jYXJkLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgIH1cbn1cbm1hdC1jYXJkLWNvbnRlbnQge1xuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iLCJtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbm1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/esport/profile/profile.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/esport/profile/profile.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/esport/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar {\n  top: 0px;\n  position: fixed;\n  z-index: 998;\n}\n.toolbar .spacer {\n  flex: 1 1 auto;\n}\n.toolbar a {\n  color: #666;\n}\n.toolbar a:hover {\n  color: #333;\n}\n.toolbar .mat-button {\n  color: #666;\n}\n.toolbar .mat-button.active {\n  color: white;\n  background-color: #2a97fd;\n}\n.toolbar mat-icon {\n  font-size: 20px;\n}\n.mat-sidenav::-webkit-scrollbar {\n  width: 5px;\n  background-color: #fff;\n}\n.mat-sidenav::-webkit-scrollbar-thumb {\n  background-color: #eee;\n}\nmat-sidenav-container {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n}\nmat-sidenav-container mat-sidenav.sidenav {\n  padding-top: 57px;\n  position: fixed;\n  width: 245px;\n}\nmat-sidenav-container mat-sidenav.sidenav .menu-group {\n  padding-top: 10px;\n}\nmat-sidenav-container mat-sidenav.sidenav .nav-subt {\n  font-size: 15px;\n  font-weight: bold;\n  margin-left: 25px;\n  color: #bbb;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-icon {\n  margin-left: 9px;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list {\n  padding-top: 0;\n  padding-bottom: 0;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item {\n  font-size: 14px;\n  color: #666;\n  height: 46px;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item.active {\n  font-weight: bold;\n  background-color: #ddd;\n  color: #333;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item.active mat-icon {\n  color: #1295d1;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item:hover {\n  color: #1295d1;\n  background-color: #eee;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item:hover mat-icon {\n  margin-top: -9px;\n  margin-left: 5px;\n  font-size: 33px;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item:hover .menu-list {\n  margin-left: 31px;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item mat-icon {\n  font-size: 22px;\n}\nmat-sidenav-container mat-sidenav.sidenav mat-nav-list a.mat-list-item .menu-list {\n  margin-left: 27px;\n}\nmat-sidenav-container .footer {\n  flex: 0 0 auto;\n  padding: 0 15px;\n  text-align: center;\n}\nmat-sidenav-container .footer .row {\n  padding: 10px 0;\n}\nmat-sidenav-container .footer .row .links a {\n  transition: padding 0.5s;\n  display: inline-block;\n  padding: 20px 5px;\n  color: #5c5c5c;\n}\nmat-sidenav-container .footer .row .links a:hover {\n  text-decoration: none;\n}\nmat-sidenav-container .footer .row .links a mat-icon {\n  font-size: 30px;\n  width: 35px;\n}\nmat-sidenav-container .footer .row .links a span {\n  display: inline-block;\n  width: 75px;\n  padding: 0 0 0 3px;\n  overflow: hidden;\n  text-align: left;\n  white-space: nowrap;\n  transition: width 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmFwYWFhaC9Db2Rlcy9fU0FNUExFUy90ZWFtbW9kaWZpZXIvY2xpZW50L3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FGO0FEQ0U7RUFDRSxjQUFBO0FDQ0o7QURDRTtFQUNFLFdBQUE7QUNDSjtBREFJO0VBQ0UsV0FBQTtBQ0VOO0FEQ0U7RUFDRSxXQUFBO0FDQ0o7QURBSTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0VOO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURJQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtBQ0RGO0FER0E7RUFDRSxzQkFBQTtBQ0FGO0FER0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNBRjtBREVFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FKO0FEQ0k7RUFDRSxpQkFBQTtBQ0NOO0FEQ0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDTjtBRENJO0VBQ0UsZ0JBQUE7QUNDTjtBREdJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDRE47QURFTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FSO0FEQ1E7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0NWO0FEQVU7RUFDRSxjQUFBO0FDRVo7QURDUTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQ0NWO0FEQVU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VaO0FEQVU7RUFDRSxpQkFBQTtBQ0VaO0FEQ1E7RUFDRSxlQUFBO0FDQ1Y7QURDUTtFQUNFLGlCQUFBO0FDQ1Y7QURNRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNKSjtBREtJO0VBQ0UsZUFBQTtBQ0hOO0FES1E7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSFY7QURJVTtFQUNFLHFCQUFBO0FDRlo7QURJVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDRlo7QURJVTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNGWiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUb3AgdG9vbGJhclxyXG4udG9vbGJhciB7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5ODtcclxuICAuc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICBhIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG4gIH1cclxuICAubWF0LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5N2ZkO1xyXG4gICAgfVxyXG4gIH1cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTaWRlbmF2IHNjcm9sbGJhclxyXG4ubWF0LXNpZGVuYXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLm1hdC1zaWRlbmF2Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxufVxyXG5cclxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgbWF0LXNpZGVuYXYuc2lkZW5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTdweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAyNDVweDtcclxuICAgIC5tZW51LWdyb3VwIHtcclxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubmF2LXN1YnQge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgY29sb3I6ICNiYmI7XHJcbiAgICB9XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTGlzdCBpdGVtc1xyXG4gICAgbWF0LW5hdi1saXN0IHtcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICBhLm1hdC1saXN0LWl0ZW0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTgsIDE0OSwgMjA5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDE4LCAxNDksIDIwOSk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtOXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudS1saXN0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMxcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnUtbGlzdCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjdweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEZvb3RlclxyXG4gIC5mb290ZXIge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAucm93IHtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAubGlua3Mge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjVzO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCA1cHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAzcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IC8vIEVuZCBvZiByb3dcclxuICAgIH1cclxuICB9XHJcbiAgLy8gRW5kIG9mIGZvb3RlclxyXG59XHJcbiIsIi50b29sYmFyIHtcbiAgdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk4O1xufVxuLnRvb2xiYXIgLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLnRvb2xiYXIgYSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnRvb2xiYXIgYTpob3ZlciB7XG4gIGNvbG9yOiAjMzMzO1xufVxuLnRvb2xiYXIgLm1hdC1idXR0b24ge1xuICBjb2xvcjogIzY2Njtcbn1cbi50b29sYmFyIC5tYXQtYnV0dG9uLmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhOTdmZDtcbn1cbi50b29sYmFyIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWF0LXNpZGVuYXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm1hdC1zaWRlbmF2Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYuc2lkZW5hdiB7XG4gIHBhZGRpbmctdG9wOiA1N3B4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyNDVweDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi5zaWRlbmF2IC5tZW51LWdyb3VwIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYuc2lkZW5hdiAubmF2LXN1YnQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgY29sb3I6ICNiYmI7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYuc2lkZW5hdiBtYXQtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYuc2lkZW5hdiBtYXQtbmF2LWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYuc2lkZW5hdiBtYXQtbmF2LWxpc3QgYS5tYXQtbGlzdC1pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2NjtcbiAgaGVpZ2h0OiA0NnB4O1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LnNpZGVuYXYgbWF0LW5hdi1saXN0IGEubWF0LWxpc3QtaXRlbS5hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6ICMzMzM7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYuc2lkZW5hdiBtYXQtbmF2LWxpc3QgYS5tYXQtbGlzdC1pdGVtLmFjdGl2ZSBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjMTI5NWQxO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LnNpZGVuYXYgbWF0LW5hdi1saXN0IGEubWF0LWxpc3QtaXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjMTI5NWQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LnNpZGVuYXYgbWF0LW5hdi1saXN0IGEubWF0LWxpc3QtaXRlbTpob3ZlciBtYXQtaWNvbiB7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMzNweDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi5zaWRlbmF2IG1hdC1uYXYtbGlzdCBhLm1hdC1saXN0LWl0ZW06aG92ZXIgLm1lbnUtbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAzMXB4O1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LnNpZGVuYXYgbWF0LW5hdi1saXN0IGEubWF0LWxpc3QtaXRlbSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi5zaWRlbmF2IG1hdC1uYXYtbGlzdCBhLm1hdC1saXN0LWl0ZW0gLm1lbnUtbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAyN3B4O1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIC5mb290ZXIge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgcGFkZGluZzogMCAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLmZvb3RlciAucm93IHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIC5mb290ZXIgLnJvdyAubGlua3MgYSB7XG4gIHRyYW5zaXRpb246IHBhZGRpbmcgMC41cztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAyMHB4IDVweDtcbiAgY29sb3I6ICM1YzVjNWM7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLmZvb3RlciAucm93IC5saW5rcyBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIC5mb290ZXIgLnJvdyAubGlua3MgYSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDM1cHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgLmZvb3RlciAucm93IC5saW5rcyBhIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA3NXB4O1xuICBwYWRkaW5nOiAwIDAgMCAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/fesm2015/service-work-is-loading.js");







let LayoutComponent = class LayoutComponent {
    constructor(breakpointObserver, authService, router, isLoadingService, notification) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.router = router;
        this.isLoadingService = isLoadingService;
        this.notification = notification;
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => result.matches));
        this.year = new Date().getFullYear();
        this.isAuthenticated$ = this.authService.loggedIn();
    }
    onLogoutClick() {
        this.isLoadingService.add();
        setTimeout(() => {
            this.authService.logoutUser();
            this.router.navigate(['/auth/sign-in']);
            this.notification.success('You are now logged out');
            this.isLoadingService.remove();
            return false;
        }, 1000);
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_6__["IsLoadingService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] }
];
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-layout",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")).default]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");







const LAYOUTS_COMPONENTS = [
    _layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
];
let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]],
        declarations: [...LAYOUTS_COMPONENTS],
        exports: [...LAYOUTS_COMPONENTS],
        providers: [_shared__WEBPACK_IMPORTED_MODULE_5__["AuthService"]]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/shared/animations/element.animations.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/animations/element.animations.ts ***!
  \*********************************************************/
/*! exports provided: elementAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementAnimations", function() { return elementAnimations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const elementAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("rowsAnimation", [
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


/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/fesm2015/service-work-is-loading.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ */ "./src/app/shared/index.ts");





let AuthGuard = class AuthGuard {
    constructor(router, authService, isLoadingService, notification) {
        this.router = router;
        this.authService = authService;
        this.isLoadingService = isLoadingService;
        this.notification = notification;
    }
    canActivate(route, state) {
        this.isLoadingService.add();
        if (this.authService.loggedIn()) {
            setTimeout(() => {
                this.isLoadingService.remove();
            }, 1000);
            return true;
        }
        else {
            setTimeout(() => {
                this.isLoadingService.remove();
                this.notification.error('SILAHKAN LOGIN DULU.');
                this.router.navigate(["/auth/sign-in"]);
            }, 1000);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ___WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_3__["IsLoadingService"] },
    { type: ___WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: MaterialModule, AuthService, EsportService, NotificationsService, elementAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony import */ var _services_esport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/esport.service */ "./src/app/shared/services/esport.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EsportService", function() { return _services_esport_service__WEBPACK_IMPORTED_MODULE_2__["EsportService"]; });

/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/notifications.service */ "./src/app/shared/services/notifications.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]; });

/* harmony import */ var _animations_element_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations/element.animations */ "./src/app/shared/animations/element.animations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementAnimations", function() { return _animations_element_animations__WEBPACK_IMPORTED_MODULE_4__["elementAnimations"]; });

/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]; });









/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
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












let MaterialModule = class MaterialModule {
};
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



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthService = class AuthService {
    constructor(HTTP) {
        this.HTTP = HTTP;
        this.baseURL = 'https://tmf-esport.herokuapp.com/users';
    }
    loadToken() {
        this.authToken = localStorage.getItem('token');
    }
    storeUserData(token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
    // REGISTER newUser
    registerUser(name, username, email, password, userAvatar) {
        let formData = new FormData();
        formData.append("name", name);
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("avatar", userAvatar);
        return this.HTTP.post(`${this.baseURL}/register`, formData, {
            reportProgress: true,
            observe: "events"
        });
    }
    loginUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.HTTP.post(`${this.baseURL}/login`, { headers: headers });
    }
    // LOGIN user
    authenticateUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.HTTP.post(this.baseURL + '/login', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => {
            console.log(user.username + ' logged in.');
        }));
    }
    // LOGGEDIN status
    loggedIn() {
        return localStorage.getItem('token') !== null;
    }
    // LOGOUT
    logoutUser() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
    // ERROR handling
    errorMgmt(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message; // Get client-side error
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`; // Get server-side error
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/shared/services/esport.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/esport.service.ts ***!
  \***************************************************/
/*! exports provided: EsportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsportService", function() { return EsportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");




let EsportService = class EsportService {
    constructor(HTTP, authService) {
        this.HTTP = HTTP;
        this.authService = authService;
        this.baseURL = 'https://tmf-esport.herokuapp.com/teams';
    }
    createAuthenticationHeaders() {
        this.authService.loadToken();
        this.authToken = this.authService.authToken;
        // Headers configuration options
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'authorization': this.authToken
        });
    }
    // GET ALL TEAMS
    getTeams() {
        return this.HTTP.get(this.baseURL);
    }
    // POST Team
    addTeam(name, contact, address, logoTeam) {
        var formData = new FormData();
        formData.append("name", name);
        formData.append("contact", contact);
        formData.append("address", address);
        formData.append("logo", logoTeam);
        return this.HTTP.post(`${this.baseURL}/register`, formData, {
            reportProgress: true,
            observe: "events"
        });
    }
    // PUT to verify team
    verifyTeam(team) {
        this.createAuthenticationHeaders();
        // console.log(this.authToken, team);
        return this.HTTP.put(this.baseURL + '/verifyTeam', team, { headers: this.options });
        // .pipe(tap(res => {console.log(res)}));
    }
};
EsportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
EsportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EsportService);



/***/ }),

/***/ "./src/app/shared/services/notifications.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/notifications.service.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let NotificationsService = class NotificationsService {
    constructor(snackBar, zone) {
        this.snackBar = snackBar;
        this.zone = zone;
    }
    default(message) {
        this.show(message, {
            duration: 2000,
            panelClass: 'default-notification-overlay'
        });
    }
    info(message) {
        this.show(message, {
            duration: 2000,
            panelClass: 'info-notification-overlay'
        });
    }
    success(message) {
        this.show(message, {
            duration: 2000,
            panelClass: 'success-notification-overlay'
        });
    }
    warn(message) {
        this.show(message, {
            duration: 2500,
            panelClass: 'warning-notification-overlay'
        });
    }
    error(message) {
        this.show(message, {
            duration: 3000,
            panelClass: 'error-notification-overlay'
        });
    }
    show(message, configuration) {
        // Need to open snackBar from Angular zone to prevent issues with its position per
        // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
        this.zone.run(() => this.snackBar.open(message, null, configuration));
    }
};
NotificationsService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jerapaaah/Codes/_SAMPLES/teammodifier/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map