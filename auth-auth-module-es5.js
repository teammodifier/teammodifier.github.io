(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"form-card\">\n  <mat-card-header>\n    <mat-card-title>USER SIGN UP</mat-card-title>\n    <mat-card-subtitle\n      >SIGN UP NOW TO GET ACCESS TO DASHBOARD</mat-card-subtitle\n    >\n    <br />\n  </mat-card-header>\n\n  <mat-card-content>\n    <form [formGroup]=\"form\" (submit)=\"submitForm()\">\n      <div class=\"form-container\">\n        <!-- Image Preview -->\n        <div class=\"form-group\">\n          <div class=\"preview\" [@rowsAnimation]=\"\" *ngIf=\"preview && preview !== null\">\n            <img [src]=\"preview\" [alt]=\"form.value.name\" style=\"width: 150px\" />\n          </div>\n        </div>\n    \n        <!-- File Input -->\n        <div class=\"form-group\">\n          <input type=\"file\" (change)=\"onFileSelected($event)\"/>\n        </div>\n\n        <!-- NAME -->\n        <mat-form-field [@rowsAnimation]=\"\">\n          <input matInput placeholder=\"Name\" formControlName=\"name\" id=\"name\" />\n          <mat-error *ngIf=\"form?.controls?.name?.hasError('required')\"\n            >Name is required</mat-error\n          >\n          <mat-error *ngIf=\"form?.controls?.name?.hasError('maxLength')\"\n            >Characters too long</mat-error\n          >\n        </mat-form-field>\n\n        <!-- USERNAME -->\n        <mat-form-field [@rowsAnimation]=\"\">\n          <input\n            matInput\n            placeholder=\"Username\"\n            formControlName=\"username\"\n            id=\"username\"\n          />\n          <mat-error *ngIf=\"form?.controls?.username?.hasError('required')\"\n            >Please provide a username</mat-error\n          >\n          <mat-error *ngIf=\"form?.controls?.username?.hasError('minLength')\"\n            >Minimum X characters required</mat-error\n          >\n          <mat-error *ngIf=\"form?.controls?.username?.hasError('maxLength')\"\n            >Maximum X characters required</mat-error\n          >\n        </mat-form-field>\n\n        <!-- EMAIL -->\n        <mat-form-field [@rowsAnimation]=\"\">\n          <input\n            matInput\n            placeholder=\"Email address\"\n            formControlName=\"email\"\n            id=\"email\"\n          />\n          <mat-error *ngIf=\"form?.controls?.email?.hasError('required')\"\n            >At least X characters required.</mat-error\n          >\n          <mat-error *ngIf=\"form?.controls?.email?.hasError('maxLength')\"\n            >Too much characters.</mat-error\n          >\n        </mat-form-field>\n\n        <!-- PASSWORD -->\n        <mat-form-field [@rowsAnimation]=\"\">\n          <input\n            matInput\n            [type]=\"hideP ? 'password' : 'text'\"\n            placeholder=\"Password\"\n            formControlName=\"password\"\n            id=\"password\"\n          />\n          <mat-icon matSuffix (click)=\"hideP = !hideP\">{{\n            hideP ? \"visibility\" : \"visibility_off\"\n          }}</mat-icon>\n          <mat-error *ngIf=\"form?.controls?.password?.hasError('required')\"\n            >At least X characters required.</mat-error\n          >\n          <mat-error *ngIf=\"form?.controls?.password?.hasError('minLength')\"\n            >Minimum X chracteres.</mat-error\n          >\n        </mat-form-field>\n      </div>\n\n      <!-- Submit -->\n      <button\n        type=\"submit\"\n        [disabled]=\"form.invalid || form.disabled\"\n        mat-raised-button\n        class=\"mat-elevation-z6\"\n        color=\"primary\"\n      >\n        <mat-icon>double_arrow</mat-icon>&nbsp;&nbsp;\n        <span>SUBMIT</span>\n      </button>\n    </form>\n  </mat-card-content>\n\n</mat-card>\n<br />\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"login-form-card\">\n  <h2 style=\"text-align: center;\">USER LOGIN</h2>\n  <br />\n\n  <mat-card-content>\n    <!-- Login form -->\n    <form [formGroup]=\"form\" (ngSubmit)=\"onLoginSubmit()\">\n      <div class=\"form-container\">\n\n        <!-- Username -->\n        <mat-form-field [@rowsAnimation]=\"\" appearance=\"outline\">\n          <mat-label>Username</mat-label>\n          <input\n            matInput\n            type=\"text\"\n            placeholder=\"Username\"\n            formControlName=\"username\"\n          />\n          <mat-error *ngIf=\"form.controls.username.errors\">Masukkan username</mat-error>\n        </mat-form-field>\n    \n        <!-- Password -->\n        <mat-form-field [@rowsAnimation]=\"\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input\n            matInput\n            [type]=\"hideP ? 'password' : 'text'\"\n            placeholder=\"Password\"\n            formControlName=\"password\"\n          />\n          <mat-icon matSuffix (click)=\"hideP = !hideP\">{{ hideP ? 'visibility' : 'visibility_off' }}</mat-icon>\n          <mat-error *ngIf=\"form.controls.password.errors\">Masukkan password</mat-error>\n        </mat-form-field>\n      </div>\n      <br />\n    \n      <!-- Submit -->\n      <button\n        [disabled]=\"form.invalid || form.disabled\"\n        type=\"submit\"\n        mat-raised-button\n        class=\"mat-elevation-z6\"\n        color=\"accent\"\n      >\n        <mat-icon>fingerprint</mat-icon>&nbsp;&nbsp;\n        <span>LOGIN</span>\n      </button>\n    </form>\n  </mat-card-content>\n\n</mat-card>");
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
                    declarations: [
                        _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _auth_routing__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _shared__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
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
            /* harmony default export */ __webpack_exports__["default"] = (".form-card {\n  text-align: left;\n}\n\n.logo-reg {\n  width: 40px;\n  height: 40px;\n}\n\n.mat-form-field {\n  width: 95%;\n}\n\n.mat-raised-button {\n  width: 200px;\n  height: 60px;\n}\n\n.mat-raised-button:hover {\n  background-color: #35aace;\n}\n\n.mat-raised-button[disabled] {\n  background-color: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmFwYWFhaC9Db2Rlcy9fU0FNUExFUy90ZWFtbW9kaWZpZXIvY2xpZW50L3NyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNJRjs7QURIRTtFQUNFLHlCQUFBO0FDS0o7O0FERkE7RUFDRSxzQkFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNhcmQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmxvZ28tcmVnIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA5NSU7XG59XG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCAxNzAsIDIwNik7XG4gIH1cbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuIiwiLmZvcm0tY2FyZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5sb2dvLXJlZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm1hdC1yYWlzZWQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1YWFjZTtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59Il19 */");
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
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
                        username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)]),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        avatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
                    });
                }
                RegisterComponent.prototype.ngOnInit = function () { };
                // Select avatar
                RegisterComponent.prototype.onFileSelected = function (event) {
                    var _this = this;
                    var file = event.target.files[0];
                    this.form.patchValue({
                        avatar: file
                    });
                    this.form.get('avatar').updateValueAndValidity();
                    // File Preview
                    var reader = new FileReader();
                    reader.onload = function () {
                        _this.preview = reader.result;
                    };
                    reader.readAsDataURL(file);
                };
                RegisterComponent.prototype.submitForm = function () {
                    var _this = this;
                    // this.isLoadingService.add();
                    this.form.disable();
                    this.authService.registerUser(this.form.value.name, this.form.value.username, this.form.value.email, this.form.value.password, this.form.value.avatar)
                        .subscribe(function (event) {
                        switch (event.type) {
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Sent:
                                console.log("Request has been made!");
                                break;
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].ResponseHeader:
                                console.log("Response header has been received!");
                                break;
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress:
                                _this.percentDone = Math.round((event.loaded / event.total) * 100);
                                console.log("Uploaded! " + _this.percentDone + "%");
                                break;
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response:
                                console.log(event);
                                if (event.body.success === false) {
                                    _this.notification.error(event.body.message);
                                }
                                else if (event.body.success === true) {
                                    _this.notification.success(event.body.message);
                                    _this.router.navigate(["auth/sign-in"]);
                                    _this.isLoadingService.remove();
                                }
                        }
                    });
                    console.log(this.form.value);
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
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
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  justify-content: center;\n  margin: 70px 0px;\n}\n\nmat-card-title,\nmat-card-content {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-raised-button {\n  width: 100%;\n  height: 60px;\n}\n\n.mat-raised-button:hover {\n  background-color: #35aace;\n}\n\n.mat-raised-button[disabled] {\n  background-color: #ccc;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmFwYWFhaC9Db2Rlcy9fU0FNUExFUy90ZWFtbW9kaWZpZXIvY2xpZW50L3NyYy9hcHAvYXV0aC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTs7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSUY7O0FESEU7RUFDRSx5QkFBQTtBQ0tKOztBREZBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA3MHB4IDBweDtcbn1cbm1hdC1jYXJkLXRpdGxlLFxubWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDE3MCwgMjA2KTtcbiAgfVxufVxuLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA3MHB4IDBweDtcbn1cblxubWF0LWNhcmQtdGl0bGUsXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm1hdC1yYWlzZWQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1YWFjZTtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */");
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
                function SignInComponent(router, formBuilder, authService, isLoadingService, notification) {
                    this.router = router;
                    this.formBuilder = formBuilder;
                    this.authService = authService;
                    this.isLoadingService = isLoadingService;
                    this.notification = notification;
                    this.hideP = true;
                    this.createForm();
                }
                SignInComponent.prototype.ngOnInit = function () {
                };
                // Function to create login form
                SignInComponent.prototype.createForm = function () {
                    this.form = this.formBuilder.group({
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                };
                SignInComponent.prototype.onLoginSubmit = function () {
                    var _this = this;
                    this.isLoadingService.add();
                    this.form.disable();
                    var user = {
                        username: this.form.get('username').value,
                        password: this.form.get('password').value
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
                                _this.form.enable();
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