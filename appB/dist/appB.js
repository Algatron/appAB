var appA =
(window["webpackJsonpappA"] = window["webpackJsonpappA"] || []).push([["appB"],{

/***/ "./b.component.ts":
/*!************************!*\
  !*** ./b.component.ts ***!
  \************************/
/*! exports provided: BComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BComponent", function() { return BComponent; });
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

var BComponent = /** @class */ (function () {
    function BComponent() {
    }
    BComponent.prototype.ngOnInit = function () {
        console.info('appB.BComponent initializing');
    };
    BComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comp-b',
            template: "\n        <div style='padding: 20px; border: dashed; border-color:black'>Component from appB</div>\n    "
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BComponent);
    return BComponent;
}());



/***/ }),

/***/ "./b.entry.ts":
/*!********************!*\
  !*** ./b.entry.ts ***!
  \********************/
/*! exports provided: BModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _b_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b.module */ "./b.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BModule", function() { return _b_module__WEBPACK_IMPORTED_MODULE_0__["BModule"]; });




/***/ }),

/***/ "./b.module.ts":
/*!*********************!*\
  !*** ./b.module.ts ***!
  \*********************/
/*! exports provided: BModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BModule", function() { return BModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _b_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b.component */ "./b.component.ts");
/* harmony import */ var _b_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./b.service */ "./b.service.ts");
/* harmony import */ var appA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! appA */ "appA");
/* harmony import */ var appA__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(appA__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var fac1 = function () {
    return function () { return console.info('appB.BModule initializer'); };
};
var fac2 = function (service) {
    return function () {
        console.info('appB.BModule - calling print on service from module A...');
        service.print();
    };
};
var BModule = /** @class */ (function () {
    function BModule() {
    }
    BModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _b_component__WEBPACK_IMPORTED_MODULE_1__["BComponent"]
            ],
            exports: [
                _b_component__WEBPACK_IMPORTED_MODULE_1__["BComponent"]
            ],
            providers: [
                _b_service__WEBPACK_IMPORTED_MODULE_2__["BService"],
                appA__WEBPACK_IMPORTED_MODULE_3__["AService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    useFactory: fac1,
                    multi: true
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    useFactory: fac2,
                    deps: [
                        appA__WEBPACK_IMPORTED_MODULE_3__["AService"]
                    ],
                    multi: true
                }
            ]
        })
    ], BModule);
    return BModule;
}());



/***/ }),

/***/ "./b.service.ts":
/*!**********************!*\
  !*** ./b.service.ts ***!
  \**********************/
/*! exports provided: BService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BService", function() { return BService; });
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

var BService = /** @class */ (function () {
    function BService() {
        console.info('appB.BService.constructor');
    }
    BService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BService);
    return BService;
}());



/***/ }),

/***/ "./node_modules/@angular/core/fesm5 lazy recursive":
/*!****************************************************************!*\
  !*** ./node_modules/@angular/core/fesm5 lazy namespace object ***!
  \****************************************************************/
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
webpackEmptyAsyncContext.id = "./node_modules/@angular/core/fesm5 lazy recursive";

/***/ }),

/***/ "appA":
/*!*********************************************************************************!*\
  !*** external {"var":"appA","commonjs":"appA","commonjs2":"appA","amd":"appA"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = appA;

/***/ })

},[["./b.entry.ts","runtime","vendor"]]]);
//# sourceMappingURL=appB.js.map