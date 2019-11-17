(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"login-form-card\">\n  <h3 style=\"text-align: center;\">REGISTRATION</h3>\n  <mat-card-subtitle style=\"text-align: center;\">New administrator submission.</mat-card-subtitle>\n\n  <mat-card-content>\n    <!-- REGISTRATION form -->\n    <form class=\"row\" [formGroup]=\"regForm\" (ngSubmit)=\"submitForm()\">\n\n      <!-- Image Preview -->\n      <div class=\"form-group col-md-6\">\n        <div class=\"align-center\" [@rowsAnimation]=\"\" *ngIf=\"preview && preview !== null\">\n          <img (click)=\"fileInput.click()\" class=\"preview\" matTooltip='Change photo' [src]=\"preview\" [alt]=\"regForm.value.name\" />\n        </div>\n\n        <div class=\"align-center\" *ngIf=\"!preview\">\n          <img matTooltip='Select photo' (click)=\"fileInput.click()\" class=\"preview\" src=\"assets/images/portraits/placeholder.png\" alt=\"placeholder\"/>\n        </div>\n        \n        <!-- File Input -->\n        <div class=\"form-group\" style=\"display: none;\">\n          <input #fileInput type=\"file\" (change)=\"onFileSelected($event)\"/>\n        </div>\n      </div>\n    \n      <div class=\"col-md-6\">\n        <!-- NAME -->\n        <mat-form-field [@rowsAnimation]=\"\">\n          <input\n            matInput type=\"text\"\n            placeholder=\"Name\" formControlName=\"name\" />\n          <!-- Error messages -->\n          <mat-error *ngIf=\"regForm?.controls?.name?.hasError('required')\">Name is required</mat-error>\n          <mat-error *ngIf=\"regForm?.controls?.name?.hasError('maxLength')\">Characters too long</mat-error>\n        </mat-form-field>\n\n        <!-- USERNAME -->\n        <mat-form-field [@rowsAnimation]=\"\">\n          <input\n            matInput type=\"text\"\n            placeholder=\"Username\"\n            formControlName=\"username\"\n          />\n          <mat-error *ngIf=\"regForm?.controls?.username?.hasError('required')\">Please provide a username</mat-error>\n          <mat-error *ngIf=\"regForm?.controls?.username?.hasError('minLength')\">Minimum requirement</mat-error>\n          <mat-error *ngIf=\"regForm?.controls?.username?.hasError('maxLength')\">Maximum X characters required</mat-error>\n        </mat-form-field>\n\n        <!-- EMAIL -->\n        <mat-form-field [@rowsAnimation]=\"\">\n          <input matInput type=\"text\"\n            placeholder=\"Email address\" formControlName=\"email\"\n          />\n          <mat-error *ngIf=\"regForm?.controls?.email?.hasError('required')\">Minimum required.</mat-error>\n          <mat-error *ngIf=\"regForm?.controls?.email?.hasError('maxLength')\">Too much characters.</mat-error>\n        </mat-form-field>\n    \n        <!-- PASSWORD -->\n        <mat-form-field [@rowsAnimation]=\"\">\n          <mat-label>Password</mat-label>\n          <input\n            matInput [type]=\"hideP ? 'password' : 'text'\"\n            placeholder=\"Password\" formControlName=\"password\"\n          />\n          <mat-icon matSuffix (click)=\"hideP = !hideP\">{{ hideP ? 'visibility' : 'visibility_off' }}</mat-icon>\n          <mat-error *ngIf=\"regForm?.controls?.password?.hasError('required')\">Minimum required.</mat-error>\n          <mat-error *ngIf=\"regForm?.controls?.password?.hasError('minLength')\">Minimum X chracteres.</mat-error>\n        </mat-form-field>\n    \n        <!-- Submit -->\n        <button\n          color=\"accent\" class=\"mat-elevation-z6\"\n          type=\"submit\" mat-raised-button\n          [disabled]=\"regForm.invalid || regForm.disabled\"\n        >\n          <mat-icon>send</mat-icon>&nbsp;&nbsp;<span>SUBMIT NEW ADMIN</span>\n        </button>\n\n      </div>\n    </form>\n  </mat-card-content>\n\n</mat-card>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-in/sign-in.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-in/sign-in.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"login-form-card\">\n  <h2 style=\"text-align: center;\">USER LOGIN</h2>\n  <br />\n\n  <mat-card-content>\n    <!-- Login form -->\n    <form [formGroup]=\"signInForm\" (ngSubmit)=\"onLoginSubmit()\">\n      <div class=\"form-container\">\n\n        <!-- Username -->\n        <mat-form-field [@rowsAnimation]=\"\" appearance=\"outline\">\n          <mat-label>Username</mat-label>\n          <input\n            matInput\n            type=\"text\"\n            placeholder=\"Username\"\n            formControlName=\"username\"\n          />\n          <mat-error *ngIf=\"signInForm.controls.username.errors\">Masukkan username</mat-error>\n        </mat-form-field>\n    \n        <!-- Password -->\n        <mat-form-field [@rowsAnimation]=\"\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input\n            matInput\n            [type]=\"hideP ? 'password' : 'text'\"\n            placeholder=\"Password\"\n            formControlName=\"password\"\n          />\n          <mat-icon matSuffix (click)=\"hideP = !hideP\">{{ hideP ? 'visibility' : 'visibility_off' }}</mat-icon>\n          <mat-error *ngIf=\"signInForm.controls.password.errors\">Masukkan password</mat-error>\n        </mat-form-field>\n      </div>\n      <br />\n    \n      <!-- Submit -->\n      <button\n        [disabled]=\"signInForm.invalid || signInForm.disabled\"\n        type=\"submit\"\n        mat-raised-button\n        class=\"mat-elevation-z6\"\n        color=\"accent\"\n      >\n        <mat-icon>fingerprint</mat-icon>&nbsp;&nbsp;\n        <span>LOGIN</span>\n      </button>\n    </form>\n  </mat-card-content>\n\n</mat-card>");
            /***/ 
        }),
        /***/ "./src/app/auth/auth.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/auth/auth.module.ts ***!
          \*************************************/
        /*! exports provided: AuthModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function () { return AuthModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
            /* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
            /* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.routing */ "./src/app/auth/auth.routing.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
            /* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/auth/sign-in/sign-in.component.ts");
            var AuthModule = /** @class */ (function () {
                function AuthModule() {
                }
                return AuthModule;
            }());
            AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _auth_routing__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    ],
                    providers: [_shared__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
                })
            ], AuthModule);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.routing.ts": 
        /*!**************************************!*\
          !*** ./src/app/auth/auth.routing.ts ***!
          \**************************************/
        /*! exports provided: AuthRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () { return AuthRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
            /* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/auth/sign-in/sign-in.component.ts");
            var authRoutes = [
                {
                    path: '',
                    redirectTo: 'sign-in',
                    pathMatch: 'full'
                },
                {
                    path: 'register',
                    component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                    canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
                },
                {
                    path: 'sign-in',
                    component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"]
                }
            ];
            var AuthRoutingModule = /** @class */ (function () {
                function AuthRoutingModule() {
                }
                return AuthRoutingModule;
            }());
            AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(authRoutes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AuthRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/auth/register/register.component.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/auth/register/register.component.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  justify-content: center;\n  margin: 10px 0px;\n}\n\nmat-card-title,\nmat-card-content {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-raised-button {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 60px;\n}\n\n.mat-raised-button:hover {\n  background-color: #35aace;\n}\n\n.mat-raised-button[disabled] {\n  background-color: #ccc;\n}\n\n.align-center {\n  height: 10em;\n  position: relative;\n}\n\n.align-center .ph-image, .align-center .preview {\n  position: absolute;\n  width: 150px;\n  top: 70%;\n  left: 40%;\n  transform: translate(-50%, -50%);\n}\n\n.align-center .ph-image:hover, .align-center .preview:hover {\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  :host {\n    margin: 0;\n  }\n\n  h3 {\n    font-size: 20px;\n  }\n\n  .align-center {\n    height: 6em;\n  }\n  .align-center .preview {\n    position: absolute;\n    width: 100px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  .align-center .preview:hover {\n    cursor: pointer;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmFwYWFhaC9Db2Rlcy9fU0FNUExFUy90ZWFtbW9kaWZpZXIvY2xpZW50L3NyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDREY7O0FER0E7O0VBRUUsYUFBQTtFQUNBLHVCQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VGOztBRERFO0VBQ0UseUJBQUE7QUNHSjs7QURBQTtFQUNFLHNCQUFBO0FDR0Y7O0FEQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURGRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNJSjs7QURISTtFQUNFLGVBQUE7QUNLTjs7QURBQTtFQUNFO0lBQ0UsU0FBQTtFQ0dGOztFRERBO0lBQ0UsZUFBQTtFQ0lGOztFREZBO0lBQ0UsV0FBQTtFQ0tGO0VESkU7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGdDQUFBO0VDTUo7RURMSTtJQUNFLGVBQUE7RUNPTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxubWF0LWNhcmQtdGl0bGUsXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDE3MCwgMjA2KTtcbiAgfVxufVxuLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5hbGlnbi1jZW50ZXIge1xuICBoZWlnaHQ6MTBlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAucGgtaW1hZ2UsIC5wcmV2aWV3IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHRvcDogNzAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIG1kKSkge1xuICA6aG9zdCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLmFsaWduLWNlbnRlcntcbiAgICBoZWlnaHQ6IDZlbTtcbiAgICAucHJldmlldyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbm1hdC1jYXJkLXRpdGxlLFxubWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubWF0LXJhaXNlZC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVhYWNlO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmFsaWduLWNlbnRlciB7XG4gIGhlaWdodDogMTBlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFsaWduLWNlbnRlciAucGgtaW1hZ2UsIC5hbGlnbi1jZW50ZXIgLnByZXZpZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNTBweDtcbiAgdG9wOiA3MCU7XG4gIGxlZnQ6IDQwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uYWxpZ24tY2VudGVyIC5waC1pbWFnZTpob3ZlciwgLmFsaWduLWNlbnRlciAucHJldmlldzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLmFsaWduLWNlbnRlciB7XG4gICAgaGVpZ2h0OiA2ZW07XG4gIH1cbiAgLmFsaWduLWNlbnRlciAucHJldmlldyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgLmFsaWduLWNlbnRlciAucHJldmlldzpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/auth/register/register.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/auth/register/register.component.ts ***!
          \*****************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/fesm2015/service-work-is-loading.js");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(router, authService, isLoadingService, notification) {
                    this.router = router;
                    this.authService = authService;
                    this.isLoadingService = isLoadingService;
                    this.notification = notification;
                    this.percentDone = 0;
                    this.hideP = true;
                    this.regForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]),
                        username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(13)]),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]),
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                        avatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
                    });
                }
                RegisterComponent.prototype.ngOnInit = function () { };
                // Select avatar
                RegisterComponent.prototype.onFileSelected = function (event) {
                    var _this = this;
                    var file = event.target.files[0];
                    this.regForm.patchValue({ avatar: file });
                    this.regForm.get('avatar').updateValueAndValidity();
                    // File Preview
                    var reader = new FileReader();
                    reader.onload = function () {
                        _this.preview = reader.result;
                    };
                    reader.readAsDataURL(file);
                };
                RegisterComponent.prototype.submitForm = function () {
                    var _this = this;
                    this.isLoadingService.add();
                    this.regForm.disable();
                    this.authService.registerUser(this.regForm.value.name, this.regForm.value.username, this.regForm.value.email, this.regForm.value.password, this.regForm.value.avatar)
                        .subscribe(function (event) {
                        switch (event.type) {
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress:
                                _this.percentDone = Math.round((event.loaded / event.total) * 100);
                                console.log("Uploading! " + _this.percentDone + "%");
                                break;
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response:
                                if (event.body.success === false) {
                                    _this.notification.error(event.body.message);
                                    _this.regForm.enable();
                                }
                                else if (event.body.success === true) {
                                    _this.notification.success(event.body.message);
                                    _this.router.navigate(["esport/all-teams"]);
                                    _this.isLoadingService.remove();
                                }
                        }
                    });
                    console.log(this.regForm.value);
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_5__["IsLoadingService"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html")).default,
                    animations: [_shared__WEBPACK_IMPORTED_MODULE_6__["elementAnimations"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/sign-in/sign-in.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/auth/sign-in/sign-in.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  justify-content: center;\n  margin: 70px 0px;\n}\n\nmat-card-title,\nmat-card-content {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-raised-button {\n  width: 100%;\n  height: 60px;\n}\n\n.mat-raised-button:hover {\n  background-color: #35aace;\n}\n\n.mat-raised-button[disabled] {\n  background-color: #ccc;\n  display: flex;\n  justify-content: center;\n}\n\n@media (max-width: 768px) {\n  :host {\n    margin: 30px 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmFwYWFhaC9Db2Rlcy9fU0FNUExFUy90ZWFtbW9kaWZpZXIvY2xpZW50L3NyYy9hcHAvYXV0aC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURHQTs7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRUY7O0FEREU7RUFDRSx5QkFBQTtBQ0dKOztBREFBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsMkJBQUE7RUNHRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA3MHB4IDBweDtcbn1cbm1hdC1jYXJkLXRpdGxlLFxubWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDE3MCwgMjA2KTtcbiAgfVxufVxuLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbWQpKSB7XG4gIDpob3N0IHtcbiAgICBtYXJnaW46IDMwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogNzBweCAwcHg7XG59XG5cbm1hdC1jYXJkLXRpdGxlLFxubWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNWFhY2U7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXJnaW46IDMwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/auth/sign-in/sign-in.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/auth/sign-in/sign-in.component.ts ***!
          \***************************************************/
        /*! exports provided: SignInComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function () { return SignInComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/fesm2015/service-work-is-loading.js");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
            var SignInComponent = /** @class */ (function () {
                function SignInComponent(router, signInFormBuilder, authService, isLoadingService, notification) {
                    this.router = router;
                    this.signInFormBuilder = signInFormBuilder;
                    this.authService = authService;
                    this.isLoadingService = isLoadingService;
                    this.notification = notification;
                    this.hideP = true;
                    this.createForm();
                }
                SignInComponent.prototype.ngOnInit = function () {
                };
                // Function to create login signInForm
                SignInComponent.prototype.createForm = function () {
                    this.signInForm = this.signInFormBuilder.group({
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                };
                SignInComponent.prototype.onLoginSubmit = function () {
                    var _this = this;
                    this.isLoadingService.add();
                    this.signInForm.disable();
                    var user = {
                        username: this.signInForm.get('username').value,
                        password: this.signInForm.get('password').value
                    };
                    this.authService.authenticateUser(user).subscribe(function (data) {
                        if (data.success === true) {
                            // console.log(data.message)
                            _this.authService.storeUserData(data.token, data.user);
                            setTimeout(function () {
                                _this.notification.success(data.message);
                                _this.router.navigate(['esport/profile']);
                                _this.isLoadingService.remove();
                            }, 1000);
                        }
                        else {
                            // console.log(data.message);
                            setTimeout(function () {
                                _this.notification.error(data.message);
                                _this.router.navigate(['auth/sign-in']);
                                _this.isLoadingService.remove();
                                _this.signInForm.enable();
                            }, 1000);
                        }
                    });
                };
                return SignInComponent;
            }());
            SignInComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_4__["IsLoadingService"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] }
            ]; };
            SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sign-in',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-in/sign-in.component.html")).default,
                    animations: [_shared__WEBPACK_IMPORTED_MODULE_5__["elementAnimations"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/auth/sign-in/sign-in.component.scss")).default]
                })
            ], SignInComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=auth-auth-module-es2015.js.map
//# sourceMappingURL=auth-auth-module-es5.js.map
//# sourceMappingURL=auth-auth-module-es5.js.map