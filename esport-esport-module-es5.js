(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esport-esport-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/add-team/add-team.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/esport/add-team/add-team.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"form-card\">\n  <h3>PENDAFTARAN</h3>\n  <mat-card-subtitle>DAFTARKAN TIM ANDA KE TURNAMEN</mat-card-subtitle>\n  <br />\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n\n    <!-- Image Preview -->\n    <div class=\"form-group\">\n      <div class=\"preview\" [@rowsAnimation]=\"\" *ngIf=\"preview && preview !== null\">\n        <img [src]=\"preview\" [alt]=\"form.value.name\" style=\"width: 150px\" />\n      </div>\n    </div>\n\n    <!-- File Input -->\n    <div class=\"form-group\">\n      <input type=\"file\" (change)=\"onFileSelected($event)\"/>\n    </div>\n\n    <div class=\"form-container\">\n      <mat-form-field [@rowsAnimation]=\"\">\n        <input\n          matInput\n          placeholder=\"Nama tim\"\n          formControlName=\"name\"\n          id=\"name\"\n        />\n        <mat-error *ngIf=\"form?.controls?.name?.hasError('required')\"\n          >Masukkan nama tim</mat-error\n        >\n        <mat-error *ngIf=\"form?.controls?.name?.hasError('maxLength')\"\n          >Jangan terlalu panjang, bro</mat-error\n        >\n      </mat-form-field>\n\n      <mat-form-field [@rowsAnimation]=\"\">\n        <input\n          matInput\n          placeholder=\"Nomor yang bisa dihubungi\"\n          formControlName=\"contact\"\n          id=\"contact\"\n        />\n        <mat-error *ngIf=\"form?.controls?.contact?.hasError('required')\"\n          >Masukkan nomor hp</mat-error\n        >\n        <mat-error *ngIf=\"form?.controls?.contact?.hasError('minLength')\"\n          >Jangan ko terlalu kasian</mat-error\n        >\n        <mat-error *ngIf=\"form?.controls?.contact?.hasError('maxLength')\"\n          >Panjang skali kasian</mat-error\n        >\n      </mat-form-field>\n\n      <mat-form-field [@rowsAnimation]=\"\">\n        <input\n          matInput\n          placeholder=\"Alamat tim\"\n          formControlName=\"address\"\n          id=\"address\"\n        />\n        <mat-error *ngIf=\"form?.controls?.address?.hasError('required')\"\n          >Masukkan alamat tim.</mat-error\n        >\n        <mat-error *ngIf=\"form?.controls?.address?.hasError('maxLength')\"\n          >Uvuvwevwevwe***, terlalu panjang.</mat-error\n        >\n      </mat-form-field>\n    </div>\n\n    <!-- Submit -->\n    <button\n      type=\"submit\"\n      [disabled]=\"form.invalid || form.disabled\"\n      mat-raised-button\n      class=\"mat-elevation-z6\"\n      color=\"accent\"\n    >\n      <mat-icon>send</mat-icon>&nbsp;&nbsp;\n      <span>SUBMIT</span>\n    </button>\n  </form>\n</mat-card>\n\n<br>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/dialog-box/dialog-box.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/esport/dialog-box/dialog-box.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<span class=\"display-4\" mat-dialog-title>{{ data.name | uppercase }}</span>\n<div mat-dialog-content>\n  <mat-form-field appearance=\"outline\" class=\"score-input\">\n    <input type=\"number\" placeholder=\"UPDATE SCORE\" matInput [(ngModel)]=\"data.score\" required>\n    <mat-error>Please input a score.</mat-error>\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"saveUpdate()\" mat-raised-button class=\"mat-elevation-z4\" color=\"accent\">UPDATE</button>\n  <button mat-button (click)=\"closeDialog()\" mat-flat-button>CANCEL</button>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/edit-teams/edit-teams.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/esport/edit-teams/edit-teams.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Search field -->\n<mat-form-field appearance=\"outline\" class=\"search-input\">\n  <mat-label>Pencarian</mat-label>\n  <input\n    matInput\n    (keyup)=\"applyFilter($event.target.value)\"\n    placeholder=\"Cari...\"\n  />\n  <mat-icon matSuffix>search</mat-icon>\n</mat-form-field>\n\n<!-- TABLE OF TEAMS -->\n<table mat-table [dataSource]=\"DATA_SOURCE\" matSort class=\"mat-elevation-z1\">\n\n  <!-- isVerified field -->\n  <ng-container matColumnDef=\"isVerified\">\n    <th mat-header-cell *matHeaderCellDef>Status</th>\n    <td mat-cell *matCellDef=\"let team\">\n      <mat-icon *ngIf=\"team.isVerified === true\" style=\"color: green;\">verified_user</mat-icon>\n      <mat-icon *ngIf=\"team.isVerified === false\" style=\"color: red;\">clear</mat-icon>\n    </td>\n  </ng-container>\n\n  <!-- Team's name field -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell mat-sort-header *matHeaderCellDef>Team's name</th>\n    <td mat-cell *matCellDef=\"let team\">{{ team.name }}</td>\n  </ng-container>\n\n  <!-- Team's contact field -->\n  <ng-container matColumnDef=\"contact\">\n    <th mat-header-cell *matHeaderCellDef [hidden]=\"isHandset$ | async\">Team's contact</th>\n    <td mat-cell *matCellDef=\"let team\" [hidden]=\"isHandset$ | async\">{{ team.contact }}</td>\n  </ng-container>\n\n  <!-- Address field -->\n  <ng-container matColumnDef=\"address\">\n    <th mat-header-cell *matHeaderCellDef [hidden]=\"isHandset$ | async\">Address</th>\n    <td mat-cell *matCellDef=\"let team\" [hidden]=\"isHandset$ | async\">{{ team.address }}</td>\n  </ng-container>\n\n  <!-- Score field -->\n  <ng-container matColumnDef=\"score\">\n    <th mat-header-cell mat-sort-header *matHeaderCellDef>Score</th>\n    <td mat-cell *matCellDef=\"let team\">\n      <span (click)=\"editScore(team)\" class=\"add-score\">+&nbsp;</span>\n      {{ team.score }}\n    </td>\n      \n  </ng-container>\n\n  <!-- Logo field -->\n  <ng-container matColumnDef=\"logo\">\n    <th mat-header-cell *matHeaderCellDef class=\"table-image\">Logo</th>\n    <td mat-cell *matCellDef=\"let team\">\n      <img [src]='team.logo' [alt]='team.name' style=\"max-width: 30px;\" />\n    </td>\n  </ng-container>\n\n  <!-- Action Column -->\n  <ng-container matColumnDef=\"action\">\n    <th mat-header-cell *matHeaderCellDef class=\"action-link\"><mat-icon>edit</mat-icon></th>\n    <td mat-cell *matCellDef=\"let team; let i = index;\" class=\"action-link\">\n      <mat-slide-toggle\n        [checked]=\"team.isVerified === true\"\n        (change)=\"onToggle(team, $event)\"\n      ></mat-slide-toggle>\n    </td>\n  </ng-container>\n\n  <!-- displayedColumns -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row [@rowsAnimation]=\"\" *matRowDef=\"let row; columns: displayedColumns\"></tr>\n</table>\n\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20, 50]\" showFirstLastButtons></mat-paginator>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/fetch-teams/fetch-teams.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/esport/fetch-teams/fetch-teams.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Search field -->\n<mat-form-field appearance=\"outline\">\n  <mat-label>Pencarian</mat-label>\n  <input\n    matInput\n    (keyup)=\"applyFilter($event.target.value)\"\n    placeholder=\"Cari...\"\n  />\n  <mat-icon matSuffix>search</mat-icon>\n</mat-form-field>\n\n<!-- TABLE OF TEAMS -->\n<table mat-table [dataSource]=\"DATA_SOURCE\" matSort class=\"mat-elevation-z1\">\n\n  <!-- isVerified field -->\n  <ng-container matColumnDef=\"isVerified\">\n    <th mat-header-cell mat-sort-header *matHeaderCellDef>Status</th>\n    <td mat-cell *matCellDef=\"let team\">\n      <mat-icon *ngIf=\"team.isVerified === true\" style=\"color: green;\">verified_user</mat-icon>\n      <mat-icon *ngIf=\"team.isVerified === false\" style=\"color: red;\">clear</mat-icon>\n    </td>\n  </ng-container>\n\n  <!-- Team's name field -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell mat-sort-header *matHeaderCellDef>Team's name</th>\n    <td mat-cell *matCellDef=\"let team\">{{ team.name }}</td>\n  </ng-container>\n\n  <!-- Address field -->\n  <ng-container matColumnDef=\"address\">\n    <th mat-header-cell *matHeaderCellDef [hidden]=\"isHandset$ | async\">Address</th>\n    <td mat-cell *matCellDef=\"let team\" [hidden]=\"isHandset$ | async\">{{ team.address }}</td>\n  </ng-container>\n\n  <!-- Logo field -->\n  <ng-container matColumnDef=\"logo\">\n    <th mat-header-cell *matHeaderCellDef class=\"table-image\">Logo</th>\n    <td mat-cell *matCellDef=\"let team\">\n      <img [src]='team.logo' [alt]='team.name' style=\"max-width: 30px;\" />\n    </td>\n  </ng-container>\n\n  <!-- SCORE field -->\n  <ng-container matColumnDef=\"score\">\n    <th mat-header-cell mat-sort-header *matHeaderCellDef>Score</th>\n    <td mat-cell *matCellDef=\"let team\">{{ team.score }}</td>\n  </ng-container>\n\n  <!-- displayedColumns -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row [@rowsAnimation]=\"\" *matRowDef=\"let row; columns: displayedColumns\"></tr>\n</table>\n\n<mat-paginator [pageSizeOptions]=\"[10, 20, 50]\" showFirstLastButtons></mat-paginator>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/profile/profile.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/esport/profile/profile.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-6\">\n    <mat-card>\n      <mat-card-header>\n        <img mat-card-avatar src=\"../../../assets/images/teams/dota2.png\" alt=\"logo team\">\n        <mat-card-title>TEAM NAME</mat-card-title>\n        <!-- <mat-card-title class=\"lead\">Jalan Kontunaga, Sultra</mat-card-title> -->\n      </mat-card-header>\n      <img mat-card-image src=\"../../../assets/images/posts/Smile-Quote.png\" alt=\"card image\">\n      <mat-card-content style=\"text-align: justify;\">\n        <h6>Team address: Jalan Kontunaga, Sultra</h6>\n        <h6>Contact person: 0833 3333 3333</h6>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"text-center\" style=\"margin-top: 50px;\">\n      <!-- <mat-icon style=\"color: green;\">verified_user</mat-icon> -->\n      <mat-icon style=\"color: red;\">clear</mat-icon>\n    </div>\n    <br><br>\n    <!-- <h3 class=\"text-center\">This team has been verified.</h3> -->\n    <h3 class=\"text-center\">This team is not yet verified.</h3>\n\n    <div class=\"upload\">\n      <input type=\"file\" />\n      <button mat-raised-button color=\"accent\">Upload file</button>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/esport/add-team/add-team.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/esport/add-team/add-team.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-card {\n  text-align: center;\n}\n\n.logo-reg {\n  width: 40px;\n  height: 40px;\n}\n\n.mat-form-field {\n  width: 95%;\n}\n\n.mat-raised-button {\n  width: 200px;\n  height: 60px;\n}\n\n.mat-raised-button:hover {\n  background-color: #35aace;\n}\n\n.mat-raised-button[disabled] {\n  background-color: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmFwYWFhaC9Db2Rlcy9fU0FNUExFUy90ZWFtbW9kaWZpZXIvY2xpZW50L3NyYy9hcHAvZXNwb3J0L2FkZC10ZWFtL2FkZC10ZWFtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lc3BvcnQvYWRkLXRlYW0vYWRkLXRlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDSUY7O0FESEU7RUFDRSx5QkFBQTtBQ0tKOztBREZBO0VBQ0Usc0JBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2VzcG9ydC9hZGQtdGVhbS9hZGQtdGVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9nby1yZWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDk1JTtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDE3MCwgMjA2KTtcbiAgfVxufVxuLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG4iLCIuZm9ybS1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nby1yZWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogOTUlO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNWFhY2U7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/esport/add-team/add-team.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/esport/add-team/add-team.component.ts ***!
          \*******************************************************/
        /*! exports provided: AddTeamComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeamComponent", function () { return AddTeamComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/fesm2015/service-work-is-loading.js");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
            var AddTeamComponent = /** @class */ (function () {
                function AddTeamComponent(router, esportService, isLoadingService, notification) {
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
                AddTeamComponent.prototype.ngOnInit = function () {
                };
                AddTeamComponent.prototype.onFileSelected = function (event) {
                    var _this = this;
                    var file = event.target.files[0];
                    this.form.patchValue({
                        logo: file
                    });
                    this.form.get('logo').updateValueAndValidity();
                    // File Preview
                    var reader = new FileReader();
                    reader.onload = function () {
                        _this.preview = reader.result;
                    };
                    reader.readAsDataURL(file);
                };
                AddTeamComponent.prototype.submitForm = function () {
                    var _this = this;
                    this.isLoadingService.add();
                    this.form.disable();
                    this.esportService.addTeam(this.form.value.name, this.form.value.contact, this.form.value.address, this.form.value.logo)
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
                                if (event.body.success === false) {
                                    _this.notification.error(event.body.message);
                                }
                                else if (event.body.success === true) {
                                    _this.percentDone = false;
                                    _this.notification.success(event.body.message);
                                    _this.router.navigate(["esport/all-teams"]);
                                    _this.isLoadingService.remove();
                                }
                        }
                    });
                };
                return AddTeamComponent;
            }());
            AddTeamComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_6__["EsportService"] },
                { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_5__["IsLoadingService"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/esport/dialog-box/dialog-box.component.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/esport/dialog-box/dialog-box.component.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-title {\n  font-size: 30px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.mat-input-element {\n  text-align: center;\n}\n\n.score-input {\n  width: 100%;\n}\n\n.mat-raised-button {\n  width: 60%;\n  height: 60px;\n}\n\n.mat-raised-button:hover {\n  background-color: #35aace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmFwYWFhaC9Db2Rlcy9fU0FNUExFUy90ZWFtbW9kaWZpZXIvY2xpZW50L3NyYy9hcHAvZXNwb3J0L2RpYWxvZy1ib3gvZGlhbG9nLWJveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXNwb3J0L2RpYWxvZy1ib3gvZGlhbG9nLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNFRjs7QURERTtFQUNFLHlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9lc3BvcnQvZGlhbG9nLWJveC9kaWFsb2ctYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbi5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWF0LWlucHV0LWVsZW1lbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2NvcmUtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjBweDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCAxNzAsIDIwNik7XG4gIH1cbn0iLCIubWF0LWRpYWxvZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWlucHV0LWVsZW1lbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zY29yZS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubWF0LXJhaXNlZC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVhYWNlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/esport/dialog-box/dialog-box.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/esport/dialog-box/dialog-box.component.ts ***!
          \***********************************************************/
        /*! exports provided: DialogBoxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxComponent", function () { return DialogBoxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var DialogBoxComponent = /** @class */ (function () {
                function DialogBoxComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                }
                DialogBoxComponent.prototype.saveUpdate = function () {
                    this.dialogRef.close(this.data.score);
                };
                DialogBoxComponent.prototype.closeDialog = function () {
                    if (!this.data.score) {
                        this.data.score = 0;
                    }
                    this.dialogRef.close();
                };
                return DialogBoxComponent;
            }());
            DialogBoxComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            DialogBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dialog-box',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/dialog-box/dialog-box.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-box.component.scss */ "./src/app/esport/dialog-box/dialog-box.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DialogBoxComponent);
            /***/ 
        }),
        /***/ "./src/app/esport/edit-teams/edit-teams.component.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/esport/edit-teams/edit-teams.component.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\ntd.mat-cell:last-of-type,\ntd.mat-footer-cell:last-of-type,\nth.mat-header-cell:last-of-type {\n  padding-right: 10px;\n}\n\ntd.mat-cell:first-of-type,\ntd.mat-footer-cell:first-of-type,\nth.mat-header-cell:first-of-type {\n  padding-left: 10px;\n}\n\n.search-input {\n  font-size: 14px;\n  width: 100%;\n}\n\n.add-score {\n  font-weight: 800;\n  font-size: larger;\n}\n\n.add-score:hover {\n  cursor: pointer;\n  color: #35aace;\n  font-size: x-large;\n}\n\n.action-link {\n  padding-right: 10px;\n  padding-left: 10px;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmFwYWFhaC9Db2Rlcy9fU0FNUExFUy90ZWFtbW9kaWZpZXIvY2xpZW50L3NyYy9hcHAvZXNwb3J0L2VkaXQtdGVhbXMvZWRpdC10ZWFtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXNwb3J0L2VkaXQtdGVhbXMvZWRpdC10ZWFtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURHQTs7O0VBR0UsbUJBQUE7QUNBRjs7QURHQTs7O0VBR0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZXNwb3J0L2VkaXQtdGVhbXMvZWRpdC10ZWFtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG50ZC5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsXG50ZC5tYXQtZm9vdGVyLWNlbGw6bGFzdC1vZi10eXBlLFxudGgubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsXG50ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFkZC1zY29yZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHJnYig1MywgMTcwLCAyMDYpO1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgfVxufVxuXG4uYWN0aW9uLWxpbmsge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246ZW5kO1xufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSxcbnRkLm1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsXG50aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxudGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLFxudGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRkLXNjb3JlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG4uYWRkLXNjb3JlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzM1YWFjZTtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG4uYWN0aW9uLWxpbmsge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/esport/edit-teams/edit-teams.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/esport/edit-teams/edit-teams.component.ts ***!
          \***********************************************************/
        /*! exports provided: EditTeamsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamsComponent", function () { return EditTeamsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/fesm2015/service-work-is-loading.js");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
            /* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialog-box/dialog-box.component */ "./src/app/esport/dialog-box/dialog-box.component.ts");
            var EditTeamsComponent = /** @class */ (function () {
                function EditTeamsComponent(breakpointObserver, esportService, authService, isLoadingService, notification, dialog) {
                    this.breakpointObserver = breakpointObserver;
                    this.esportService = esportService;
                    this.authService = authService;
                    this.isLoadingService = isLoadingService;
                    this.notification = notification;
                    this.dialog = dialog;
                    this.allTeams = [];
                    this.isHandset$ = this.breakpointObserver
                        .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["Breakpoints"].Handset)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (result) { return result.matches; }));
                    this.DATA_SOURCE = [];
                    this.displayedColumns = ['isVerified', 'name', 'contact', 'address', 'score', 'logo', 'action'];
                }
                EditTeamsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // GET all teams onInit
                    this.authService.loadToken();
                    this.esportService.getTeams().subscribe(function (res) {
                        _this.allTeams = res['teams'];
                        _this.DATA_SOURCE = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.allTeams);
                        _this.DATA_SOURCE.paginator = _this.paginator;
                        _this.DATA_SOURCE.sort = _this.sort;
                    });
                    // APPLY loader OnInit service
                    this.isLoadingService.add(this.esportService.getTeams());
                };
                // FILTER on (keyup)
                EditTeamsComponent.prototype.applyFilter = function (filterValue) {
                    this.DATA_SOURCE.filter = filterValue.trim().toLowerCase();
                };
                // PUT newScore
                EditTeamsComponent.prototype.editScore = function (team) {
                    var _this = this;
                    var dialogRef = this.dialog.open(_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_10__["DialogBoxComponent"], {
                        width: '400px',
                        height: '400px',
                        data: team,
                        disableClose: true
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        _this.isLoadingService.add(_this.esportService.addScore(team).subscribe(function (data) {
                            if (data.success === false) {
                                _this.notification.error(data.message);
                            }
                            else if (data.success === true) {
                                _this.notification.success(data.message);
                            }
                        })); // end loading
                    });
                };
                // TOGGLE to verify
                EditTeamsComponent.prototype.onToggle = function (team, event) {
                    var _this = this;
                    team.isVerified = !team.isVerified;
                    this.isLoadingService.add(this.esportService.verifyTeam(team).subscribe(function (data) {
                        console.log(data);
                        _this.notification.success(data.message);
                    })); // End of isLoading$
                };
                return EditTeamsComponent;
            }());
            EditTeamsComponent.ctorParameters = function () { return [
                { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_9__["EsportService"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
                { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_8__["IsLoadingService"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
            ], EditTeamsComponent.prototype, "paginator", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
            ], EditTeamsComponent.prototype, "sort", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], EditTeamsComponent.prototype, "checked", void 0);
            EditTeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-edit-teams',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-teams.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/edit-teams/edit-teams.component.html")).default,
                    animations: [_shared__WEBPACK_IMPORTED_MODULE_9__["elementAnimations"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-teams.component.scss */ "./src/app/esport/edit-teams/edit-teams.component.scss")).default]
                })
            ], EditTeamsComponent);
            /***/ 
        }),
        /***/ "./src/app/esport/esport.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/esport/esport.module.ts ***!
          \*****************************************/
        /*! exports provided: EsportModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsportModule", function () { return EsportModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
            /* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
            /* harmony import */ var _esport_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./esport.routing */ "./src/app/esport/esport.routing.ts");
            /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ */ "./src/app/esport/index.ts");
            /* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog-box/dialog-box.component */ "./src/app/esport/dialog-box/dialog-box.component.ts");
            var ESPORT_COMPONENTS = [
                ___WEBPACK_IMPORTED_MODULE_8__["FetchTeamsComponent"], ___WEBPACK_IMPORTED_MODULE_8__["AddTeamComponent"],
                ___WEBPACK_IMPORTED_MODULE_8__["EditTeamsComponent"], ___WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
            ];
            var EsportModule = /** @class */ (function () {
                function EsportModule() {
                }
                return EsportModule;
            }());
            EsportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: ESPORT_COMPONENTS.concat([_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_9__["DialogBoxComponent"]]),
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _shared__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _esport_routing__WEBPACK_IMPORTED_MODULE_7__["EsportRoutingModule"]
                    ],
                    providers: [_shared__WEBPACK_IMPORTED_MODULE_5__["EsportService"], _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                    entryComponents: [_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_9__["DialogBoxComponent"]]
                })
            ], EsportModule);
            /***/ 
        }),
        /***/ "./src/app/esport/esport.routing.ts": 
        /*!******************************************!*\
          !*** ./src/app/esport/esport.routing.ts ***!
          \******************************************/
        /*! exports provided: EsportRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsportRoutingModule", function () { return EsportRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
            /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ */ "./src/app/esport/index.ts");
            var esportRoutes = [
                {
                    path: '',
                    redirectTo: 'all-teams',
                    pathMatch: 'full'
                },
                {
                    path: 'all-teams',
                    component: ___WEBPACK_IMPORTED_MODULE_4__["FetchTeamsComponent"],
                },
                {
                    path: 'registration',
                    component: ___WEBPACK_IMPORTED_MODULE_4__["AddTeamComponent"],
                    canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
                },
                {
                    path: 'profile',
                    component: ___WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                    canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
                },
                {
                    path: 'edit-teams',
                    component: ___WEBPACK_IMPORTED_MODULE_4__["EditTeamsComponent"],
                    canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
                }
            ];
            var EsportRoutingModule = /** @class */ (function () {
                function EsportRoutingModule() {
                }
                return EsportRoutingModule;
            }());
            EsportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(esportRoutes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], EsportRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/esport/fetch-teams/fetch-teams.component.scss": 
        /*!***************************************************************!*\
          !*** ./src/app/esport/fetch-teams/fetch-teams.component.scss ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\ntd.mat-cell:last-of-type,\ntd.mat-footer-cell:last-of-type,\nth.mat-header-cell:last-of-type {\n  padding-right: 10px;\n}\n\ntd.mat-cell:first-of-type,\ntd.mat-footer-cell:first-of-type,\nth.mat-header-cell:first-of-type {\n  padding-left: 10px;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmFwYWFhaC9Db2Rlcy9fU0FNUExFUy90ZWFtbW9kaWZpZXIvY2xpZW50L3NyYy9hcHAvZXNwb3J0L2ZldGNoLXRlYW1zL2ZldGNoLXRlYW1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lc3BvcnQvZmV0Y2gtdGVhbXMvZmV0Y2gtdGVhbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FER0E7OztFQUdFLG1CQUFBO0FDQUY7O0FER0E7OztFQUdFLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZXNwb3J0L2ZldGNoLXRlYW1zL2ZldGNoLXRlYW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgLy8gbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbnRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSxcbnRkLm1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsXG50aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxudGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLFxudGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZC5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsXG50ZC5tYXQtZm9vdGVyLWNlbGw6bGFzdC1vZi10eXBlLFxudGgubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsXG50ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/esport/fetch-teams/fetch-teams.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/esport/fetch-teams/fetch-teams.component.ts ***!
          \*************************************************************/
        /*! exports provided: FetchTeamsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchTeamsComponent", function () { return FetchTeamsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/fesm2015/service-work-is-loading.js");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
            var FetchTeamsComponent = /** @class */ (function () {
                function FetchTeamsComponent(breakpointObserver, esportService, authService, isLoadingService) {
                    this.breakpointObserver = breakpointObserver;
                    this.esportService = esportService;
                    this.authService = authService;
                    this.isLoadingService = isLoadingService;
                    this.isHandset$ = this.breakpointObserver
                        .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
                    this.DATA_SOURCE = [];
                    this.displayedColumns = ['isVerified', 'name', 'address', 'score', 'logo'];
                }
                FetchTeamsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // GET all teams onInit
                    this.authService.loadToken();
                    this.esportService.getTeams().subscribe(function (res) {
                        var teamsList = res['teams'];
                        _this.DATA_SOURCE = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](teamsList);
                        _this.DATA_SOURCE.paginator = _this.paginator;
                        _this.DATA_SOURCE.sort = _this.sort;
                    });
                    // apply loader OnInit service
                    this.isLoadingService.add(this.esportService.getTeams());
                };
                // Filtering on (keyup)
                FetchTeamsComponent.prototype.applyFilter = function (filterValue) {
                    this.DATA_SOURCE.filter = filterValue.trim().toLowerCase();
                };
                return FetchTeamsComponent;
            }());
            FetchTeamsComponent.ctorParameters = function () { return [
                { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_6__["EsportService"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_5__["IsLoadingService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
            ], FetchTeamsComponent.prototype, "paginator", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
            ], FetchTeamsComponent.prototype, "sort", void 0);
            FetchTeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-fetch-teams',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fetch-teams.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/fetch-teams/fetch-teams.component.html")).default,
                    animations: [_shared__WEBPACK_IMPORTED_MODULE_6__["elementAnimations"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fetch-teams.component.scss */ "./src/app/esport/fetch-teams/fetch-teams.component.scss")).default]
                })
            ], FetchTeamsComponent);
            /***/ 
        }),
        /***/ "./src/app/esport/index.ts": 
        /*!*********************************!*\
          !*** ./src/app/esport/index.ts ***!
          \*********************************/
        /*! exports provided: AddTeamComponent, FetchTeamsComponent, EditTeamsComponent, ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _add_team_add_team_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-team/add-team.component */ "./src/app/esport/add-team/add-team.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddTeamComponent", function () { return _add_team_add_team_component__WEBPACK_IMPORTED_MODULE_1__["AddTeamComponent"]; });
            /* harmony import */ var _fetch_teams_fetch_teams_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch-teams/fetch-teams.component */ "./src/app/esport/fetch-teams/fetch-teams.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchTeamsComponent", function () { return _fetch_teams_fetch_teams_component__WEBPACK_IMPORTED_MODULE_2__["FetchTeamsComponent"]; });
            /* harmony import */ var _edit_teams_edit_teams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-teams/edit-teams.component */ "./src/app/esport/edit-teams/edit-teams.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditTeamsComponent", function () { return _edit_teams_edit_teams_component__WEBPACK_IMPORTED_MODULE_3__["EditTeamsComponent"]; });
            /* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/esport/profile/profile.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]; });
            /***/ 
        }),
        /***/ "./src/app/esport/profile/profile.component.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/esport/profile/profile.component.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-icon {\n  font-size: 200px;\n  height: auto;\n  width: auto;\n}\n\nmat-card-header mat-card-title {\n  font-size: 27px;\n}\n\nmat-card-content {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmFwYWFhaC9Db2Rlcy9fU0FNUExFUy90ZWFtbW9kaWZpZXIvY2xpZW50L3NyYy9hcHAvZXNwb3J0L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXNwb3J0L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSDs7QURFRztFQUNHLGVBQUE7QUNDTjs7QURFQTtFQUNHLHlCQUFBO0FDQ0giLCJmaWxlIjoic3JjL2FwcC9lc3BvcnQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb24ge1xuICAgZm9udC1zaXplOiAyMDBweDtcbiAgIGhlaWdodDogYXV0bztcbiAgIHdpZHRoOiBhdXRvO1xufVxubWF0LWNhcmQtaGVhZGVyIHtcbiAgIG1hdC1jYXJkLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgIH1cbn1cbm1hdC1jYXJkLWNvbnRlbnQge1xuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iLCJtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbm1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/esport/profile/profile.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/esport/profile/profile.component.ts ***!
          \*****************************************************/
        /*! exports provided: ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return ProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProfileComponent = /** @class */ (function () {
                function ProfileComponent() {
                }
                ProfileComponent.prototype.ngOnInit = function () {
                };
                return ProfileComponent;
            }());
            ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/esport/profile/profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/esport/profile/profile.component.scss")).default]
                })
            ], ProfileComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=esport-esport-module-es2015.js.map
//# sourceMappingURL=esport-esport-module-es5.js.map
//# sourceMappingURL=esport-esport-module-es5.js.map