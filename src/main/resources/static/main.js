(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  This is admin page!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/index.ts":
/*!********************************!*\
  !*** ./src/app/admin/index.ts ***!
  \********************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return _admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"]; });




/***/ }),

/***/ "./src/app/angular-material/angular-material.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/angular-material/angular-material.module.ts ***!
  \*************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin */ "./src/app/admin/index.ts");
/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guard */ "./src/app/guard/index.ts");
/* harmony import */ var _not_found__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found */ "./src/app/not-found/index.ts");
/* harmony import */ var _change_password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./change-password */ "./src/app/change-password/index.ts");
/* harmony import */ var _forbidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forbidden */ "./src/app/forbidden/index.ts");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup */ "./src/app/signup/index.ts");











var routes = [
    {
        path: '',
        component: _home__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: _signup__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
        canActivate: [_guard__WEBPACK_IMPORTED_MODULE_6__["GuestGuard"]],
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        canActivate: [_guard__WEBPACK_IMPORTED_MODULE_6__["GuestGuard"]]
    },
    {
        path: 'change-password',
        component: _change_password__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"],
        canActivate: [_guard__WEBPACK_IMPORTED_MODULE_6__["LoginGuard"]]
    },
    {
        path: 'admin',
        component: _admin__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
        canActivate: [_guard__WEBPACK_IMPORTED_MODULE_6__["AdminGuard"]]
    },
    {
        path: '404',
        component: _not_found__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]
    },
    {
        path: '403',
        component: _forbidden__WEBPACK_IMPORTED_MODULE_9__["ForbiddenComponent"]
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  color: rgba(0, 0, 0, 0.54);\n  font-family: Roboto, \"Helvetica Neue\"; }\n\n.content {\n  margin: 50px 70px; }\n\n@media screen and (min-width: 600px) and (max-width: 1279px) {\n  .content {\n    margin: 20px 30px; } }\n\n@media screen and (max-width: 599px) {\n  .content {\n    margin: 8px 12px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpcmRwZXJzc29uL0Rvd25sb2Fkcy9jbGllbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsMEJBQXlCO0VBQ3pCLHFDQUFxQyxFQUFBOztBQUd2QztFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFO0lBQ0UsaUJBQWlCLEVBQUEsRUFDbEI7O0FBR0g7RUFDRTtJQUNFLGdCQUFnQixFQUFBLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjU0KTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogNTBweCA3MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luOiAyMHB4IDMwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbjogOHB4IDEycHg7XG4gIH1cbn1cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guard */ "./src/app/guard/index.ts");
/* harmony import */ var _not_found__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found */ "./src/app/not-found/index.ts");
/* harmony import */ var _component_header_account_menu_account_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/header/account-menu/account-menu.component */ "./src/app/component/header/account-menu/account-menu.component.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component */ "./src/app/component/index.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service */ "./src/app/service/index.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/forbidden/forbidden.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _interceptor_TokenInterceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./interceptor/TokenInterceptor */ "./src/app/interceptor/TokenInterceptor.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _component__WEBPACK_IMPORTED_MODULE_14__["ApiCardComponent"],
                _home__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _login__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _not_found__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
                _component_header_account_menu_account_menu_component__WEBPACK_IMPORTED_MODULE_13__["AccountMenuComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"],
                _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_17__["ForbiddenComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_20__["AngularMaterialModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor_TokenInterceptor__WEBPACK_IMPORTED_MODULE_22__["TokenInterceptor"],
                    multi: true
                },
                _guard__WEBPACK_IMPORTED_MODULE_11__["LoginGuard"],
                _guard__WEBPACK_IMPORTED_MODULE_11__["GuestGuard"],
                _guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"],
                _service__WEBPACK_IMPORTED_MODULE_15__["FooService"],
                _service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                _service__WEBPACK_IMPORTED_MODULE_15__["ApiService"],
                _service__WEBPACK_IMPORTED_MODULE_15__["UserService"],
                _service__WEBPACK_IMPORTED_MODULE_15__["ConfigService"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatIconRegistry"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <mat-card elevation=\"5\" fxFlex>\n    <mat-card-subtitle>Change Your Password</mat-card-subtitle>\n    <p *ngIf=\"notification\" [class]=\"notification.msgType\">{{notification.msgBody}}</p>\n    <mat-card-content>\n      <form #changePasswordForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"!submitted\" [formGroup]=\"form\">\n        <mat-form-field>\n          <input formControlName=\"oldPassword\" matInput placeholder=\"old password\" required type=\"password\">\n        </mat-form-field>\n        <mat-form-field>\n          <input formControlName=\"newPassword\" matInput placeholder=\"new password\" required type=\"password\">\n        </mat-form-field>\n        <button [disabled]=\"!changePasswordForm.form.valid\" color=\"primary\" mat-raised-button type=\"submit\">Change\n          Password\n        </button>\n      </form>\n      <mat-spinner *ngIf=\"submitted\" mode=\"indeterminate\"></mat-spinner>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/change-password/change-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  width: 100%; }\n\nmat-card {\n  max-width: 350px;\n  text-align: center;\n  animation: fadein 1s;\n  -o-animation: fadein 1s;\n  /* Opera */\n  -moz-animation: fadein 1s;\n  /* Firefox */\n  -webkit-animation: fadein 1s;\n  /* Safari and Chrome */ }\n\nmat-input-container {\n  width: 100%; }\n\nmat-spinner {\n  width: 25px;\n  height: 25px;\n  margin: 20px auto 0 auto; }\n\n.error {\n  color: #D50000; }\n\n.success {\n  color: #8BC34A; }\n\n@media screen and (max-width: 599px) {\n  .content {\n    /* https://github.com/angular/flex-layout/issues/295 */\n    display: block !important; }\n  mat-card {\n    /* https://github.com/angular/flex-layout/issues/295 */\n    display: block !important;\n    max-width: 999px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpcmRwZXJzc29uL0Rvd25sb2Fkcy9jbGllbnQvc3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQUUsVUFBQTtFQUN6Qix5QkFBeUI7RUFBRSxZQUFBO0VBQzNCLDRCQUE0QjtFQUFFLHNCQUFBLEVBQXVCOztBQUd2RDtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFFRTtJQUNFLHNEQUFBO0lBQ0EseUJBQXlCLEVBQUE7RUFHM0I7SUFDRSxzREFBQTtJQUNBLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtY2FyZCB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4gIC1vLWFuaW1hdGlvbjogZmFkZWluIDFzOyAvKiBPcGVyYSAqL1xuICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDFzOyAvKiBGaXJlZm94ICovXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMXM7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG59XG5cbm1hdC1pbnB1dC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LXNwaW5uZXIge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiAjRDUwMDAwO1xufVxuXG4uc3VjY2VzcyB7XG4gIGNvbG9yOiAjOEJDMzRBO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuXG4gIC5jb250ZW50IHtcbiAgICAvKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9mbGV4LWxheW91dC9pc3N1ZXMvMjk1ICovXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIG1hdC1jYXJkIHtcbiAgICAvKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9mbGV4LWxheW91dC9pc3N1ZXMvMjk1ICovXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDk5OXB4O1xuICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");





var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        /**
         * Boolean used in telling the UI
         * that the form has been submitted
         * and is awaiting a response
         */
        this.submitted = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64)])],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(32)])]
        });
    };
    ChangePasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        /**
         * Innocent until proven guilty
         */
        this.notification = undefined;
        this.submitted = true;
        this.authService.changePassowrd(this.form.value)
            .subscribe(function () {
            _this.authService.logout();
            _this.router.navigate(['/login', { msgType: 'success', msgBody: 'Success! Please sign in with your new password.' }]);
        }, function (error) {
            _this.submitted = false;
            _this.notification = { msgType: 'error', msgBody: 'Invalid old password.' };
        });
    };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/change-password/change-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/change-password/index.ts":
/*!******************************************!*\
  !*** ./src/app/change-password/index.ts ***!
  \******************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _change_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return _change_password_component__WEBPACK_IMPORTED_MODULE_0__["ChangePasswordComponent"]; });




/***/ }),

/***/ "./src/app/component/api-card/api-card.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/api-card/api-card.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title><b>{{title}}</b></mat-card-title>\n    <mat-card-subtitle>{{subTitle}}</mat-card-subtitle>\n  </mat-card-header>\n  <img [src]=\"imgUrl\" mat-card-image>\n  <mat-card-content>\n    <p>\n      {{content}}\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button\n      (click)=\"onButtonClick()\"\n      color=\"primary\"\n      mat-raised-button>\n      {{apiText}}\n    </button>\n  </mat-card-actions>\n  <div [class]=\"responsePanelClass()\">\n    <pre>Path: {{responseObj.path}}</pre>\n    <pre>Method: {{responseObj.method}}</pre>\n    <pre>Status: {{responseObj.status}}</pre>\n    <pre>Message: {{responseObj.body || responseObj.message}} </pre>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/component/api-card/api-card.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/api-card/api-card.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  text-align: center;\n  max-width: 350px; }\n\nmat-card {\n  text-align: left; }\n\nmat-card .response-success {\n    background-color: #dff0d8;\n    border-color: #d6e9c6;\n    color: #3c763d; }\n\nmat-card .response-error {\n    background-color: #f2dede;\n    border-color: #ebccd1;\n    color: #a94442; }\n\nmat-card .response {\n    max-height: 0;\n    -webkit-transition: max-height 1s;\n    transition: max-height 1s;\n    margin-left: -16px;\n    margin-right: -16px;\n    border-radius: 4px;\n    overflow: hidden;\n    margin-bottom: -16px;\n    padding-bottom: 0; }\n\nmat-card .expand {\n    padding: 15px;\n    border: 1px solid transparent;\n    max-height: 999px;\n    margin-top: 8px; }\n\nmat-card mat-card-actions {\n    margin-bottom: 0;\n    padding-bottom: 8px; }\n\nmat-card pre {\n    display: block;\n    padding: 9.5px;\n    margin: 0 0 10px;\n    font-size: 13px;\n    line-height: 1.42857143;\n    color: #333;\n    word-break: break-all;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    background-color: #f5f5f5;\n    border: 1px solid #ccc;\n    border-radius: 4px; }\n\n@media screen and (max-width: 599px) {\n  :host {\n    max-width: 999px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpcmRwZXJzc29uL0Rvd25sb2Fkcy9jbGllbnQvc3JjL2FwcC9jb21wb25lbnQvYXBpLWNhcmQvYXBpLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRGxCO0lBSUkseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixjQUFjLEVBQUE7O0FBTmxCO0lBVUkseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixjQUFjLEVBQUE7O0FBWmxCO0lBZ0JJLGFBQWE7SUFDYixpQ0FBeUI7SUFBekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCLEVBQUE7O0FBdkJyQjtJQTJCSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBOUJuQjtJQWtDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7O0FBbkN2QjtJQXVDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQixFQUFBOztBQUt0QjtFQUNFO0lBQ0UsZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYXBpLWNhcmQvYXBpLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbn1cblxubWF0LWNhcmQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gIC5yZXNwb25zZS1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xuICAgIGJvcmRlci1jb2xvcjogI2Q2ZTljNjtcbiAgICBjb2xvcjogIzNjNzYzZDtcbiAgfVxuXG4gIC5yZXNwb25zZS1lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcbiAgICBib3JkZXItY29sb3I6ICNlYmNjZDE7XG4gICAgY29sb3I6ICNhOTQ0NDI7XG4gIH1cblxuICAucmVzcG9uc2Uge1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5leHBhbmQge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgbWF4LWhlaWdodDogOTk5cHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgbWF0LWNhcmQtYWN0aW9ucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA5LjVweDtcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgICBjb2xvcjogIzMzMztcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgOmhvc3Qge1xuICAgIG1heC13aWR0aDogOTk5cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/api-card/api-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/api-card/api-card.component.ts ***!
  \**********************************************************/
/*! exports provided: ApiCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCardComponent", function() { return ApiCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApiCardComponent = /** @class */ (function () {
    function ApiCardComponent() {
        this.expand = false;
        this.apiClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ApiCardComponent.prototype.ngOnInit = function () {
    };
    ApiCardComponent.prototype.onButtonClick = function () {
        this.expand = true;
        this.apiClick.next(this.apiText);
    };
    ApiCardComponent.prototype.responsePanelClass = function () {
        var rClass = ['response'];
        if (this.expand) {
            rClass.push('expand');
        }
        if (this.responseObj.status) {
            this.responseObj.status === 200 ?
                rClass.push('response-success') :
                rClass.push('response-error');
        }
        return rClass.join(' ');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ApiCardComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ApiCardComponent.prototype, "subTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ApiCardComponent.prototype, "imgUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ApiCardComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ApiCardComponent.prototype, "apiText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ApiCardComponent.prototype, "responseObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ApiCardComponent.prototype, "apiClick", void 0);
    ApiCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-api-card',
            template: __webpack_require__(/*! ./api-card.component.html */ "./src/app/component/api-card/api-card.component.html"),
            styles: [__webpack_require__(/*! ./api-card.component.scss */ "./src/app/component/api-card/api-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApiCardComponent);
    return ApiCardComponent;
}());



/***/ }),

/***/ "./src/app/component/api-card/index.ts":
/*!*********************************************!*\
  !*** ./src/app/component/api-card/index.ts ***!
  \*********************************************/
/*! exports provided: ApiCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-card.component */ "./src/app/component/api-card/api-card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiCardComponent", function() { return _api_card_component__WEBPACK_IMPORTED_MODULE_0__["ApiCardComponent"]; });




/***/ }),

/***/ "./src/app/component/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"margin: 0px auto; padding: 0px; color: rgba(255, 255, 255, 0.541176); max-width: 356px;\">\n  <!-- react-text: 103 -->\n  Hand crafted with love by <!-- /react-text -->\n  <a href=\"https://github.com/bfwg\" style=\"color: rgba(255, 255, 255, 0.870588);\">Fan Jin</a>\n  <!-- react-text: 105 --> and our awesome <!-- /react-text -->\n  <a href=\"https://github.com/bfwg/angular-spring-jwt-starter/graphs/contributors\"\n     style=\"color: rgba(255, 255, 255, 0.870588);\">contributors</a><!-- react-text: 107 -->.<!-- /react-text -->\n</p>\n<a href=\"https://github.com/bfwg/angular-spring-jwt-starter\" mat-icon-button style=\"margin-top: 22px;\">\n  <img src=\"assets/image/github.png\"/>\n</a>\n"

/***/ }),

/***/ "./src/app/component/footer/footer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  font-weight: 300;\n  font-size: 15px;\n  display: block;\n  background-color: #212121;\n  height: 236px;\n  padding: 72px 24px;\n  box-sizing: border-box;\n  text-align: center; }\n  :host a {\n    text-decoration: none;\n    cursor: pointer;\n    color: #FFFFFF;\n    margin-top: 32px; }\n  :host h3 {\n    margin: 0px;\n    padding: 0px;\n    font-weight: 300;\n    font-size: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpcmRwZXJzc29uL0Rvd25sb2Fkcy9jbGllbnQvc3JjL2FwcC9jb21wb25lbnQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBaUM7RUFDakMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7RUFUcEI7SUFZSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtFQWZwQjtJQW1CSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMzMsIDMzKTtcbiAgaGVpZ2h0OiAyMzZweDtcbiAgcGFkZGluZzogNzJweCAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICB9XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuXG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/component/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/footer/index.ts":
/*!*******************************************!*\
  !*** ./src/app/component/footer/index.ts ***!
  \*******************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });




/***/ }),

/***/ "./src/app/component/header/account-menu/account-menu.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/component/header/account-menu/account-menu.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/change-password']\" mat-menu-item>CHANGE PASSWORD</button>\n<button (click)=\"logout()\" mat-menu-item>SIGN OUT</button>\n"

/***/ }),

/***/ "./src/app/component/header/account-menu/account-menu.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/component/header/account-menu/account-menu.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvYWNjb3VudC1tZW51L2FjY291bnQtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/component/header/account-menu/account-menu.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/component/header/account-menu/account-menu.component.ts ***!
  \*************************************************************************/
/*! exports provided: AccountMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountMenuComponent", function() { return AccountMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service */ "./src/app/service/index.ts");



var AccountMenuComponent = /** @class */ (function () {
    function AccountMenuComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    AccountMenuComponent.prototype.ngOnInit = function () {
        this.user = this.userService.currentUser;
    };
    AccountMenuComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AccountMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-menu',
            template: __webpack_require__(/*! ./account-menu.component.html */ "./src/app/component/header/account-menu/account-menu.component.html"),
            styles: [__webpack_require__(/*! ./account-menu.component.scss */ "./src/app/component/header/account-menu/account-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AccountMenuComponent);
    return AccountMenuComponent;
}());



/***/ }),

/***/ "./src/app/component/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"app-navbar\" color=\"primary\">\n  <button mat-button mat-ripple routerLink=\"/\">\n    <img alt=\"Angular-Spring-Starter\" class=\"app-angular-logo\" src=\"assets/image/angular-white-transparent.svg\">\n    <span>Angular-Spring-Starter</span>\n  </button>\n\n\n  <div class=\"right\">\n    <div fxFlex=\"1 1 auto\" fxLayout=\"row\" fxLayoutAlign=\"flex-end center\">\n      <button *ngIf=\"!hasSignedIn()\" mat-button mat-ripple routerLink=\"/signup\">\n        <span>Sign up</span>\n      </button>\n      <button *ngIf=\"!hasSignedIn()\" mat-button mat-ripple routerLink=\"/login\">\n        <span>Login</span>\n      </button>\n      <button\n        *ngIf=\"hasSignedIn()\"\n        [matMenuTriggerFor]=\"accountMenu\"\n        class=\"greeting-button\" mat-button\n        mat-ripple>\n        <span>Aloha, {{userName()}}</span>\n      </button>\n      <button\n        *ngIf=\"hasSignedIn()\"\n        [matMenuTriggerFor]=\"accountMenu\"\n        class=\"greeting-hamburger\" mat-icon-button\n        mat-ripple>\n        <mat-icon>menu</mat-icon>\n      </button>\n      <mat-menu #accountMenu\n                [overlapTrigger]=\"false\"\n                class=\"app-header-accountMenu\"\n                yposition=\"below\">\n        <app-account-menu></app-account-menu>\n      </mat-menu>\n    </div>\n  </div>\n</mat-toolbar>\n\n"

/***/ }),

/***/ "./src/app/component/header/header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  z-index: 10;\n  color: #fff; }\n\n.app-navbar {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap; }\n\n.app-navbar .right {\n    margin-left: auto;\n    float: right; }\n\n.app-navbar span {\n  text-transform: uppercase !important; }\n\n.app-angular-logo {\n  margin: 0 4px 3px 0;\n  height: 26px; }\n\n.greeting-hamburger {\n  display: none; }\n\n/deep/ .app-header-accountMenu.mat-menu-panel {\n  border-radius: 3px;\n  max-width: initial;\n  overflow: visible; }\n\n/deep/ .app-header-accountMenu.mat-menu-panel .mat-menu-content {\n    max-width: initial;\n    padding: 0;\n    overflow: hidden;\n    display: inline-block;\n    margin-bottom: -6px; }\n\n@media screen and (max-width: 600px) {\n  .greeting-hamburger {\n    display: block; }\n  .greeting-button {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpcmRwZXJzc29uL0Rvd25sb2Fkcy9jbGllbnQvc3JjL2FwcC9jb21wb25lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQU1iO0VBQ0UsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWUsRUFBQTs7QUFIakI7SUFNSSxpQkFBaUI7SUFDakIsWUFBWSxFQUFBOztBQUloQjtFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhLEVBQUE7O0FBSWY7RUFFSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUpyQjtJQU9NLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixtQkFBbUIsRUFBQTs7QUFLekI7RUFDRTtJQUNFLGNBQWMsRUFBQTtFQUVoQjtJQUNFLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vLyBUaGUgbWVudSBwb3B1cCBpcyByZW5kZXJlZCBvdXRzaWRlIHRoZSBoZWFkZXIgY29tcG9uZW50XG4vLyBzbyB3ZSB3aWxsIHJlc3R5bGUgYSBjb3VwbGUgdGhpbmdzIGluc2lkZSBhIGdsb2JhbCAvZGVlcC8gc2VsZWN0b3JcblxuLmFwcC1uYXZiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIC5yaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59XG5cbi5hcHAtbmF2YmFyIHNwYW4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5hcHAtYW5ndWxhci1sb2dvIHtcbiAgbWFyZ2luOiAwIDRweCAzcHggMDtcbiAgaGVpZ2h0OiAyNnB4O1xufVxuXG4uZ3JlZXRpbmctaGFtYnVyZ2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vZGVlcC8ge1xuICAuYXBwLWhlYWRlci1hY2NvdW50TWVudS5tYXQtbWVudS1wYW5lbCB7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1heC13aWR0aDogaW5pdGlhbDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICAgIC5tYXQtbWVudS1jb250ZW50IHtcbiAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTZweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmdyZWV0aW5nLWhhbWJ1cmdlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmdyZWV0aW5nLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service */ "./src/app/service/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService, authService, router) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.hasSignedIn = function () {
        return !!this.userService.currentUser;
    };
    HeaderComponent.prototype.userName = function () {
        var user = this.userService.currentUser;
        return user.firstName + ' ' + user.lastName;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/component/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/header/index.ts":
/*!*******************************************!*\
  !*** ./src/app/component/header/index.ts ***!
  \*******************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component */ "./src/app/component/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });




/***/ }),

/***/ "./src/app/component/index.ts":
/*!************************************!*\
  !*** ./src/app/component/index.ts ***!
  \************************************/
/*! exports provided: HeaderComponent, FooterComponent, ApiCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/app/component/header/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/app/component/footer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });

/* harmony import */ var _api_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-card */ "./src/app/component/api-card/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiCardComponent", function() { return _api_card__WEBPACK_IMPORTED_MODULE_2__["ApiCardComponent"]; });






/***/ }),

/***/ "./src/app/forbidden/forbidden.component.css":
/*!***************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmJpZGRlbi9mb3JiaWRkZW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/forbidden/forbidden.component.html":
/*!****************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Your access doesn't allow!!\n</p>\n"

/***/ }),

/***/ "./src/app/forbidden/forbidden.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.ts ***!
  \**************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForbiddenComponent = /** @class */ (function () {
    function ForbiddenComponent() {
    }
    ForbiddenComponent.prototype.ngOnInit = function () {
    };
    ForbiddenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forbidden',
            template: __webpack_require__(/*! ./forbidden.component.html */ "./src/app/forbidden/forbidden.component.html"),
            styles: [__webpack_require__(/*! ./forbidden.component.css */ "./src/app/forbidden/forbidden.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForbiddenComponent);
    return ForbiddenComponent;
}());



/***/ }),

/***/ "./src/app/forbidden/index.ts":
/*!************************************!*\
  !*** ./src/app/forbidden/index.ts ***!
  \************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forbidden_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forbidden.component */ "./src/app/forbidden/forbidden.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return _forbidden_component__WEBPACK_IMPORTED_MODULE_0__["ForbiddenComponent"]; });




/***/ }),

/***/ "./src/app/guard/admin.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guard/admin.guard.ts ***!
  \**************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");




var AdminGuard = /** @class */ (function () {
    function AdminGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        if (this.userService.currentUser) {
            if (JSON.stringify(this.userService.currentUser.authorities).search('ROLE_ADMIN') !== -1) {
                return true;
            }
            else {
                this.router.navigate(['/403']);
                return false;
            }
        }
        else {
            console.log('NOT AN ADMIN ROLE');
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guard/guest.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guard/guest.guard.ts ***!
  \**************************************/
/*! exports provided: GuestGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestGuard", function() { return GuestGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");




var GuestGuard = /** @class */ (function () {
    function GuestGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    GuestGuard.prototype.canActivate = function () {
        if (this.userService.currentUser) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    GuestGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], GuestGuard);
    return GuestGuard;
}());



/***/ }),

/***/ "./src/app/guard/index.ts":
/*!********************************!*\
  !*** ./src/app/guard/index.ts ***!
  \********************************/
/*! exports provided: LoginGuard, GuestGuard, AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.guard */ "./src/app/guard/login.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return _login_guard__WEBPACK_IMPORTED_MODULE_0__["LoginGuard"]; });

/* harmony import */ var _guest_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guest.guard */ "./src/app/guard/guest.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GuestGuard", function() { return _guest_guard__WEBPACK_IMPORTED_MODULE_1__["GuestGuard"]; });

/* harmony import */ var _admin_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.guard */ "./src/app/guard/admin.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return _admin_guard__WEBPACK_IMPORTED_MODULE_2__["AdminGuard"]; });






/***/ }),

/***/ "./src/app/guard/login.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guard/login.guard.ts ***!
  \**************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");




var LoginGuard = /** @class */ (function () {
    function LoginGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    LoginGuard.prototype.canActivate = function () {
        if (this.userService.currentUser) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\n  <app-api-card\n    (apiClick)=\"makeRequest($event)\"\n    [responseObj]=\"fooResponse\"\n    apiText=\"/api/foo\"\n    content='This is an demo public endpoint which requires no authentication.'\n    fxFlex\n    imgUrl=\"assets/image/foo.png\"\n    subTitle=\"Public\"\n    title='\"Foo\"'\n  >\n  </app-api-card>\n\n  <app-api-card\n    (apiClick)=\"makeRequest($event)\"\n    [responseObj]=\"whoamIResponse\"\n    apiText=\"/api/whoami\"\n    content='The regular endpoint which returns the current user information. You have to sign in as either a User or an Admin to gain the access to this endpoint.'\n    fxFlex\n    imgUrl=\"assets/image/user.png\"\n    subTitle=\"Authorized role: USER\"\n    title='\"Who am I\"'\n  >\n  </app-api-card>\n\n  <app-api-card\n    (apiClick)=\"makeRequest($event)\"\n    [responseObj]=\"allUserResponse\"\n    apiText=\"/api/user/all\"\n    class=\"last\"\n    content='This endpoint will give you a list of all the users. You have to sign in as an Admin to gain the access to this endpoint.'\n    fxFlex\n    imgUrl=\"assets/image/admin.png\"\n    subTitle=\"Authorized role: ADMIN\"\n    title='\"All users\"'\n  >\n  </app-api-card>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-api-card {\n  margin: 0 50px 0 0; }\n  app-api-card.last {\n    margin: 0 0 0 0; }\n  @media screen and (min-width: 600px) and (max-width: 1279px) {\n  app-api-card {\n    margin: 0 4px 0 0; }\n    app-api-card.last {\n      margin: 0 0 0 0; } }\n  @media screen and (max-width: 599px) {\n  .content {\n    /* https://github.com/angular/flex-layout/issues/295 */\n    display: block !important; }\n  app-api-card {\n    /* https://github.com/angular/flex-layout/issues/295 */\n    display: block !important;\n    margin: 0 0 12px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpcmRwZXJzc29uL0Rvd25sb2Fkcy9jbGllbnQvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQUlJLGVBQWUsRUFBQTtFQUluQjtFQUNFO0lBQ0UsaUJBQWlCLEVBQUE7SUFEbkI7TUFJSSxlQUFlLEVBQUEsRUFDaEI7RUFLTDtFQUVFO0lBQ0Usc0RBQUE7SUFDQSx5QkFBeUIsRUFBQTtFQUczQjtJQUNFLHNEQUFBO0lBQ0EseUJBQXlCO0lBQ3pCLGtCQUFrQixFQUFBLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWFwaS1jYXJkIHtcbiAgbWFyZ2luOiAwIDUwcHggMCAwO1xuXG4gICYubGFzdCB7XG4gICAgbWFyZ2luOiAwIDAgMCAwO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gIGFwcC1hcGktY2FyZCB7XG4gICAgbWFyZ2luOiAwIDRweCAwIDA7XG5cbiAgICAmLmxhc3Qge1xuICAgICAgbWFyZ2luOiAwIDAgMCAwO1xuICAgIH1cbiAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG5cbiAgLmNvbnRlbnQge1xuICAgIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2ZsZXgtbGF5b3V0L2lzc3Vlcy8yOTUgKi9cbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG5cbiAgYXBwLWFwaS1jYXJkIHtcbiAgICAvKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9mbGV4LWxheW91dC9pc3N1ZXMvMjk1ICovXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgMCAxMnB4IDA7XG4gIH1cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(config, fooService, userService) {
        this.config = config;
        this.fooService = fooService;
        this.userService = userService;
        this.fooResponse = {};
        this.whoamIResponse = {};
        this.allUserResponse = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.makeRequest = function (path) {
        var _this = this;
        if (this.config.foo_url.endsWith(path)) {
            this.fooService.getFoo()
                .subscribe(function (res) {
                _this.forgeResonseObj(_this.fooResponse, res, path);
            }, function (err) {
                _this.forgeResonseObj(_this.fooResponse, err, path);
            });
        }
        else if (this.config.whoami_url.endsWith(path)) {
            this.userService.getMyInfo()
                .subscribe(function (res) {
                _this.forgeResonseObj(_this.whoamIResponse, res, path);
            }, function (err) {
                _this.forgeResonseObj(_this.whoamIResponse, err, path);
            });
        }
        else {
            this.userService.getAll()
                .subscribe(function (res) {
                _this.forgeResonseObj(_this.allUserResponse, res, path);
            }, function (err) {
                _this.forgeResonseObj(_this.allUserResponse, err, path);
            });
        }
    };
    HomeComponent.prototype.forgeResonseObj = function (obj, res, path) {
        obj['path'] = path;
        obj['method'] = 'GET';
        if (res.ok === false) {
            // err
            obj['status'] = res.status;
            try {
                obj['body'] = JSON.stringify(JSON.parse(res._body), null, 2);
            }
            catch (err) {
                console.log(res);
                obj['body'] = res.error.message;
            }
        }
        else {
            // 200
            obj['status'] = 200;
            obj['body'] = JSON.stringify(res, null, 2);
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _service__WEBPACK_IMPORTED_MODULE_2__["FooService"],
            _service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/interceptor/TokenInterceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/interceptor/TokenInterceptor.ts ***!
  \*************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");



var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        if (this.auth.tokenIsPresent()) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + this.auth.getToken()
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n\n  <mat-card elevation=\"5\" fxFlex>\n\n    <mat-card-subtitle>\n      <h2>Angular Spring Starter</h2>\n    </mat-card-subtitle>\n\n    <mat-card-title>\n      <h2>{{title}}</h2>\n    </mat-card-title>\n\n    <mat-card-content>\n\n      <p *ngIf=\"notification\" [class]=\"notification.msgType\">{{notification.msgBody}}</p>\n\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"!submitted\" [formGroup]=\"form\">\n        <mat-form-field>\n          <input formControlName=\"username\" matInput placeholder=\"user/admin\" required>\n        </mat-form-field>\n        <mat-form-field>\n          <input formControlName=\"password\" matInput placeholder=\"123\" required type=\"password\">\n        </mat-form-field>\n        <button [disabled]=\"!loginForm.form.valid\" color=\"primary\" mat-raised-button type=\"submit\">Login</button>\n      </form>\n      <br>\n\n      <mat-spinner *ngIf=\"submitted\" mode=\"indeterminate\"></mat-spinner>\n      <br>\n      <hr>\n\n    </mat-card-content>\n\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  width: 100%; }\n\nmat-card {\n  max-width: 350px;\n  text-align: center;\n  animation: fadein 1s;\n  -o-animation: fadein 1s;\n  /* Opera */\n  -moz-animation: fadein 1s;\n  /* Firefox */\n  -webkit-animation: fadein 1s;\n  /* Safari and Chrome */ }\n\nmat-input-container {\n  display: block; }\n\nmat-spinner {\n  width: 25px;\n  height: 25px;\n  margin: 20px auto 0 auto; }\n\nbutton {\n  display: block;\n  width: 100%; }\n\n.error {\n  color: #D50000; }\n\n.success {\n  color: #8BC34A; }\n\n@media screen and (max-width: 599px) {\n  .content {\n    /* https://github.com/angular/flex-layout/issues/295 */\n    display: block !important; }\n  mat-card {\n    /* https://github.com/angular/flex-layout/issues/295 */\n    display: block !important;\n    max-width: 999px; } }\n\na {\n  text-decoration: none;\n  cursor: auto;\n  color: #FFFFFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpcmRwZXJzc29uL0Rvd25sb2Fkcy9jbGllbnQvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUFFLFVBQUE7RUFDekIseUJBQXlCO0VBQUUsWUFBQTtFQUMzQiw0QkFBNEI7RUFBRSxzQkFBQSxFQUF1Qjs7QUFJdkQ7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFJaEI7RUFFRTtJQUNFLHNEQUFBO0lBQ0EseUJBQXlCLEVBQUE7RUFHM0I7SUFDRSxzREFBQTtJQUNBLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBQSxFQUNqQjs7QUFJSDtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtY2FyZCB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4gIC1vLWFuaW1hdGlvbjogZmFkZWluIDFzOyAvKiBPcGVyYSAqL1xuICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDFzOyAvKiBGaXJlZm94ICovXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMXM7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG5cbn1cblxubWF0LWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogI0Q1MDAwMDtcbn1cblxuLnN1Y2Nlc3Mge1xuICBjb2xvcjogIzhCQzM0QTtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuXG4gIC5jb250ZW50IHtcbiAgICAvKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9mbGV4LWxheW91dC9pc3N1ZXMvMjk1ICovXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIG1hdC1jYXJkIHtcbiAgICAvKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9mbGV4LWxheW91dC9pc3N1ZXMvMjk1ICovXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDk5OXB4O1xuICB9XG5cbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBhdXRvO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, authService, router, route, formBuilder) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.title = 'Login';
        this.githubLink = 'https://github.com/bfwg/angular-spring-starter';
        /**
         * Boolean used in telling the UI
         * that the form has been submitted
         * and is awaiting a response
         */
        this.submitted = false;
        this.ngUnsubscribe = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (params) {
            _this.notification = params;
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.form = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(32)])]
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    LoginComponent.prototype.repository = function () {
        window.location.href = this.githubLink;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        /**
         * Innocent until proven guilty
         */
        this.notification = undefined;
        this.submitted = true;
        this.authService.login(this.form.value)
            .subscribe(function (data) {
            _this.userService.getMyInfo().subscribe();
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.submitted = false;
            _this.notification = { msgType: 'error', msgBody: 'Incorrect username or password.' };
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/not-found/index.ts":
/*!************************************!*\
  !*** ./src/app/not-found/index.ts ***!
  \************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return _not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"]; });




/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"page-header\">\n    <h1>Page Not Found</h1>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: RequestMethod, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utilities_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utilities/serialize */ "./src/app/shared/utilities/serialize.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var RequestMethod;
(function (RequestMethod) {
    RequestMethod["Get"] = "GET";
    RequestMethod["Head"] = "HEAD";
    RequestMethod["Post"] = "POST";
    RequestMethod["Put"] = "PUT";
    RequestMethod["Delete"] = "DELETE";
    RequestMethod["Options"] = "OPTIONS";
    RequestMethod["Patch"] = "PATCH";
})(RequestMethod || (RequestMethod = {}));
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
    }
    ApiService.prototype.get = function (path, args) {
        var options = {
            headers: this.headers,
        };
        if (args) {
            options['params'] = Object(_shared_utilities_serialize__WEBPACK_IMPORTED_MODULE_3__["serialize"])(args);
        }
        return this.http.get(path, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.checkError.bind(this)));
    };
    ApiService.prototype.post = function (path, body, customHeaders) {
        return this.request(path, body, RequestMethod.Post, customHeaders);
    };
    ApiService.prototype.put = function (path, body) {
        return this.request(path, body, RequestMethod.Put);
    };
    ApiService.prototype.delete = function (path, body) {
        return this.request(path, body, RequestMethod.Delete);
    };
    ApiService.prototype.request = function (path, body, method, custemHeaders) {
        var _this = this;
        if (method === void 0) { method = RequestMethod.Post; }
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"](method, path, body, {
            headers: custemHeaders || this.headers,
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (response) { return response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.body; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.checkError(error); }));
    };
    // Display error if logged in, otherwise redirect to IDP
    ApiService.prototype.checkError = function (error) {
        if (error && error.status === 401) {
            // this.redirectIfUnauth(error);
        }
        else {
            // this.displayError(error);
        }
        throw error;
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var AuthService = /** @class */ (function () {
    function AuthService(apiService, userService, config, router) {
        this.apiService = apiService;
        this.userService = userService;
        this.config = config;
        this.router = router;
        this.access_token = null;
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        var loginHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        // const body = `username=${user.username}&password=${user.password}`;
        var body = {
            'username': user.username,
            'password': user.password
        };
        return this.apiService.post(this.config.login_url, JSON.stringify(body), loginHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            console.log('Login success');
            _this.access_token = res.accessToken;
        }));
    };
    AuthService.prototype.signup = function (user) {
        var signupHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        return this.apiService.post(this.config.signup_url, JSON.stringify(user), signupHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
            console.log('Sign up success');
        }));
    };
    AuthService.prototype.logout = function () {
        this.userService.currentUser = null;
        this.access_token = null;
        this.router.navigate(['/login']);
    };
    AuthService.prototype.changePassowrd = function (passwordChanger) {
        var passwordChangerHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        return this.apiService.post(this.config.change_password_url, JSON.stringify(passwordChanger), passwordChangerHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
            console.log('Password changer success');
        }));
    };
    AuthService.prototype.tokenIsPresent = function () {
        return this.access_token != undefined && this.access_token != null;
    };
    AuthService.prototype.getToken = function () {
        return this.access_token;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/config.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/config.service.ts ***!
  \*******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._api_url = 'http://localhost:8080/api';
        this._auth_url = 'http://localhost:8080/auth';
        this._user_url = this._api_url + '/user';
        this._refresh_token_url = this._api_url + '/refresh';
        this._login_url = this._auth_url + '/login';
        this._change_password_url = this._auth_url + '/change-password';
        this._whoami_url = this._api_url + '/whoami';
        this._users_url = this._user_url + '/all';
        this._foo_url = this._api_url + '/foo';
        this._signup_url = this._auth_url + '/signup';
    }
    Object.defineProperty(ConfigService.prototype, "refresh_token_url", {
        get: function () {
            return this._refresh_token_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "login_url", {
        get: function () {
            return this._login_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "change_password_url", {
        get: function () {
            return this._change_password_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "whoami_url", {
        get: function () {
            return this._whoami_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "users_url", {
        get: function () {
            return this._users_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "foo_url", {
        get: function () {
            return this._foo_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "signup_url", {
        get: function () {
            return this._signup_url;
        },
        enumerable: true,
        configurable: true
    });
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/service/foo.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/foo.service.ts ***!
  \****************************************/
/*! exports provided: FooService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooService", function() { return FooService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/service/config.service.ts");




var FooService = /** @class */ (function () {
    function FooService(apiService, config) {
        this.apiService = apiService;
        this.config = config;
    }
    FooService.prototype.getFoo = function () {
        return this.apiService.get(this.config.foo_url);
    };
    FooService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], FooService);
    return FooService;
}());



/***/ }),

/***/ "./src/app/service/index.ts":
/*!**********************************!*\
  !*** ./src/app/service/index.ts ***!
  \**********************************/
/*! exports provided: AuthService, RequestMethod, ApiService, UserService, ConfigService, FooService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "./src/app/service/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/service/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/service/config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]; });

/* harmony import */ var _foo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foo.service */ "./src/app/service/foo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooService", function() { return _foo_service__WEBPACK_IMPORTED_MODULE_4__["FooService"]; });








/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UserService = /** @class */ (function () {
    function UserService(apiService, config) {
        this.apiService = apiService;
        this.config = config;
    }
    UserService.prototype.initUser = function () {
        var _this = this;
        var promise = this.apiService.get(this.config.refresh_token_url).toPromise()
            .then(function (res) {
            if (res.access_token !== null) {
                return _this.getMyInfo().toPromise()
                    .then(function (user) {
                    _this.currentUser = user;
                });
            }
        })
            .catch(function () { return null; });
        return promise;
    };
    UserService.prototype.setupUser = function (user) {
        this.currentUser = user;
    };
    UserService.prototype.getMyInfo = function () {
        var _this = this;
        return this.apiService.get(this.config.whoami_url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            _this.currentUser = user;
            return user;
        }));
    };
    UserService.prototype.getAll = function () {
        return this.apiService.get(this.config.users_url);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/utilities/loose-invalid.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/utilities/loose-invalid.ts ***!
  \***************************************************/
/*! exports provided: looseInvalid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "looseInvalid", function() { return looseInvalid; });
function looseInvalid(a) {
    return a === '' || a === null || a === undefined;
}


/***/ }),

/***/ "./src/app/shared/utilities/serialize.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/utilities/serialize.ts ***!
  \***********************************************/
/*! exports provided: serialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return serialize; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _loose_invalid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loose-invalid */ "./src/app/shared/utilities/loose-invalid.ts");


function serialize(obj) {
    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && !Object(_loose_invalid__WEBPACK_IMPORTED_MODULE_1__["looseInvalid"])(obj[key])) {
            params = params.set(key, obj[key]);
        }
    }
    return params;
}


/***/ }),

/***/ "./src/app/signup/index.ts":
/*!*********************************!*\
  !*** ./src/app/signup/index.ts ***!
  \*********************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return _signup_component__WEBPACK_IMPORTED_MODULE_0__["SignupComponent"]; });




/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <mat-card elevation=\"5\" fxFlex>\n    <mat-card-header>\n      <mat-card-title>\n        <h2>{{ title }}</h2>\n      </mat-card-title>\n      <mat-card-subtitle>\n        <h2>Angular Spring Starter</h2>\n      </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <p *ngIf=\"notification\" [class]=\"notification.msgType\">{{notification.msgBody}}</p>\n      <form (ngSubmit)=\"onSubmit()\" *ngIf=\"!submitted\" [formGroup]=\"form\">\n        <mat-form-field>\n          <label>Username: </label>\n          <input formControlName=\"username\" matInput required>\n        </mat-form-field>\n        <mat-form-field>\n          <label>Password: </label>\n          <input formControlName=\"password\" matInput required type=\"password\">\n        </mat-form-field>\n        <mat-form-field>\n          <label>First Name: </label>\n          <input formControlName=\"firstname\" matInput>\n        </mat-form-field>\n        <mat-form-field>\n          <label>Last Name: </label>\n          <input formControlName=\"lastname\" matInput>\n        </mat-form-field>\n        <mat-form-field>\n          <label>Email: </label>\n          <input formControlName=\"email\" matInput>\n        </mat-form-field>\n        <button [disabled]=\"!form.valid\" color=\"primary\" mat-raised-button type=\"submit\">Sign up</button>\n      </form>\n      <br>\n      <mat-spinner *ngIf=\"submitted\" mode=\"indeterminate\"></mat-spinner>\n      <br>\n      <hr>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  width: 100%; }\n\nmat-card {\n  max-width: 350px;\n  text-align: center;\n  animation: fadein 1s;\n  -o-animation: fadein 1s;\n  /* Opera */\n  -moz-animation: fadein 1s;\n  /* Firefox */\n  -webkit-animation: fadein 1s;\n  /* Safari and Chrome */ }\n\nmat-input-container {\n  display: block; }\n\nmat-spinner {\n  width: 25px;\n  height: 25px;\n  margin: 20px auto 0 auto; }\n\nbutton {\n  display: block;\n  width: 100%; }\n\n.error {\n  color: #D50000; }\n\n.success {\n  color: #8BC34A; }\n\n@media screen and (max-width: 599px) {\n  .content {\n    /* https://github.com/angular/flex-layout/issues/295 */\n    display: block !important; }\n  mat-card {\n    /* https://github.com/angular/flex-layout/issues/295 */\n    display: block !important;\n    max-width: 999px; } }\n\na {\n  text-decoration: none;\n  cursor: auto;\n  color: #FFFFFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpcmRwZXJzc29uL0Rvd25sb2Fkcy9jbGllbnQvc3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQUUsVUFBQTtFQUN6Qix5QkFBeUI7RUFBRSxZQUFBO0VBQzNCLDRCQUE0QjtFQUFFLHNCQUFBLEVBQXVCOztBQUl2RDtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUloQjtFQUVFO0lBQ0Usc0RBQUE7SUFDQSx5QkFBeUIsRUFBQTtFQUczQjtJQUNFLHNEQUFBO0lBQ0EseUJBQXlCO0lBQ3pCLGdCQUFnQixFQUFBLEVBQ2pCOztBQUlIO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogZmFkZWluIDFzO1xuICAtby1hbmltYXRpb246IGZhZGVpbiAxczsgLyogT3BlcmEgKi9cbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAxczsgLyogRmlyZWZveCAqL1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDFzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuXG59XG5cbm1hdC1pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxubWF0LXNwaW5uZXIge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XG59XG5cbmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6ICNENTAwMDA7XG59XG5cbi5zdWNjZXNzIHtcbiAgY29sb3I6ICM4QkMzNEE7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcblxuICAuY29udGVudCB7XG4gICAgLyogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvZmxleC1sYXlvdXQvaXNzdWVzLzI5NSAqL1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cblxuICBtYXQtY2FyZCB7XG4gICAgLyogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvZmxleC1sYXlvdXQvaXNzdWVzLzI5NSAqL1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA5OTlweDtcbiAgfVxuXG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogYXV0bztcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, authService, router, route, formBuilder) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.title = 'Sign up';
        /**
         * Boolean used in telling the UI
         * that the form has been submitted
         * and is awaiting a response
         */
        this.submitted = false;
        this.ngUnsubscribe = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (params) {
            _this.notification = params;
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.form = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(32)])],
            firstname: [''],
            lastname: [''],
            email: ['']
        });
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        /**
         * Innocent until proven guilty
         */
        this.notification = undefined;
        this.submitted = true;
        this.authService.signup(this.form.value)
            .subscribe(function (data) {
            console.log(data);
            _this.authService.login(_this.form.value).subscribe(function () {
                _this.userService.getMyInfo().subscribe();
            });
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.submitted = false;
            console.log('Sign up error');
            _this.notification = { msgType: 'error', msgBody: error['error'].message };
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SignupComponent);
    return SignupComponent;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/birdpersson/Downloads/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map