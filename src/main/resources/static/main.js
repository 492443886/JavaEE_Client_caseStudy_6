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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\">\n  <span>INFO5059</span>\n  <span style=\"flex: 1 1 auto;\"></span>\n  <button mat-button [matMenuTriggerFor]=\"appMenu\" align=\"end\">\n    <mat-icon>menu</mat-icon>\n  </button>\n</mat-toolbar>\n<mat-menu #appMenu=\"matMenu\">\n  <a mat-menu-item [routerLink]=\"['home']\">home</a>\n  <a mat-menu-item [routerLink]=\"['vendor']\">vendor</a>\n  <a mat-menu-item [routerLink]=\"['product']\">product</a>\n  <a mat-menu-item [routerLink]=\"['generator']\">generator</a>\n  <a mat-menu-item [routerLink]=\"['viewer']\">viewer</a>\n</mat-menu>\n<router-outlet></router-outlet>\n\n<!--<mat-toolbar color=\"primary\">-->\n  <!--<span>INFO5059</span>-->\n  <!--&lt;!&ndash; This fills the remaining space of the current row &ndash;&gt;-->\n  <!--<span style=\"flex: 1 1 auto;\"></span>-->\n  <!--<button mat-button [matMenuTriggerFor]=\"appMenu\" align=\"end\">-->\n    <!--<mat-icon>menu</mat-icon>-->\n  <!--</button>-->\n<!--</mat-toolbar>-->\n<!--<mat-menu #appMenu=\"matMenu\" xPosition=\"after\">-->\n  <!--<button mat-menu-item>Example Entry 1</button>-->\n  <!--<button mat-menu-item>Example Entry 2</button>-->\n<!--</mat-menu>-->\n<!--<mat-card>-->\n  <!--<mat-card-header layout=\"row\" layout-align=\"center center\">-->\n    <!--<mat-card-title>-->\n      <!--<span class=\"mat-headline bgc-yellow-A200\">{{ title }}</span>-->\n    <!--</mat-card-title>-->\n  <!--</mat-card-header>-->\n  <!--<mat-card-content>-->\n    <!--<div class=\"mat-title pad-sm\">-->\n      <!--Some Interesting content will go here eventually-->\n    <!--</div>-->\n  <!--</mat-card-content>-->\n  <!--<mat-card-footer align=\"end\" class=\"tc-purple-400 text-sm\">-->\n    <!--<span class=\"pad-right-md\">&copy;Info5059 - 2018</span>-->\n  <!--</mat-card-footer>-->\n<!--</mat-card>-->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exercises',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}()); // AppComponent class

// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = `Chunhui's Angular App!`;
// }


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _purchaseOrder_purchaseOrder_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchaseOrder/purchaseOrder.module */ "./src/app/purchaseOrder/purchaseOrder.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @covalent/core/layout */ "./node_modules/@covalent/core/esm5/covalent-core-layout.js");
/* harmony import */ var _covalent_core_steps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @covalent/core/steps */ "./node_modules/@covalent/core/esm5/covalent-core-steps.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _vendor_vendor_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vendor/vendor.module */ "./src/app/vendor/vendor.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// added imports












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _covalent_core_layout__WEBPACK_IMPORTED_MODULE_6__["CovalentLayoutModule"],
                _covalent_core_steps__WEBPACK_IMPORTED_MODULE_7__["CovalentStepsModule"],
                _vendor_vendor_module__WEBPACK_IMPORTED_MODULE_13__["VendorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _product_product_module__WEBPACK_IMPORTED_MODULE_15__["ProductModule"],
                _purchaseOrder_purchaseOrder_module__WEBPACK_IMPORTED_MODULE_4__["ReportModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_12__["LoginModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_14__["routing"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule, MatCardModule, MatMenuModule, MatInputModule} from '@angular/material';
// import { MatToolbarModule, MatIconModule, MatListModule, MatFormFieldModule } from '@angular/material';
// import { CovalentLayoutModule } from '@covalent/core/layout';
// import { CovalentStepsModule } from '@covalent/core/steps';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
//
//
// import { VendorHomeComponent } from './vendor/vendor-home.component';
// import { VendorListComponent} from './vendor/vendor-list.component';
// import { AppComponent } from './app.component';
// import { EmployeeDetailComponent } from './vendor/vendor-detail.component';
//
// import { RouterModule } from '@angular/router';
// import { routing } from './app.routing';
//
// import { HomeComponent } from './home/home.component';
// @NgModule({
//   declarations: [
//     AppComponent, HomeComponent, VendorHomeComponent, VendorListComponent, EmployeeDetailComponent
//   ],
//   imports: [
//     BrowserAnimationsModule,
//     BrowserModule,
//     CovalentLayoutModule,
//     MatFormFieldModule,
//     MatInputModule,
//     CovalentStepsModule,
//     FormsModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     MatButtonModule,
//     MatCardModule,
//     MatIconModule,
//     MatListModule,
//     MatMenuModule,
//     MatToolbarModule,
//     RouterModule,
//     routing
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _vendor_vendor_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/vendor-home.component */ "./src/app/vendor/vendor-home.component.ts");
/* harmony import */ var _product_product_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product-home.component */ "./src/app/product/product-home.component.ts");
/* harmony import */ var _purchaseOrder_generator_purchase_order_generator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchaseOrder/generator/purchase-order-generator.component */ "./src/app/purchaseOrder/generator/purchase-order-generator.component.ts");
/* harmony import */ var _purchaseOrder_viewer_purchase_order_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchaseOrder/viewer/purchase-order-viewer.component */ "./src/app/purchaseOrder/viewer/purchase-order-viewer.component.ts");
/* harmony import */ var _login_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/auth-guard.service */ "./src/app/login/auth-guard.service.ts");
/* harmony import */ var _login_login_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login-home.component */ "./src/app/login/login-home.component.ts");








var appRoutes = [
    { path: 'login', component: _login_login_home_component__WEBPACK_IMPORTED_MODULE_7__["LoginHomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_login_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'vendor', component: _vendor_vendor_home_component__WEBPACK_IMPORTED_MODULE_2__["VendorHomeComponent"], canActivate: [_login_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'product', component: _product_product_home_component__WEBPACK_IMPORTED_MODULE_3__["ProductHomeComponent"], canActivate: [_login_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'generator', component: _purchaseOrder_generator_purchase_order_generator_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseOrderGeneratorComponent"], canActivate: [_login_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'viewer', component: _purchaseOrder_viewer_purchase_order_viewer_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseOrderViewerComponent"], canActivate: [_login_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: BASEURL, PDFURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASEURL", function() { return BASEURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDFURL", function() { return PDFURL; });
var BASEURL = '/';
var PDFURL = '/POPDF?poid=';
// //
// export const BASEURL = 'http://localhost:8080/';
// export const PDFURL = 'http://localhost:8080/POPDF?poid=';


/***/ }),

/***/ "./src/app/deletedialog/delete-dialog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/deletedialog/delete-dialog.component.ts ***!
  \*********************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(data) {
        this.data = data;
        this.modalTitle = data.title;
        this.entityname = data.entityname;
    }
    DeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-dialog',
            template: "\n <h2 mat-dialog-title>{{modalTitle}}</h2>\n <mat-dialog-content>Do you wish to delete this {{entityname}}?</mat-dialog-content>\n <mat-dialog-actions>\n <button mat-button mat-dialog-close id=\"deleteNo\">No</button>\n <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog.\n-->\n <button mat-button [mat-dialog-close]=\"true\" id=\"deleteYes\">Yes</button>\n </mat-dialog-actions>\n "
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card align=\"center\" color=\"warn\">\r\n  <mat-card-content>\r\n    <img class=\"logo\" src=\"assets/img/logo.png\">\r\n    <div class=\"mat-title pad-xs\">\r\n      <h3>INFO5059 Casestudy</h3>\r\n      <span style=\"font-size:x-small;\">v1.0</span>\r\n    </div>\r\n  </mat-card-content>\r\n  <mat-card-footer align=\"end\" class=\"tc-purple-400 text-sm\">\r\n    <span class=\"pad-right-md\">&copy;Info5059 - 2018</span>\r\n  </mat-card-footer>\r\n</mat-card>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exercises',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/auth-guard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/login/auth-guard.service.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (sessionStorage.getItem('token')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/login-detail.component.ts":
/*!*************************************************!*\
  !*** ./src/app/login/login-detail.component.ts ***!
  \*************************************************/
/*! exports provided: LoginDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDetailComponent", function() { return LoginDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginDetailComponent = /** @class */ (function () {
    function LoginDetailComponent(builder) {
        this.builder = builder;
        this.getuser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
    } // constructor
    LoginDetailComponent.prototype.ngOnInit = function () {
        this.loginForm = this.builder.group({
            username: 'evan',
            password: ''
        });
    }; // ngOnInit
    LoginDetailComponent.prototype.builduser = function () {
        var frmJson = this.loginForm.getRawValue();
        this.user = { username: frmJson.username, password: frmJson.password };
        this.getuser.emit(this.user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginDetailComponent.prototype, "getuser", void 0);
    LoginDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-detail',
            template: __webpack_require__(/*! ./login-detail.html */ "./src/app/login/login-detail.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LoginDetailComponent);
    return LoginDetailComponent;
}()); // LoginDetailComponent



/***/ }),

/***/ "./src/app/login/login-detail.html":
/*!*****************************************!*\
  !*** ./src/app/login/login-detail.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\">\r\n\r\n  <div layout=\"row\">\r\n    <mat-form-field flex>\r\n      <input matInput placeholder=\"Username\" type=\"text\" formControlName=\"username\">\r\n      <mat-hint *ngIf=\"username.errors && (username.dirty || username.touched)\" align=\"end\"\r\n                [ngStyle]=\"{'color': 'red'}\">Title is required </mat-hint>\r\n    </mat-form-field>\r\n  </div>\r\n  <div layout=\"row\">\r\n    <mat-form-field flex>\r\n      <input matInput placeholder=\"password\" type=\"password\" formControlName=\"password\">\r\n      <mat-hint *ngIf=\"password.errors && (password.dirty || password.touched)\" align=\"end\"\r\n                [ngStyle]=\"{'color': 'red'}\">First name is required </mat-hint>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"mat-pad-sm\">\r\n<span>\r\n<button mat-raised-button type=\"button\" (click)=\"builduser()\"\r\n        [disabled]=\"!loginForm.valid\">\r\nLogin\r\n</button>\r\n</span>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/login/login-home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-home.component.ts ***!
  \***********************************************/
/*! exports provided: LoginHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginHomeComponent", function() { return LoginHomeComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _restful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../restful.service */ "./src/app/restful.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginHomeComponent = /** @class */ (function () {
    function LoginHomeComponent(route, router, restService) {
        this.route = route;
        this.router = router;
        this.restService = restService;
        this.model = {};
    }
    LoginHomeComponent.prototype.ngOnInit = function () {
        sessionStorage.setItem('token', '');
        this.msg = 'enter login credentials';
    };
    LoginHomeComponent.prototype.login = function (user) {
        var _this = this;
        var url = _constants__WEBPACK_IMPORTED_MODULE_3__["BASEURL"] + "login";
        sessionStorage.setItem('token', user.username + ':' + user.password);
        this.restService.add(url, user)
            .subscribe(function (payload) {
            if (payload) { // server returns true if headers pass authentication
                _this.router.navigate(['home']);
            }
            else {
                _this.msg = 'Authentication failed.';
                sessionStorage.removeItem('token');
            }
        }, function (err) {
            _this.msg = 'Authentication failed.';
            sessionStorage.removeItem('token');
        });
    };
    LoginHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <mat-toolbar color=\"warn\">\n      <span>Login</span>\n    </mat-toolbar>\n\n    <img class=\"logo\" src=\"assets/img/logo.png\" style=\"width: 40px; height: auto; margin-left: 47%\">\n\n    <mat-card>\n      <mat-card-content>\n        <mat-card-header class=\"pad-left-xl pad-bottom-lg mat-title text-center\">{{msg}}</mat-card-header>\n          <app-login-detail (getuser)=\"login($event)\"></app-login-detail>\n      </mat-card-content>\n    </mat-card>\n"
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _restful_service__WEBPACK_IMPORTED_MODULE_2__["RestfulService"]])
    ], LoginHomeComponent);
    return LoginHomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-home.component */ "./src/app/login/login-home.component.ts");
/* harmony import */ var _login_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-detail.component */ "./src/app/login/login-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// added imports





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_home_component__WEBPACK_IMPORTED_MODULE_5__["LoginHomeComponent"], _login_detail_component__WEBPACK_IMPORTED_MODULE_6__["LoginDetailComponent"]],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/product/product-detail.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/product/product-detail.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _deletedialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../deletedialog/delete-dialog.component */ "./src/app/deletedialog/delete-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(builder, dialog) {
        this.builder = builder;
        this.dialog = dialog;
        this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.productexpand = true;
        this.productexpand2 = true;
        this.icon = true;
        this.id = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([this.uniqueCodeValidator.bind(this), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        this.empid = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        // this.categoryid = new FormControl('', Validators.compose([Validators.required]));
        // this.description = new FormControl('', Validators.compose([Validators.required]));
        // this.amount = new FormControl('', Validators.compose([Validators.required]));
        // this.receipt = new FormControl('', Validators.compose([Validators.required]));
        // this.dateincurred = new FormControl('', Validators.compose([Validators.required]));
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        this.costprice = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        this.msrp = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        this.rop = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        this.qoh = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        this.qoo = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        this.eop = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        this.qrcodetxt = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
    } // constructor
    Object.defineProperty(ProductDetailComponent.prototype, "_expense", {
        // setter
        set: function (value) {
            this.selectedExpense = Object.assign({}, value);
            this.todoid = this.selectedExpense.id;
        },
        enumerable: true,
        configurable: true
    });
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.expenseForm = this.builder.group({
            id: this.id,
            empid: this.empid,
            // categoryid: this.categoryid,
            // description: this.description,
            // amount: this.amount,
            // receipt: this.receipt,
            // dateincurred: this.dateincurred,
            name: this.name,
            costprice: this.costprice,
            msrp: this.msrp,
            rop: this.rop,
            qoh: this.qoh,
            qoo: this.qoo,
            eop: this.eop,
            qrcodetxt: this.qrcodetxt
        });
        // patchValue doesn't care if all values are present
        this.expenseForm.patchValue({
            id: this.selectedExpense.id,
            empid: this.selectedExpense.vendor,
            // categoryid: this.selectedExpense.categoryid,
            // description: this.selectedExpense.description,
            // amount: this.selectedExpense.amount,
            // receipt: this.selectedExpense.receipt,
            // dateincurred: this.selectedExpense.dateincurred,
            name: this.selectedExpense.name,
            costprice: this.selectedExpense.costprice,
            msrp: this.selectedExpense.msrp,
            rop: this.selectedExpense.rop,
            qoh: this.selectedExpense.qoh,
            qoo: this.selectedExpense.qoo,
            eop: this.selectedExpense.eop,
            qrcodetxt: this.selectedExpense.qrcodetxt,
        });
        console.log(this.selectedExpense);
    }; // ngOnInit
    ProductDetailComponent.prototype.updateSelectedExpense = function () {
        this.selectedExpense.id = this.expenseForm.get('id').value;
        this.selectedExpense.vendor = this.expenseForm.get('empid').value;
        // this.selectedExpense.categoryid = this.expenseForm.get('categoryid').value;
        // this.selectedExpense.description = this.expenseForm.get('description').value;
        // this.selectedExpense.amount = this.expenseForm.get('amount').value;
        // this.selectedExpense.receipt = this.expenseForm.get('receipt').value;
        // this.selectedExpense.dateincurred = this.expenseForm.get('dateincurred').value;
        this.selectedExpense.name = this.expenseForm.get('name').value;
        this.selectedExpense.costprice = this.expenseForm.get('costprice').value;
        this.selectedExpense.msrp = this.expenseForm.get('msrp').value;
        this.selectedExpense.eop = this.expenseForm.get('eop').value;
        this.selectedExpense.qoh = this.expenseForm.get('qoh').value;
        this.selectedExpense.qoo = this.expenseForm.get('qoo').value;
        this.selectedExpense.rop = this.expenseForm.get('rop').value;
        this.selectedExpense.qrcodetxt = this.expenseForm.get('qrcodetxt').value;
        this.selectedExpense.qrcode = 'ddd';
        if (!this.todoid) {
            this.selectedExpense.Add = true;
        }
        else {
            this.selectedExpense.Add = false;
        }
        this.saved.emit(this.selectedExpense);
    };
    ProductDetailComponent.prototype.click = function () {
        this.icon = !this.icon;
    };
    ProductDetailComponent.prototype.uniqueCodeValidator = function (control) {
        if (this.products) {
            for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
                var p = _a[_i];
                if (p.id === control.value && !this.todoid) {
                    return { idExists: true };
                }
            }
            return null;
        }
    }; // uniqueCodeValidator
    ProductDetailComponent.prototype.openDeleteModal = function (selectedEmployee) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Delete " + this.selectedExpense.name,
            entityname: 'vendor'
        };
        dialogConfig.panelClass = 'custommodal';
        var dialogRef = this.dialog.open(_deletedialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DeleteDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleted.emit(_this.selectedExpense);
            }
        });
    }; // openDeleteModal
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('expense'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProductDetailComponent.prototype, "_expense", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], ProductDetailComponent.prototype, "vendors", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], ProductDetailComponent.prototype, "products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], ProductDetailComponent.prototype, "cancelled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], ProductDetailComponent.prototype, "saved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], ProductDetailComponent.prototype, "deleted", void 0);
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expense-detail',
            template: __webpack_require__(/*! ./product-detail.html */ "./src/app/product/product-detail.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}()); // ExpenseDetailComponent



/***/ }),

/***/ "./src/app/product/product-detail.html":
/*!*********************************************!*\
  !*** ./src/app/product/product-detail.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"expenseForm\" novalidate >\r\n\r\n\r\n  <td-expansion-panel expand=\"true\">\r\n    <ng-template td-expansion-panel-header>\r\n      <mat-toolbar color=\"accent\" (click)=\"productexpand=!productexpand\">\r\n        <span>product information</span>\r\n        <span flex align=\"end\">\r\n        <mat-icon *ngIf=\"!productexpand\">expand_more</mat-icon>\r\n        <mat-icon *ngIf=\"productexpand\">expand_less</mat-icon>\r\n        </span>\r\n      </mat-toolbar>\r\n    </ng-template>\r\n\r\n\r\n    <br />\r\n    <div layout=\"row\" class=\"md-pad-sm\">\r\n    <div layout=\"row\" *ngIf=\"!todoid;else displayidro\">\r\n    <mat-form-field flex>\r\n    <input matInput placeholder=\"Product Id\" type=\"text\" formControlName=\"id\">\r\n    <mat-hint *ngIf=\"id.errors && (id.dirty || id.touched)\" align=\"end\"\r\n    [ngStyle]=\"{'color': 'red'}\">\r\n\r\n    <p *ngIf=\"id.hasError('required')\">Product Id is required.</p>\r\n    <p *ngIf=\"!id.hasError('required') && id.hasError('idExists')\">Unique Id Required\r\n    </mat-hint>\r\n    </mat-form-field>\r\n    </div>\r\n    <ng-template  #displayidro>\r\n    <mat-form-field flex style=\"margin-bottom: 1rem;font-weight: bolder;\" color=\"accent\">\r\n    <input matInput [readonly]=\"true\" placeholder=\"Product ID\" formControlName=\"id\">\r\n    </mat-form-field>\r\n    <br />\r\n    </ng-template>\r\n    </div>\r\n    <!--<br/>-->\r\n    <div layout=\"row\" class=\"md-pad-sm\">\r\n    <mat-form-field>\r\n    <mat-select placeholder=\"Venodor\" formControlName=\"empid\" value=\"empid\">\r\n    <mat-option *ngFor=\"let vendor of vendors\" [value]=\"vendor.id\">{{vendor.name}}</mat-option>\r\n    </mat-select>\r\n    <mat-hint flex *ngIf=\"empid.errors && (empid.dirty || empid.touched)\" align=\"end\"\r\n    [ngStyle]=\"{'color': 'red', 'font-size': 'x-small', 'padding-top': '15px'}\">\r\n    <p align=\"end\" mat-pad-xs *ngIf=\"empid.hasError('required')\">Choose Employee</p>\r\n    </mat-hint>\r\n    </mat-form-field>\r\n    </div>\r\n\r\n    <div layout=\"row\">\r\n    <mat-form-field flex>\r\n    <input matInput placeholder=\"Name\" type=\"text\" formControlName=\"name\">\r\n    <mat-hint *ngIf=\"name.errors && (name.dirty || name.touched)\" align=\"end\"\r\n    [ngStyle]=\"{'color': 'red'}\">Name is required\r\n    </mat-hint>\r\n    </mat-form-field>\r\n    </div>\r\n\r\n    <br/>\r\n    <div layout=\"row\">\r\n    <mat-form-field flex>\r\n    <input matInput placeholder=\"Mrsp\"  type=\"number\" step=\"0.01\" formControlName=\"msrp\">\r\n\r\n    <mat-hint *ngIf=\"msrp.errors && (msrp.dirty || msrp.touched)\" align=\"end\"\r\n    [ngStyle]=\"{'color': 'red'}\">\r\n      <p *ngIf=\"msrp.hasError('required')\">Mrsp is required</p>\r\n      <p *ngIf=\"!msrp.hasError('required')\">Require a number</p>\r\n    </mat-hint>\r\n\r\n    </mat-form-field>\r\n    </div>\r\n    <br/>\r\n    <div layout=\"row\">\r\n    <mat-form-field flex>\r\n    <input matInput placeholder=\"Cost Price\" type=\"number\" step=\"0.01\" formControlName=\"costprice\">\r\n    <mat-hint *ngIf=\"costprice.errors && (costprice.dirty || costprice.touched)\" align=\"end\"\r\n    [ngStyle]=\"{'color': 'red'}\">Mrsp is required\r\n    </mat-hint>\r\n    </mat-form-field>\r\n    </div>\r\n    <!--<br/>-->\r\n    <br/>\r\n\r\n\r\n\r\n  </td-expansion-panel>\r\n\r\n\r\n\r\n  <td-expansion-panel expand=\"true\">\r\n    <ng-template td-expansion-panel-header>\r\n      <mat-toolbar color=\"accent\" (click)=\"productexpand2=!productexpand2\">\r\n        <span>Inventory information</span>\r\n        <span flex align=\"end\">\r\n        <mat-icon *ngIf=\"!productexpand2\">expand_more</mat-icon>\r\n        <mat-icon *ngIf=\"productexpand2\">expand_less</mat-icon>\r\n        </span>\r\n      </mat-toolbar>\r\n    </ng-template>\r\n\r\n    <br/>\r\n    <div layout=\"row\">\r\n      <mat-form-field flex>\r\n        <input matInput placeholder=\"rop\" type=\"number\" formControlName=\"rop\">\r\n        <mat-hint *ngIf=\"rop.errors && (rop.dirty || rop.touched)\" align=\"end\"\r\n                  [ngStyle]=\"{'color': 'red'}\">qoh is required\r\n        </mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div layout=\"row\">\r\n      <mat-form-field flex>\r\n        <input matInput placeholder=\"qoh\" type=\"number\" formControlName=\"qoh\">\r\n        <mat-hint *ngIf=\"qoh.errors && (qoh.dirty || qoh.touched)\" align=\"end\" [ngStyle]=\"{'color': 'red'}\">\r\n          qoh is required\r\n        </mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n    <div layout=\"row\">\r\n      <mat-form-field flex>\r\n        <input matInput placeholder=\"qoo\" type=\"number\" formControlName=\"qoo\">\r\n        <mat-hint *ngIf=\"qoo.errors && (qoo.dirty || qoo.touched)\" align=\"end\"\r\n                  [ngStyle]=\"{'color': 'red'}\">qoh is required\r\n        </mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n    <div layout=\"row\">\r\n      <mat-form-field flex>\r\n        <input matInput placeholder=\"eop\" type=\"number\" formControlName=\"eop\">\r\n        <mat-hint *ngIf=\"eop.errors && (eop.dirty || eop.touched)\" align=\"end\" [ngStyle]=\"{'color': 'red'}\">\r\n          qoh is required\r\n        </mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n  </td-expansion-panel>\r\n\r\n  <td-expansion-panel expand=\"false\" label=\"QRCode Information\" disabled=\"false\" >\r\n    <ng-template td-expansion-panel-header>\r\n      <mat-toolbar color=\"accent\" (click)=\"qrcodeexpand=!qrcodeexpand\">\r\n        <span>QRCode information</span>\r\n        <span flex align=\"end\">\r\n        <mat-icon *ngIf=\"qrcodeexpand\">expand_more</mat-icon>\r\n        <mat-icon *ngIf=\"!qrcodeexpand\">expand_less</mat-icon>\r\n        </span>\r\n      </mat-toolbar>\r\n    </ng-template>\r\n    <br/>\r\n    <div layout=\"row\">\r\n      <mat-form-field flex>\r\n        <input matInput placeholder=\"QRCode Text\" type=\"text\" required formControlName=\"qrcodetxt\">\r\n        <mat-hint *ngIf=\"qrcodetxt.errors && (qrcodetxt.dirty || qrcodetxt.touched)\" align=\"end\"\r\n                  [ngStyle]=\"{'color': 'red'}\">\r\n          <p *ngIf=\"qrcodetxt.hasError('required')\">QRCode is required.</p>\r\n        </mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n    <div layout=\"row\" *ngIf=\"selectedExpense.id && selectedExpense.qrcodetxt\">\r\n      QR Code:\r\n      <img style=\"display:block;\" [src]=\"'data:image/png;base64,' + selectedExpense.qrcode\" />\r\n    </div>\r\n  </td-expansion-panel>\r\n\r\n  <br/>\r\n  <div class=\"mat-pad-sm\">\r\n    <span>\r\n      <button mat-raised-button [disabled]=\"!expenseForm.valid\" type=\"button\"\r\n            (click)=\"updateSelectedExpense()\">Save</button>\r\n    </span>\r\n    <span>\r\n      <button *ngIf=\"selectedExpense.id\" mat-raised-button type=\"button\"\r\n              (click)=\"openDeleteModal(selectedExpense)\">Delete</button>\r\n    </span>\r\n    <span>\r\n      <button mat-raised-button type=\"button\" (click)=\"cancelled.emit(selectedExpense)\">Cancel</button>\r\n    </span>\r\n  </div>\r\n\r\n\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/product/product-home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/product/product-home.component.ts ***!
  \***************************************************/
/*! exports provided: ProductHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductHomeComponent", function() { return ProductHomeComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _restful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../restful.service */ "./src/app/restful.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductHomeComponent = /** @class */ (function () {
    function ProductHomeComponent(restService) {
        this.restService = restService;
        this.hideEditForm = true;
        this.url = _constants__WEBPACK_IMPORTED_MODULE_3__["BASEURL"] + 'Product';
        this.emptyEmployee = { id: null, name: '', type: '', phone: '', email: '', province: '', city: '', postalcode: '', address1: '' };
    } // constructor
    ProductHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msg = 'loading vendors from server...';
        this.restService.load(_constants__WEBPACK_IMPORTED_MODULE_3__["BASEURL"] + 'vendors').subscribe(function (payload) {
            _this.vendors = payload;
            _this.msg = 'vendors loaded';
        }, function (err) {
            _this.msg += 'Error occurred - vendors not loaded - ' + err.status + ' - ' + err.statusText;
        });
        this.msg = 'loading expenses from server...';
        // this.restService.load(this.url).subscribe(
        //   payload => {
        //     this.expenses = payload;
        //     console.log(this.expenses)
        //     this.msg = 'Vendors, Products loaded';
        //   },
        //   err => {this.msg += 'Error occurred - expenses not loaded - ' + err.status + ' - ' + err.statusText;
        //   });
        this.currentPage = 0;
        this.getPagedExpenses();
    };
    ProductHomeComponent.prototype.select = function (expense) {
        this.todo = 'update';
        this.selectedExpense = expense;
        this.msg = 'Expense ' + expense.id + ' selected';
        this.hideEditForm = !this.hideEditForm;
    }; // select
    /**
     * cancelled - event handler for cancel button
     */
    ProductHomeComponent.prototype.cancel = function (msg) {
        if (msg) {
            this.msg = 'Operation cancelled';
        }
        this.hideEditForm = !this.hideEditForm;
    }; // cancel
    /**
     * update - send changed update to service update local array
     */
    ProductHomeComponent.prototype.update = function (expense) {
        var _this = this;
        // expense.vendor = 1;
        this.msg = 'Updating...';
        this.restService.update(this.url, expense).subscribe(function (payload) {
            if (payload.id !== '') {
                _this.getPagedExpenses();
                // update local array using ? operator
                _this.expenses = _this.expenses.map(function (exp) { return exp.id === expense.id ? Object.assign({}, exp, payload) : exp; });
                _this.msg = 'Expense ' + expense.id + ' updated!';
            }
            else {
                _this.msg = 'Expense not updated! - Server problem';
            }
        }, function (err) {
            _this.msg = 'Error - expense not updated - ' + err.status + ' - ' + err.statusText;
        });
        this.hideEditForm = !this.hideEditForm;
    }; // update
    /**
     * save - determine whether we're doing and add or an update
     */
    ProductHomeComponent.prototype.save = function (product) {
        if (product.Add) {
            this.add(product);
        }
        else {
            this.update(product);
        }
    }; // save
    /**
     * add - send expense to service, receive newid back
     */
    ProductHomeComponent.prototype.add = function (expense) {
        var _this = this;
        this.msg = 'Adding...';
        this.restService.add(this.url, expense).subscribe(function (payload) {
            if (payload.id !== '') { // server returns new id
                _this.getPagedExpenses();
                _this.expenses = _this.expenses.concat([payload]); // add expense to current array using spread
                expense.id = payload.id;
                _this.msg = 'Expense ' + expense.id + ' added!';
            }
            else {
                _this.msg = 'Expense not added! - server error';
            }
        }, function (err) {
            _this.msg = 'Error - expense not added - ' + err.status + ' - ' + err.statusText;
        });
        this.hideEditForm = !this.hideEditForm;
    }; // add
    /**
     * newExpense - create new expense instance
     */
    ProductHomeComponent.prototype.newExpense = function () {
        this.selectedExpense = { id: null, vendor: null, name: '',
            costprice: null, msrp: null, rop: null, qoh: null, qoo: null, eop: null, qrcode: null, qrcodetxt: null, Add: false };
        this.msg = 'New Product';
        this.hideEditForm = !this.hideEditForm;
    }; // newExpense
    /**
     * delete - send expense id to service for deletion and remove from local collection
     */
    ProductHomeComponent.prototype.delete = function (expense) {
        var _this = this;
        this.msg = 'Deleting...';
        this.restService.delete(this.url, expense.id).subscribe(function (payload) {
            if (payload === 1) { // server returns # rows deleted
                _this.getPagedExpenses();
                _this.msg = 'Expense ' + expense.id + ' deleted!';
                _this.expenses = _this.expenses.filter(function (exp) { return exp.id !== expense.id; });
            }
            else {
                _this.msg = 'Expense not deleted! - server error';
            }
        }, function (err) {
            _this.msg = 'Error - vendors not deleted - ' + err.status + ' - ' + err.statusText;
        });
        this.hideEditForm = !this.hideEditForm;
    }; // delete
    ProductHomeComponent.prototype.changePage = function ($pageEvent) {
        this.currentPage = $pageEvent.pageIndex;
        this.getPagedExpenses();
    }; // changePage
    ProductHomeComponent.prototype.getPagedExpenses = function () {
        var _this = this;
        this.restService.load(_constants__WEBPACK_IMPORTED_MODULE_3__["BASEURL"] + "pagedexpenses?&p=" + this.currentPage + "&s=5").subscribe(function (payload) {
            _this.expenses = payload.content;
            _this.msg = "page " + (payload.number + 1) + " of products loaded";
            if (_this.totalElements !== payload.totalElements) {
                // reset paginator
                _this.paginator.firstPage();
                _this.totalElements = payload.totalElements;
            }
        }, function (err) {
            _this.msg += 'Error occurred - products not loaded - ' + err.status + ' - ' + err.statusText;
        });
    }; // getPageExpenses
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"])
    ], ProductHomeComponent.prototype, "paginator", void 0);
    ProductHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expense',
            template: __webpack_require__(/*! ./product-home.html */ "./src/app/product/product-home.html")
        }),
        __metadata("design:paramtypes", [_restful_service__WEBPACK_IMPORTED_MODULE_2__["RestfulService"]])
    ], ProductHomeComponent);
    return ProductHomeComponent;
}()); // ExpenseHomeComponent



/***/ }),

/***/ "./src/app/product/product-home.html":
/*!*******************************************!*\
  !*** ./src/app/product/product-home.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\">\r\n  <span>Products</span>\r\n</mat-toolbar>\r\n\r\n<img class=\"logo\" src=\"assets/img/logo.png\" style=\"width: 40px; height: auto; margin-left: 47%\">\r\n\r\n<mat-card *ngIf=\"hideEditForm\">\r\n  <mat-card-header class=\"bgc-grey-00\" layout=\"row\">\r\n    <mat-card-title style=\"margin-bottom: 70px;\">\r\n      <span class=\"mat-headline bgc-yellow-A200\">{{ msg }}</span>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <mat-list>\r\n      <app-expense-table [expenses]=\"expenses\" (selected)=\"select($event)\"\r\n                         (newed)=\"newExpense($event)\">\r\n      </app-expense-table>\r\n    </mat-list>\r\n  </mat-card-content>\r\n</mat-card>\r\n<mat-card *ngIf=\"!hideEditForm\">\r\n  <mat-card-header class=\"bgc-grey-00\" layout=\"row\">\r\n    <mat-card-title>\r\n      <span class=\"mat-headline bgc-yellow-A200\">{{ msg }}</span>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <mat-list flex>\r\n      <app-expense-detail [expense]=\"selectedExpense\"\r\n                          [vendors]=\"vendors\"\r\n                          [products]=\"expenses\"\r\n                          (cancelled)=\"cancel('cancelled')\"\r\n                          (saved)=\"save($event)\"\r\n                          (deleted)=\"delete($event)\">\r\n      </app-expense-detail>\r\n    </mat-list>\r\n  </mat-card-content>\r\n</mat-card>\r\n<mat-paginator #paginator\r\n               [length]=\"totalElements\"\r\n               [pageSize]=\"5\"\r\n               (page)=\"changePage($event)\">\r\n</mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/product/product-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/product/product-table.component.ts ***!
  \****************************************************/
/*! exports provided: ProductTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTableComponent", function() { return ProductTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductTableComponent = /** @class */ (function () {
    function ProductTableComponent() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sortOrder = true;
        this.sortedColumn = 'id';
    } // constructor
    /**
     * sortExpenses - sort based on column clicked, toggle between ascending/descending
     * return negative 1 if the first item is smaller;
     * positive 1 if it it's larger
     */
    ProductTableComponent.prototype.sortExpenses = function (col) {
        this.sortedColumn = col;
        this.sortOrder = !this.sortOrder;
        this.sortedExpenses = this.expenses.slice(0);
        if (this.sortOrder) { // ascending
            this.sortedExpenses.sort(function (left, right) {
                return (left[col] < right[col]) ? -1 : 1;
            });
        }
        else { // descending
            this.sortedExpenses.sort(function (left, right) {
                return (left[col] > right[col]) ? -1 : 1;
            });
        }
        this.expenses = this.sortedExpenses;
    }; // sortExpenses
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProductTableComponent.prototype, "expenses", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductTableComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductTableComponent.prototype, "newed", void 0);
    ProductTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expense-table',
            template: __webpack_require__(/*! ./product-table.html */ "./src/app/product/product-table.html")
        }),
        __metadata("design:paramtypes", [])
    ], ProductTableComponent);
    return ProductTableComponent;
}()); // ExpenseTableComponent



/***/ }),

/***/ "./src/app/product/product-table.html":
/*!********************************************!*\
  !*** ./src/app/product/product-table.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table td-data-table style=\"top:-75px;position:relative;\">\r\n  <tr td-data-table-row>\r\n    <th td-data-table-column (click)=\"sortExpenses('id')\">\r\n      <span class=\"pad-left-sm\">ID</span>\r\n      <mat-icon *ngIf=\"!sortOrder && sortedColumn === 'id';\">arrow_drop_down</mat-icon>\r\n      <mat-icon *ngIf=\"sortOrder && sortedColumn === 'id';\">arrow_drop_up</mat-icon>\r\n      <mat-icon *ngIf=\"sortedColumn !== 'id';\"></mat-icon>\r\n    </th>\r\n    <th td-data-table-column (click)=\"sortExpenses('name')\">\r\n      Product Name\r\n      <mat-icon *ngIf=\"!sortOrder && sortedColumn === 'name';\">arrow_drop_down</mat-icon>\r\n      <mat-icon *ngIf=\"sortOrder && sortedColumn === 'name';\">arrow_drop_up</mat-icon>\r\n      <mat-icon *ngIf=\"sortedColumn !== 'name';\"></mat-icon>\r\n    </th>\r\n    <th td-data-table-column (click)=\"sortExpenses('vendor')\">\r\n      Vendor\r\n      <mat-icon *ngIf=\"!sortOrder && sortedColumn === 'vendor';\">arrow_drop_down</mat-icon>\r\n      <mat-icon *ngIf=\"sortOrder && sortedColumn === 'vendor';\">arrow_drop_up</mat-icon>\r\n      <mat-icon *ngIf=\"sortedColumn !== 'vendor';\"></mat-icon>\r\n    </th>\r\n  </tr>\r\n  <tr td-data-table-row *ngFor=\"let expense of expenses\" (click)=\"selected.emit(expense)\">\r\n    <td td-data-table-cell class=\"pad-none\">\r\n      {{expense.id}}\r\n    </td>\r\n    <td td-data-table-cell>\r\n      {{expense.name}}\r\n    </td>\r\n    <td td-data-table-cell>\r\n      {{expense.vendor}}\r\n    </td>\r\n  </tr>\r\n</table>\r\n<div class=\"pad-sm\">\r\n  <mat-icon (click)=\"newed.emit()\" matTooltip=\"Add New Expense\" color=\"primary\" class=\"md-36\">\r\n    control_point\r\n  </mat-icon>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/esm5/covalent-core.js");
/* harmony import */ var _product_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-home.component */ "./src/app/product/product-home.component.ts");
/* harmony import */ var _product_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-table.component */ "./src/app/product/product-table.component.ts");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-detail.component */ "./src/app/product/product-detail.component.ts");
/* harmony import */ var _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @covalent/core/expansion-panel */ "./node_modules/@covalent/core/esm5/covalent-core-expansion-panel.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_8__["CovalentExpansionPanelModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_4__["CovalentDataTableModule"]],
            declarations: [_product_home_component__WEBPACK_IMPORTED_MODULE_5__["ProductHomeComponent"], _product_table_component__WEBPACK_IMPORTED_MODULE_6__["ProductTableComponent"], _product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/purchaseOrder/generator/purchase-order-generator.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/purchaseOrder/generator/purchase-order-generator.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PurchaseOrderGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderGeneratorComponent", function() { return PurchaseOrderGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _restful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../restful.service */ "./src/app/restful.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.././constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PurchaseOrderGeneratorComponent = /** @class */ (function () {
    function PurchaseOrderGeneratorComponent(builder, restService) {
        this.builder = builder;
        this.restService = restService;
        this.pickedEmployee = false;
        this.pickedExpense = false;
        this.generated = false;
        this.viewPdf = false;
        this.url = _constants__WEBPACK_IMPORTED_MODULE_3__["BASEURL"] + 'pos';
    } // constructor
    PurchaseOrderGeneratorComponent.prototype.onPickQty = function () {
        var _this = this;
        this.generatorForm.get('qty').valueChanges.subscribe(function (val) {
            // this.selectedExpense.eop = val;
            // this.selectedexpenses.forEach(exp => this.total += exp.msrp * exp.eop);
            var item = { id: 0, poid: 0, productid: _this.selectedExpense.id, price: _this.selectedExpense.costprice, productname: '', qty: val };
            if (_this.items.find(function (it) { return it.productid === _this.selectedExpense.id; })) {
                if (val === -1) {
                    _this.items.find(function (it) { return it.productid === _this.selectedExpense.id; }).qty = _this.selectedExpense.eop;
                }
                else {
                    _this.items.find(function (it) { return it.productid === _this.selectedExpense.id; }).qty = val;
                }
            }
            else { // add entry
                _this.items.push(item);
            }
            var tmpItems = _this.items.filter(function (it) { return it.qty > 0; });
            _this.items = tmpItems;
            if (_this.items.length === 0) {
                _this.msg = 'No item';
            }
            else {
                _this.msg = '';
            }
            _this.calculateSub();
        });
    };
    PurchaseOrderGeneratorComponent.prototype.onPickEmployee = function () {
        var _this = this;
        this.generatorForm.get('employeeid').valueChanges.subscribe(function (val) {
            if (val) {
                _this.selectedExpense = null;
                _this.selectedEmployee = val;
                _this.loadEmployeeExpenses();
                _this.pickedExpense = false;
                _this.hasExpenses = false;
                _this.msg = 'choose Product for Vendor';
                _this.pickedEmployee = true;
                _this.generated = false;
                _this.items = [];
                _this.selectedexpenses = [];
            }
        });
    };
    PurchaseOrderGeneratorComponent.prototype.onPickExpense = function () {
        var _this = this;
        this.generatorForm.get('expenseid').valueChanges.subscribe(function (val) {
            _this.selectedExpense = val;
            var item = { id: 0, poid: 0, productid: _this.selectedExpense.id, price: _this.selectedExpense.costprice, productname: '', qty: _this.selectedExpense.eop };
            if (_this.items.find(function (it) { return it.productid === _this.selectedExpense.id; })) { // ignore entry
            }
            else { // add entry
                _this.items.push(item);
                _this.selectedexpenses.push(_this.selectedExpense);
            }
            if (_this.items.length > 0) {
                _this.hasExpenses = true;
            }
            _this.calculateSub();
            _this.generatorForm.controls['qty'].reset();
            _this.msg = 'choose EOQ';
        });
    };
    PurchaseOrderGeneratorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msg = '';
        this.employeeid = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.expenseid = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.qty = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.generatorForm = this.builder.group({
            expenseid: this.expenseid,
            employeeid: this.employeeid,
            qty: this.qty
        });
        this.onPickEmployee();
        this.onPickExpense();
        this.onPickQty();
        this.msg = 'loading vendor from server...';
        this.restService.load(_constants__WEBPACK_IMPORTED_MODULE_3__["BASEURL"] + 'vendors').subscribe(function (vendorPayload) {
            _this.employees = vendorPayload;
            _this.msg = 'vendors loaded';
            _this.msg = 'loading product from server...';
            _this.restService.load(_constants__WEBPACK_IMPORTED_MODULE_3__["BASEURL"] + 'Product').subscribe(function (expensePayload) {
                _this.expenses = expensePayload;
                _this.msg = 'server data loaded';
            }, function (err) {
                _this.msg += 'Error occurred - proucts not loaded - ' + err.status + ' - ' + err.statusText;
            });
        }, function (err) {
            _this.msg += 'Error occurred - vendor not loaded - ' + err.status + ' - ' + err.statusText;
        });
    }; // ngOnInit
    PurchaseOrderGeneratorComponent.prototype.loadEmployeeExpenses = function () {
        var _this = this;
        this.employeeexpenses = [];
        this.employeeexpenses = this.expenses.filter(function (ex) { return ex.vendor === _this.selectedEmployee.id; }); // filter expenses for single employee
    };
    PurchaseOrderGeneratorComponent.prototype.createReport = function () {
        var _this = this;
        this.generated = false;
        var report = { id: 0, items: this.items, vendorid: this.selectedExpense.vendor, total: this.total, podate: null };
        this.restService.add(this.url, report).subscribe(function (reportId) {
            if (reportId > 0) { // server returns new report#
                _this.msg = 'PO ' + reportId + ' created!';
                _this.generated = true;
                _this.reportno = reportId;
            }
            else {
                _this.msg = 'PO not created! - server error';
            }
            _this.hasExpenses = false;
            _this.pickedEmployee = false;
            _this.pickedExpense = false;
            _this.selectedEmployee = null;
            _this.selectedExpense = null;
            _this.generatorForm.controls['employeeid'].reset();
            _this.selectedexpenses = [];
        }, function (err) {
            _this.msg = 'Error occurred - PO not created - ' + err.status + ' - ' + err.statusText;
        });
    }; // createReport
    /**
     * viewPdf - determine report number and pass to server
     * for PDF generation in a new window
     */
    PurchaseOrderGeneratorComponent.prototype.viewPdfOnClick = function () {
        window.open(_constants__WEBPACK_IMPORTED_MODULE_3__["PDFURL"] + this.reportno, '');
    }; // viewPdf
    PurchaseOrderGeneratorComponent.prototype.calculateSub = function () {
        var _this = this;
        this.total = 0;
        this.items.forEach(function (item) {
            _this.total += item.qty * item.price;
        });
    };
    PurchaseOrderGeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./purchase-order-generator.html */ "./src/app/purchaseOrder/generator/purchase-order-generator.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _restful_service__WEBPACK_IMPORTED_MODULE_2__["RestfulService"]])
    ], PurchaseOrderGeneratorComponent);
    return PurchaseOrderGeneratorComponent;
}()); // ReportGeneratorComponent



/***/ }),

/***/ "./src/app/purchaseOrder/generator/purchase-order-generator.html":
/*!***********************************************************************!*\
  !*** ./src/app/purchaseOrder/generator/purchase-order-generator.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\">\r\n  <span>Generator</span>\r\n</mat-toolbar>\r\n<img class=\"logo\" src=\"assets/img/logo.png\" style=\"width: 40px; height: auto; margin-left: 47%\">\r\n<mat-card>\r\n  <mat-card-header class=\"bgc-grey-00\" layout=\"row\">\r\n    <mat-card-title>\r\n      <span class=\"md-title bgc-yellow-A200\">{{ msg }}</span>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <form [formGroup]=\"generatorForm\" novalidate>\r\n      <div layout=\"row\" class=\"pad-left-sm pad-bottom-sm\">\r\n        <mat-form-field flex>\r\n          <mat-select  placeholder=\"Choose Vendor\" formControlName=\"employeeid\">\r\n            <mat-option *ngFor=\"let employee of employees\" [value]=\"employee\">{{employee.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div *ngIf=\"pickedEmployee\" layout=\"row\" class=\"pad-left-sm pad-bottom-sm\">\r\n        <mat-form-field flex>\r\n          <mat-select placeholder=\"Choose Product\" formControlName=\"expenseid\" (change)=\"onPickExpense()\">\r\n            <mat-option *ngFor=\"let expense of employeeexpenses\" [value]=\"expense\">{{expense.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div *ngIf=\"selectedExpense\" layout=\"row\" class=\"pad-left-sm pad-bottom-sm\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"EOQ\" formControlName=\"qty\" value=\"qty\" (change)=\"onPickQty()\">\r\n            <mat-option [value]=\"-1\" selected>EOQ</mat-option>\r\n            <mat-option [value]=\"0\">0</mat-option>\r\n            <mat-option [value]=\"1\">1</mat-option>\r\n            <mat-option [value]=\"2\">2</mat-option>\r\n            <mat-option [value]=\"3\">3</mat-option>\r\n            <mat-option [value]=\"4\">4</mat-option>\r\n            <mat-option [value]=\"5\">5</mat-option>\r\n            <mat-option [value]=\"6\">6</mat-option>\r\n            <mat-option [value]=\"7\">7</mat-option>\r\n\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <br/>\r\n      <div *ngIf=\"hasExpenses && items.length >0\" class=\"row\">\r\n        <table style=\"top:-30px;position:relative;\">\r\n          <tr>\r\n            <th colspan=\"3\" class=\"pad-xs text-center md-subhead\" style=\"font-weight:bold;\">\r\n              Selected products from {{selectedEmployee.name}}\r\n            </th>\r\n          </tr>\r\n          <tr td-data-table-row style=\"font-weight:bold;\">\r\n            <td style=\"text-align: center;width:20%;\">Product</td>\r\n            <td style=\"text-align: center;width:60%;\">Qty</td>\r\n            <td style=\"text-align: center;width:20%;\">Extend</td>\r\n          </tr>\r\n          <tr td-data-table-row *ngFor=\"let item of items\">\r\n            <td class=\"text-left\">{{item.productid }}</td>\r\n            <td width=\"700\" class=\"text-left\">{{item.qty}}</td>\r\n            <td class=\"text-right\">{{item.price * item.qty | currency:'USD':'symbol':'1.2-2'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\" class=\"text-center\">Sub:</td>\r\n            <td class=\"text-right\" style=\"font-weight: 600;color:#673AB7;\">{{total | currency:'USD':'symbol':'1.2-2'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\" class=\"text-center\">Tax:</td>\r\n            <td class=\"text-right\" style=\"font-weight: 600;color:#673AB7;\">{{total * 0.13 | currency:'USD':'symbol':'1.2-2'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\" class=\"text-center\">Total:</td>\r\n            <td class=\"text-right\" style=\"font-weight: 600;color:#673AB7;\">{{total * 1.13 | currency:'USD':'symbol':'1.2-2'}}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <div class=\"pad-sm text-center\" *ngIf=\"hasExpenses\">\r\n        <button mat-raised-button (click)=\"createReport($event)\">Add OP</button>\r\n      </div>\r\n      <div class=\"pad-sm text-center\" *ngIf=\"generated\">\r\n        <button mat-raised-button (click)=\"viewPdfOnClick()\">ViewPDF</button>\r\n      </div>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/purchaseOrder/purchaseOrder.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/purchaseOrder/purchaseOrder.module.ts ***!
  \*******************************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/esm5/covalent-core.js");
/* harmony import */ var _generator_purchase_order_generator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generator/purchase-order-generator.component */ "./src/app/purchaseOrder/generator/purchase-order-generator.component.ts");
/* harmony import */ var _viewer_purchase_order_viewer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewer/purchase-order-viewer.component */ "./src/app/purchaseOrder/viewer/purchase-order-viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // model driven forms





var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_4__["CovalentDataTableModule"]],
            declarations: [_generator_purchase_order_generator_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseOrderGeneratorComponent"], _viewer_purchase_order_viewer_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderViewerComponent"]],
            exports: [_generator_purchase_order_generator_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseOrderGeneratorComponent"], _viewer_purchase_order_viewer_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderViewerComponent"]]
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "./src/app/purchaseOrder/viewer/purchase-order-viewer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/purchaseOrder/viewer/purchase-order-viewer.component.ts ***!
  \*************************************************************************/
/*! exports provided: PurchaseOrderViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderViewerComponent", function() { return PurchaseOrderViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _restful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../restful.service */ "./src/app/restful.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.././constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PurchaseOrderViewerComponent = /** @class */ (function () {
    function PurchaseOrderViewerComponent(builder, restService) {
        this.builder = builder;
        this.restService = restService;
        this.url = _constants__WEBPACK_IMPORTED_MODULE_3__["BASEURL"] + 'pos';
    } // constructor
    PurchaseOrderViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vendorid = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.poid = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.generatorForm = this.builder.group({
            vendorid: this.vendorid,
            poid: this.poid
        });
        this.onPickVendor();
        this.onPickPo();
        this.restService.load(_constants__WEBPACK_IMPORTED_MODULE_3__["BASEURL"] + 'vendors').subscribe(function (employeePayload) {
            _this.vendors = employeePayload;
            _this.msg = 'vendor loaded';
            _this.restService.load(_constants__WEBPACK_IMPORTED_MODULE_3__["BASEURL"] + 'Product').subscribe(function (expensePayload) {
                _this.pos = expensePayload;
                _this.msg = 'vendor loaded';
            }, function (err) {
                _this.msg += 'Error occurred - expenses not loaded - ' + err.status + ' - ' +
                    err.statusText;
            });
        }, function (err) {
            _this.msg += 'Error occurred - employees not loaded - ' + err.status + ' - ' +
                err.statusText;
        });
    }; // ngOnInit
    PurchaseOrderViewerComponent.prototype.onPickVendor = function () {
        var _this = this;
        this.generatorForm.get('vendorid').valueChanges.subscribe(function (val) {
            if (val) {
                _this.selectedVendor = val;
                _this.restService.load(_constants__WEBPACK_IMPORTED_MODULE_3__["BASEURL"] + 'pos/' + _this.selectedVendor.id).subscribe(function (expensePayload) {
                    _this.pos = expensePayload;
                    _this.msg = 'pos loaded for - ' + _this.selectedVendor.name;
                }, function (err) {
                    _this.msg += 'Error occurred - expenses not loaded - ' + err.status + ' - ' +
                        err.statusText;
                });
            }
        });
    };
    PurchaseOrderViewerComponent.prototype.onPickPo = function () {
        var _this = this;
        this.generatorForm.get('poid').valueChanges.subscribe(function (val) {
            if (val) {
                _this.selectedPo = val;
            }
        });
    };
    PurchaseOrderViewerComponent.prototype.viewPdfOnClick = function () {
        window.open(_constants__WEBPACK_IMPORTED_MODULE_3__["PDFURL"] + this.selectedPo.id, '');
    }; // viewPdf
    PurchaseOrderViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./purchase-order-viewer.html */ "./src/app/purchaseOrder/viewer/purchase-order-viewer.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _restful_service__WEBPACK_IMPORTED_MODULE_2__["RestfulService"]])
    ], PurchaseOrderViewerComponent);
    return PurchaseOrderViewerComponent;
}()); // ReportGeneratorComponent



/***/ }),

/***/ "./src/app/purchaseOrder/viewer/purchase-order-viewer.html":
/*!*****************************************************************!*\
  !*** ./src/app/purchaseOrder/viewer/purchase-order-viewer.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\">\r\n  <span>Viewer</span>\r\n</mat-toolbar>\r\n\r\n<img class=\"logo\" src=\"assets/img/logo.png\" style=\"width: 40px; height: auto; margin-left: 47%\">\r\n\r\n<mat-card>\r\n  <mat-card-header class=\"bgc-grey-00\" layout=\"row\">\r\n    <mat-card-title>\r\n      <span class=\"md-title bgc-yellow-A200\">{{ msg }}</span>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <form [formGroup]=\"generatorForm\" novalidate>\r\n      <div layout=\"row\" class=\"pad-left-sm pad-bottom-sm\">\r\n        <mat-form-field flex>\r\n          <mat-select  placeholder=\"Choose Vendor\" formControlName=\"vendorid\">\r\n            <mat-option *ngFor=\"let vendor of vendors\" [value]=\"vendor\">{{vendor.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div *ngIf=\"selectedVendor\" layout=\"row\" class=\"pad-left-sm pad-bottom-sm\">\r\n        <mat-form-field flex>\r\n          <mat-select placeholder=\"Choose PurchaseOrder\" formControlName=\"poid\" >\r\n            <mat-option *ngFor=\"let po of pos; index as i\" [value]=\"po\">{{i+1 + ' - ' + (po.podate| date:'yyyy-MM-dd HH:mm a')}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div *ngIf=\"selectedPo\" class=\"row\">\r\n        <br/>\r\n        <table style=\"top:-30px;position:relative;\">\r\n          <tr>\r\n            <th colspan=\"3\" class=\"pad-xs text-center md-subhead\" style=\"font-weight:bold;\">\r\n              {{'PO: ' + selectedPo.id}}\r\n              {{\"                  Date: \" + (selectedPo.podate | date:'yyyy-MM-dd HH:mm a')}}\r\n            </th>\r\n          </tr>\r\n          <tr td-data-table-row style=\"font-weight:bold;\">\r\n            <td style=\"text-align: center;width:30%;\">Product</td>\r\n            <td style=\"text-align: center;width:20%;\">Qty</td>\r\n            <td style=\"text-align: center;width:25%;\">Price</td>\r\n            <td style=\"text-align: center;width:25%;\">Extend</td>\r\n          </tr>\r\n          <tr td-data-table-row *ngFor=\"let item of selectedPo.items\">\r\n            <td class=\"text-left\">{{item.productname }}</td>\r\n            <td width=\"700\" class=\"text-left\">{{item.qty }}</td>\r\n            <td class=\"text-right\">{{item.price | currency:'USD':'symbol':'1.2-2'}}</td>\r\n            <td class=\"text-right\">{{item.price * item.qty | currency:'USD':'symbol':'1.2-2'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"text-center\"></td>\r\n            <td colspan=\"2\" class=\"text-center\">Sub:</td>\r\n            <td class=\"text-right\" style=\"font-weight: 600;color:#673AB7;\">{{selectedPo.total | currency:'USD':'symbol':'1.2-2'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"text-center\"></td>\r\n            <td colspan=\"2\" class=\"text-center\">Tax:</td>\r\n            <td class=\"text-right\" style=\"font-weight: 600;color:#673AB7;\">{{selectedPo.total * 0.13 | currency:'USD':'symbol':'1.2-2'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"text-center\"></td>\r\n            <td colspan=\"2\" class=\"text-center\">Total:</td>\r\n            <td class=\"text-right\" style=\"font-weight: 600;color:#673AB7;\">{{selectedPo.total * 1.13 | currency:'USD':'symbol':'1.2-2'}}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"pad-sm text-center\" *ngIf=\"selectedPo\">\r\n        <button mat-raised-button (click)=\"viewPdfOnClick()\">ViewPDF</button>\r\n      </div>\r\n\r\n    </form>\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/restful.service.ts":
/*!************************************!*\
  !*** ./src/app/restful.service.ts ***!
  \************************************/
/*! exports provided: RestfulService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestfulService", function() { return RestfulService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestfulService = /** @class */ (function () {
    function RestfulService(http) {
        this.http = http;
    } // constructor
    /**
     * Retrieves the json, pass back to a subscriber
     */
    RestfulService.prototype.load = function (url) {
        var headers = this.buildHeader();
        return this.http.get(url, { headers: headers });
    }; // load
    /**
     * update an entity on the server using http put return number of entities updated
     */
    RestfulService.prototype.update = function (url, entity) {
        var headers = this.buildHeader();
        return this.http.put(url, entity, { headers: headers });
    }; // update
    /**
     * send an entity on the server using http post, return id (could be string)
     */
    RestfulService.prototype.add = function (url, entity) {
        var headers = this.buildHeader();
        return this.http.post(url, entity, { headers: headers });
    }; // add
    /**
     * delete an entity using http delete, return number of entities deleted
     */
    RestfulService.prototype.delete = function (url, id) {
        var headers = this.buildHeader();
        return this.http.delete(url + '/' + id, { headers: headers });
    }; // delete
    RestfulService.prototype.buildHeader = function () {
        if (sessionStorage.getItem('token')) {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'X-Requested-With': 'XMLHttpRequest', Authorization: 'Basic ' +
                    btoa(sessionStorage.getItem('token')), });
        }
    };
    RestfulService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            // we declare that this service should be created
            // by the root application injector. new with v6
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestfulService);
    return RestfulService;
}()); // RestfulService



/***/ }),

/***/ "./src/app/validators/PostCode.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/validators/PostCode.validator.ts ***!
  \**************************************************/
/*! exports provided: ValidatePostCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatePostCode", function() { return ValidatePostCode; });
function ValidatePostCode(control) {
    var PHONE_REGEXP = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    return !PHONE_REGEXP.test(control.value) ? { invalidPostCode: true } : null;
} // ValidatePhone


/***/ }),

/***/ "./src/app/validators/email.validator.ts":
/*!***********************************************!*\
  !*** ./src/app/validators/email.validator.ts ***!
  \***********************************************/
/*! exports provided: ValidateEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateEmail", function() { return ValidateEmail; });
function ValidateEmail(control) {
    var PHONE_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    return !PHONE_REGEXP.test(control.value) ? { invalidEmail: true } : null;
} // ValidatePhone


/***/ }),

/***/ "./src/app/validators/phoneno.validator.ts":
/*!*************************************************!*\
  !*** ./src/app/validators/phoneno.validator.ts ***!
  \*************************************************/
/*! exports provided: ValidatePhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatePhone", function() { return ValidatePhone; });
function ValidatePhone(control) {
    var PHONE_REGEXP = /^[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;
    return !PHONE_REGEXP.test(control.value) ? { invalidPhone: true } : null;
} // ValidatePhone


/***/ }),

/***/ "./src/app/vendor/vendor-detail.component.ts":
/*!***************************************************!*\
  !*** ./src/app/vendor/vendor-detail.component.ts ***!
  \***************************************************/
/*! exports provided: EmployeeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailComponent", function() { return EmployeeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_phoneno_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validators/phoneno.validator */ "./src/app/validators/phoneno.validator.ts");
/* harmony import */ var _validators_email_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validators/email.validator */ "./src/app/validators/email.validator.ts");
/* harmony import */ var _validators_PostCode_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validators/PostCode.validator */ "./src/app/validators/PostCode.validator.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _deletedialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../deletedialog/delete-dialog.component */ "./src/app/deletedialog/delete-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmployeeDetailComponent = /** @class */ (function () {
    function EmployeeDetailComponent(builder, dialog) {
        this.builder = builder;
        this.dialog = dialog;
        this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.address1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.province = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.postalcode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_PostCode_validator__WEBPACK_IMPORTED_MODULE_4__["ValidatePostCode"]]));
        this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_phoneno_validator__WEBPACK_IMPORTED_MODULE_2__["ValidatePhone"]]));
        this.type = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_email_validator__WEBPACK_IMPORTED_MODULE_3__["ValidateEmail"]]));
    } // constructor
    Object.defineProperty(EmployeeDetailComponent.prototype, "_employee", {
        // setter is used to assign selected employee after click
        set: function (value) {
            if (value) {
                this.originalName = value.name;
            }
            this.selectedEmployee = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        this.employeeForm = this.builder.group({
            name: this.name,
            address1: this.address1,
            city: this.city,
            province: this.province,
            postalcode: this.postalcode,
            phone: this.phone,
            type: this.type,
            email: this.email
        });
        // patchValue doesn’t care if all values present
        this.employeeForm.patchValue({
            name: this.selectedEmployee.name,
            address1: this.selectedEmployee.address1,
            city: this.selectedEmployee.city,
            province: this.selectedEmployee.province,
            postalcode: this.selectedEmployee.postalcode,
            phone: this.selectedEmployee.phone,
            type: this.selectedEmployee.type,
            email: this.selectedEmployee.email
        });
    }; // ngOnInit
    EmployeeDetailComponent.prototype.updateSelectedEmployee = function () {
        var frmJson = this.employeeForm.getRawValue();
        this.selectedEmployee.name = frmJson.name;
        this.selectedEmployee.address1 = frmJson.address1;
        this.selectedEmployee.city = frmJson.city;
        this.selectedEmployee.province = frmJson.province;
        this.selectedEmployee.postalcode = frmJson.postalcode;
        this.selectedEmployee.phone = frmJson.phone;
        this.selectedEmployee.type = frmJson.type;
        this.selectedEmployee.email = frmJson.email;
        this.saved.emit(this.selectedEmployee);
    };
    EmployeeDetailComponent.prototype.openDeleteModal = function (selectedEmployee) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Delete " + this.selectedEmployee.name,
            entityname: 'vendor'
        };
        dialogConfig.panelClass = 'custommodal';
        var dialogRef = this.dialog.open(_deletedialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleted.emit(_this.selectedEmployee);
            }
        });
    }; // openDeleteModal
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('employee'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EmployeeDetailComponent.prototype, "_employee", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmployeeDetailComponent.prototype, "cancelled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmployeeDetailComponent.prototype, "saved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmployeeDetailComponent.prototype, "deleted", void 0);
    EmployeeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vendor-detail',
            template: __webpack_require__(/*! ./vendor-detail.html */ "./src/app/vendor/vendor-detail.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}()); // EmployeeDetailComponent



/***/ }),

/***/ "./src/app/vendor/vendor-detail.html":
/*!*******************************************!*\
  !*** ./src/app/vendor/vendor-detail.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"employeeForm\">\r\n\r\n  <div layout=\"row\" >\r\n    <mat-form-field flex>\r\n      <input matInput id = \"name\" placeholder=\"name\" type=\"text\" maxlength=\"30\" required formControlName=\"name\">\r\n      <mat-hint *ngIf=\"name.errors && (name.dirty || name.touched)\" align=\"end\" [ngStyle]=\"{'color': 'red'}\"> name is required </mat-hint>\r\n    </mat-form-field>\r\n  </div>\r\n  <div layout=\"row\">\r\n    <mat-form-field flex>\r\n      <input matInput id = \"address1\" placeholder=\"address1\" type=\"text\" required formControlName=\"address1\">\r\n      <mat-hint *ngIf=\"address1.errors && (address1.dirty || address1.touched)\" align=\"end\" [ngStyle]=\"{'color': 'red'}\"> address1 is required </mat-hint>\r\n    </mat-form-field>\r\n  </div>\r\n  <div layout=\"row\">\r\n    <mat-form-field flex>\r\n      <input matInput id = \"city\" placeholder=\"city\" type=\"text\" required formControlName=\"city\">\r\n      <mat-hint *ngIf=\"city.errors && (city.dirty || city.touched)\" align=\"end\" [ngStyle]=\"{'color': 'red'}\"> city is required </mat-hint>\r\n\r\n    </mat-form-field>\r\n  </div>\r\n  <div layout=\"row\">\r\n    <mat-form-field flex>\r\n      <mat-select id = \"province\" placeholder=\"Province\" formControlName=\"province\" value=\"province\">\r\n        <mat-option [value]=\"\" disabled selected>Province</mat-option>\r\n        <mat-option [value]=\"'NL'\">NL</mat-option>\r\n        <mat-option [value]=\"'PE'\">PE</mat-option>\r\n        <mat-option [value]=\"'NS'\">NS</mat-option>\r\n        <mat-option [value]=\"'NB'\">NB</mat-option>\r\n        <mat-option [value]=\"'QC'\">QC</mat-option>\r\n        <mat-option [value]=\"'ON'\">ON</mat-option>\r\n        <mat-option [value]=\"'MB'\">MB</mat-option>\r\n        <mat-option [value]=\"'SK'\">SK</mat-option>\r\n        <mat-option [value]=\"'AB'\">AB</mat-option>\r\n        <mat-option [value]=\"'BC'\">BC</mat-option>\r\n        <mat-option [value]=\"'YT'\">YT</mat-option>\r\n        <mat-option [value]=\"'NT'\">NT</mat-option>\r\n        <mat-option [value]=\"'NU'\">NU</mat-option>\r\n      </mat-select>\r\n      <!--<input matInput placeholder=\"province\" type=\"text\" required formControlName=\"province\">-->\r\n      <mat-hint *ngIf=\"province.errors && (province.dirty || province.touched)\" align=\"end\" [ngStyle]=\"{'color': 'red'}\"> province is required </mat-hint>\r\n\r\n    </mat-form-field>\r\n  </div>\r\n  <div layout=\"row\">\r\n    <mat-form-field flex>\r\n      <input matInput id = \"postalcode\"  placeholder=\"postalcode\" type=\"email\" required formControlName=\"postalcode\">\r\n      <mat-hint *ngIf=\"postalcode.errors && (postalcode.dirty || postalcode.touched)\" align=\"end\" [ngStyle]=\"{'color': 'red'}\">\r\n        <p *ngIf=\"postalcode.hasError('required')\">Post Code is required.</p>\r\n        <p *ngIf=\"!postalcode.hasError('required') && postalcode.hasError('invalidPostCode')\">valid format required - ### ###   <br/></p>\r\n      </mat-hint>\r\n    </mat-form-field>\r\n  </div>\r\n  <div layout=\"row\">\r\n    <mat-form-field flex>\r\n      <input matInput id = \"phone\" placeholder=\"phone\" type=\"email\" required formControlName=\"phone\">\r\n      <mat-hint *ngIf=\"phone.errors && (phone.dirty || phone.touched)\" align=\"end\" [ngStyle]=\"{'color': 'red'}\">\r\n        <p *ngIf=\"phone.hasError('required')\">Phone# is required.</p>\r\n        <p *ngIf=\"!phone.hasError('required') && phone.hasError('invalidPhone')\">valid format required - (###)###-####   <br/></p>\r\n      </mat-hint>\r\n    </mat-form-field>\r\n  </div>\r\n  <div layout=\"row\">\r\n    <mat-form-field flex>\r\n      <input matInput id = \"type\" placeholder=\"type\" type=\"email\" required formControlName=\"type\">\r\n      <mat-hint *ngIf=\"type.errors && (type.dirty || type.touched)\" align=\"end\" [ngStyle]=\"{'color': 'red'}\"> type is required </mat-hint>\r\n    </mat-form-field>\r\n  </div>\r\n  <div layout=\"row\">\r\n    <mat-form-field flex>\r\n      <input matInput id = \"email\" placeholder=\"email\" type=\"email\" required formControlName=\"email\">\r\n      <mat-hint *ngIf=\"email.errors && (email.dirty || email.touched)\" align=\"end\" [ngStyle]=\"{'color': 'red'}\">\r\n        <p *ngIf=\"email.hasError('required')\">Email# is required.</p>\r\n        <p *ngIf=\"!email.hasError('required') && email.hasError('invalidEmail')\">valid format required - xx@xx.xx  <br/></p>\r\n      </mat-hint>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <br/>\r\n\r\n  <div class=\"mat-pad-sm\">\r\n    <span>\r\n      <button mat-raised-button id = \"save\" type=\"button\" (click)=\"updateSelectedEmployee()\" [disabled]=!employeeForm.valid> Save</button>\r\n    </span>\r\n    <button id = \"delete\" *ngIf=\"selectedEmployee.id\" mat-raised-button type=\"button\"\r\n            (click)=\"openDeleteModal(selectedEmployee)\">Delete</button>\r\n    <span>\r\n      <button mat-raised-button type=\"button\" (click)=\"cancelled.emit(selectedEmployee)\">Cancel</button>\r\n    </span>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/vendor/vendor-home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/vendor/vendor-home.component.ts ***!
  \*************************************************/
/*! exports provided: VendorHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorHomeComponent", function() { return VendorHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
/* harmony import */ var _restful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../restful.service */ "./src/app/restful.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { VendorService } from './vendor.service';


var VendorHomeComponent = /** @class */ (function () {
    function VendorHomeComponent(restService) {
        this.restService = restService;
        this.hideEditForm = true;
        this.url = _constants__WEBPACK_IMPORTED_MODULE_1__["BASEURL"] + 'vendors';
    } // constructor
    VendorHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msg = 'loading employees from server...';
        this.restService.load(this.url).subscribe(function (payload) {
            _this.employees = payload;
            _this.msg = 'vendors loaded!!';
        }, function (err) {
            _this.employees = [];
            _this.msg = 'Error - vendors not loaded - ' + err.status + ' - ' + err.statusText;
        });
    }; // ngOnInit
    VendorHomeComponent.prototype.select = function (vendor) {
        this.todo = 'update';
        this.selectedVendor = vendor;
        this.msg = vendor.name + ' selected';
        this.hideEditForm = !this.hideEditForm;
    }; // select
    /**
     * cancelled - event handler for cancel button
     */
    VendorHomeComponent.prototype.cancel = function (msg) {
        if (msg) {
            this.msg = 'Operation cancelled';
        }
        this.hideEditForm = !this.hideEditForm;
    }; // cancel
    /**
     * update - send changed update to service update local array
     */
    VendorHomeComponent.prototype.update = function (vendor) {
        var _this = this;
        this.restService.update(this.url, vendor).subscribe(function (payload) {
            if (payload.id > 0) {
                // update local array using ? operator
                _this.employees = _this.employees.map(function (emp) { return emp.id === vendor.id ? Object.assign({}, emp, vendor) : emp; });
                _this.msg = 'Vendor ' + vendor.id + ' updated!';
            }
            else {
                _this.msg = 'Vendor not updated! - server error';
            }
            _this.hideEditForm = !_this.hideEditForm;
        }, function (err) {
            _this.msg = 'Error - Vendor not updated - ' + err.status + ' - ' + err.statusText;
        });
    }; // update
    /**
     * save - determine whether we're doing and add or an update
     */
    VendorHomeComponent.prototype.save = function (employee) {
        (employee.id) ? this.update(employee) : this.add(employee);
    }; // save
    VendorHomeComponent.prototype.delete = function (employee) {
        var _this = this;
        this.restService.delete(this.url, employee.id)
            .subscribe(function (payload) {
            if (payload === 1) { // server returns # rows deleted
                _this.msg = 'Vendor ' + employee.id + ' deleted!';
                _this.employees = _this.employees.filter(function (emp) { return emp.id !== employee.id; });
            }
            else {
                _this.msg = 'Vendor not deleted!';
            }
            _this.hideEditForm = !_this.hideEditForm;
        }, function (err) {
            _this.msg = 'Error - Vendor not deleted - ' + err.status + ' - ' + err.statusText;
        });
    }; // delete
    VendorHomeComponent.prototype.add = function (employee) {
        var _this = this;
        employee.id = 0;
        this.restService.add(this.url, employee)
            .subscribe(function (payload) {
            if (payload.id > 0) { // server returns new id in returned json
                _this.employees = _this.employees.concat([employee]); // add employee to current array using spread
                employee.id = payload.id;
                _this.msg = 'Vendor ' + employee.id + ' added!';
            }
            else {
                _this.msg = 'Vendor addition failed!';
            }
            _this.hideEditForm = !_this.hideEditForm;
        }, function (err) {
            _this.msg = 'Error - Vendor addition failed - ' + err.status + ' - ' + err.statusText;
        });
    }; // add
    VendorHomeComponent.prototype.newVendor = function () {
        this.selectedVendor = {
            id: null,
            name: '',
            address1: '',
            city: '',
            province: '',
            postalcode: '',
            phone: '',
            type: '',
            email: ''
        };
        this.msg = 'New Vendor';
        this.hideEditForm = !this.hideEditForm;
    }; // newEmployee
    VendorHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exercises',
            template: __webpack_require__(/*! ./vendor-home.html */ "./src/app/vendor/vendor-home.html")
        }),
        __metadata("design:paramtypes", [_restful_service__WEBPACK_IMPORTED_MODULE_2__["RestfulService"]])
    ], VendorHomeComponent);
    return VendorHomeComponent;
}());



/***/ }),

/***/ "./src/app/vendor/vendor-home.html":
/*!*****************************************!*\
  !*** ./src/app/vendor/vendor-home.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\">\r\n  <span>Case Study</span>\r\n</mat-toolbar>\r\n<img class=\"logo\" src=\"assets/img/logo.png\" style=\"width: 40px; height: auto; margin-left: 47%\">\r\n\r\n<mat-card *ngIf=\"hideEditForm\">\r\n  <mat-card-content>\r\n    <img class=\"logo\" src=\"assets/img/logo.png\">\r\n    <mat-card-header class=\"bgc-grey-200\" layout=\"row\">\r\n      <mat-card-title>\r\n        <span class=\"mat-headline\">{{ msg }}</span>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-list flex>\r\n      <app-vendor-list [vendors]=\"employees\" (selected)=\"select($event)\" (newed)=\"newVendor($event)\">\r\n      </app-vendor-list>\r\n    </mat-list>\r\n  </mat-card-content>\r\n</mat-card>\r\n<mat-card *ngIf=\"!hideEditForm\">\r\n  <mat-card-header class=\"bgc-grey-00\" layout=\"row\">\r\n    <mat-card-title>\r\n      <span class=\"mat-headline bgc-yellow-A200\">{{ msg }}</span>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <mat-list flex>\r\n      <app-vendor-detail [employee]=\"selectedVendor\"\r\n                         (cancelled)=\"cancel('cancelled')\"\r\n                         (saved)=\"save($event)\"\r\n                         (deleted)=\"delete($event)\">\r\n      </app-vendor-detail>\r\n    </mat-list>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/vendor/vendor-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/vendor/vendor-list.component.ts ***!
  \*************************************************/
/*! exports provided: VendorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorListComponent", function() { return VendorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VendorListComponent = /** @class */ (function () {
    function VendorListComponent() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VendorListComponent.prototype, "vendors", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VendorListComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VendorListComponent.prototype, "newed", void 0);
    VendorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vendor-list',
            template: "\n<mat-list-item *ngFor=\"let vendor of vendors\" layout=\"row\" (click)=\"selected.emit(vendor)\" class=\"pad-xs mat-title\">\n{{ vendor.id }} - {{ vendor.name}}\n</mat-list-item>\n<div>\n  <mat-icon id = \"addvendor\" (click)=\"newed.emit()\" matTooltip=\"Add New Vendor\" color=\"primary\" class=\"mat-36 pad-top-xxl\">\n    control_point\n  </mat-icon>\n</div>\n      "
        })
    ], VendorListComponent);
    return VendorListComponent;
}());



/***/ }),

/***/ "./src/app/vendor/vendor.module.ts":
/*!*****************************************!*\
  !*** ./src/app/vendor/vendor.module.ts ***!
  \*****************************************/
/*! exports provided: VendorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorModule", function() { return VendorModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _vendor_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor-home.component */ "./src/app/vendor/vendor-home.component.ts");
/* harmony import */ var _vendor_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendor-list.component */ "./src/app/vendor/vendor-list.component.ts");
/* harmony import */ var _vendor_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendor-detail.component */ "./src/app/vendor/vendor-detail.component.ts");
/* harmony import */ var _deletedialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../deletedialog/delete-dialog.component */ "./src/app/deletedialog/delete-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// added imports







var VendorModule = /** @class */ (function () {
    function VendorModule() {
    }
    VendorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _vendor_home_component__WEBPACK_IMPORTED_MODULE_5__["VendorHomeComponent"], _vendor_list_component__WEBPACK_IMPORTED_MODULE_6__["VendorListComponent"], _vendor_detail_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeDetailComponent"], _deletedialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteDialogComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            entryComponents: [
                _deletedialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteDialogComponent"]
            ]
        })
    ], VendorModule);
    return VendorModule;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Ang2\casestudy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map