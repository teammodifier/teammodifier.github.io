(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map