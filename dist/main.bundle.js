webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\n    color: green;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Super beta and not even close to being done. RJ's a vato.</h1>\n<ul>\n  <li *ngFor=\"let characteristic of tRad.characteristics\">\n    <span>{{characteristic.description}}</span>\n    <ul>\n      <li *ngFor=\"let option of characteristic.options\">\n        <label>{{option.description}}: {{option.points}}\n          <input type=\"{{characteristic.type}}\" name={{characteristic.description}} (ngModel)=\"option.points\" (change)=\"addPoints($event, characteristic, option)\">\n        </label>\n      </li>\n    </ul>\n  </li>\n</ul>\n<div>points: {{pointsTotal}}</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pointsTotal = 0;
        this.selectedCharacteristicPointMap = {};
        this.addPoints = function (event, characteristic, option) {
            if (characteristic.type === 'checkbox') {
                if (event.srcElement.checked) {
                    this.selectedCharacteristicPointMap[characteristic.description + ' - ' + option.description] = option.points;
                }
                else {
                    delete this.selectedCharacteristicPointMap[characteristic.description + ' - ' + option.description];
                }
            }
            else {
                this.selectedCharacteristicPointMap[characteristic.description] = option.points;
            }
            this.pointsTotal = 0;
            for (var key in this.selectedCharacteristicPointMap) {
                if (this.selectedCharacteristicPointMap.hasOwnProperty(key)) {
                    this.pointsTotal += this.selectedCharacteristicPointMap[key];
                }
            }
        };
        // tslint:disable-next-line:member-ordering
        this.tRad = {
            'id': 1,
            'description': 'ARC TI-RADS',
            'characteristics': [
                {
                    'description': 'Composition',
                    'type': 'radio',
                    'options': [
                        {
                            'description': 'Cystic or almost completely cystic',
                            'points': 0
                        },
                        {
                            'description': 'Spongiform',
                            'points': 0,
                            'break': true
                        },
                        {
                            'description': 'Mixed cystic and solid',
                            'points': 1
                        },
                        {
                            'description': 'Solid or almost completely solid',
                            'points': 2
                        }
                    ]
                },
                {
                    'description': 'Echogenicity',
                    'type': 'radio',
                    'options': [
                        {
                            'description': 'Anechoic',
                            'points': 0
                        },
                        {
                            'description': 'Hyperechoic or isoechoic',
                            'points': 1
                        },
                        {
                            'description': 'Hypoechoic',
                            'points': 2
                        },
                        {
                            'description': 'Very hypoechoic',
                            'points': 3
                        }
                    ]
                },
                {
                    'description': 'Shape',
                    'type': 'radio',
                    'options': [
                        {
                            'description': 'Wider-than-tall',
                            'points': 0
                        },
                        {
                            'description': 'Taller-than-wide',
                            'points': 3
                        }
                    ]
                },
                {
                    'description': 'Margin',
                    'type': 'radio',
                    'options': [
                        {
                            'description': 'Smooth',
                            'points': 0
                        },
                        {
                            'description': 'Ill-defined',
                            'points': 0
                        },
                        {
                            'description': 'Lobulated or irregular',
                            'points': 2
                        },
                        {
                            'description': 'Extra-thyroidal extension',
                            'points': 3
                        }
                    ]
                },
                {
                    'description': 'Echogenic Foci',
                    'type': 'checkbox',
                    'options': [
                        {
                            'description': 'None or large comet-tail artifacts',
                            'points': 0
                        },
                        {
                            'description': 'Macrocalcifications',
                            'points': 1
                        },
                        {
                            'description': 'Peripheral (rim) calcifications',
                            'points': 2
                        },
                        {
                            'description': 'Punctate echogenic foci',
                            'points': 3
                        }
                    ]
                }
            ]
        };
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map