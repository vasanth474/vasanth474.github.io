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

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-10\">\n  <h3>About</h3>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum semper fermentum. Maecenas rutrum augue a nisl maximus, eu elementum arcu sollicitudin. Vestibulum congue magna vitae accumsan viverra. Praesent ut faucibus tellus, quis laoreet nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam in orci sit amet felis porta tristique. Praesent ut sapien et sapien tincidunt eleifend at vitae magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque finibus nec eros nec malesuada. Morbi id lacus enim. Etiam dapibus tempor enim, ut euismod justo consectetur vitae. Cras ut tellus sed leo euismod blandit. Phasellus non risus felis. Cras dapibus eros vitae turpis sodales consectetur. Quisque convallis aliquam massa at feugiat.\n\n    Quisque non euismod justo. Duis ligula metus, accumsan et dolor vel, bibendum pellentesque nulla. Nulla luctus eros nec neque interdum, nec facilisis lectus dapibus. Duis fringilla orci fermentum lorem malesuada sagittis. Curabitur porttitor dictum tellus porttitor sollicitudin. Cras dictum ultricies erat ut condimentum. Sed erat leo, malesuada ullamcorper odio vitae, ullamcorper interdum nisl.\n\n    Donec consequat diam at eros porttitor consectetur. Vivamus eu fermentum nunc. Fusce malesuada nunc at imperdiet porttitor. Donec faucibus egestas tempus. Praesent consequat lectus nec magna vestibulum euismod. In maximus, ex ullamcorper porta tristique, mi mi dictum justo, ac sollicitudin nunc diam a sapien. Praesent eleifend ultrices velit, lobortis viverra velit ornare ac. Curabitur quis nunc eget sem blandit pellentesque. Proin a quam tristique, fringilla elit vel, sodales eros. Ut convallis turpis vel mauris porta consequat. Etiam ultricies est ut dapibus facilisis. Praesent mattis odio in volutpat fermentum. Ut eu magna elit. Proin nec convallis dolor, eu dictum velit. Cras sem sapien, blandit sed ante ut, tristique condimentum turpis. Phasellus vestibulum tellus id suscipit sagittis.\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
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

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root{\r\n\tfont-size: 16px;\r\n}\r\n\r\n.arrowimg{\r\n\twidth:50px;\r\n\theight: 50px;\r\n\tborder:1px solid none; \r\n}\r\n\r\nbody{\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n.home{\r\n\t\r\n\tcolor:#043B5A;\r\n}\r\n\r\n.home .title{\r\n\tbackground-color:#FFFFFF /*#043B5A*/;\r\n\tdisplay:flex;\r\n\tflex-wrap:wrap;\r\n\tfont-variant: small-caps;\r\n\talign-items: center;\r\n\tcolor:/*#8B4213*/#043B5A/*#ADF0D1*/;\r\n}\r\n\r\n.home #titem-title{\r\n\t/*Only for the media queries*/\r\n}\r\n\r\n.nitem{\r\n\tborder:none;\r\n}\r\n\r\n.navbar .navbar-nav .nitem li a:hover{\r\n\tcolor:#043B5A;\r\n}\r\n\r\n.navbar .navbar-nav .nitem .dropdown .dropdown-menu{\r\n\tbackground-color: #F1F1F1;\r\n}\r\n\r\n.navbar .navbar-nav .nitem .dropdown .dropdown-item {\r\n\tfont-weight: 500;\r\n}\r\n\r\n.navbar .navbar-nav .nitem .dropdown .dropdown-item:hover{\r\n\tfont-weight: bolder;\r\n\tcolor:#043B5A;\r\n}\r\n\r\n.home .my-image{\r\n\t/*class only for media queries*/\r\n}\r\n\r\n.back-to-top{\r\n\tbottom:10px;\r\n\tright: 15px;\r\n\tposition: fixed;\r\n\tz-index: 99;\r\n}\r\n\r\n.gototop{\r\n\tdisplay:block;\r\n}\r\n\r\n.my-footer{\r\n  width:80vw;\r\n  height: 20vh;\r\n  background-color: #E5E4D1/*#043B5A*/;\r\n  border-top:6px double #043B5A ;\r\n  color: #043B5A/*#ADF0D1*/;\r\n}\r\n\r\n@media screen and (min-width:768px){\r\n\t.home .my-image{\r\n\t\twidth:25vw;\r\n\t\theight: 20vh;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width:767px) and (min-width:576px){\r\n\t/*.home .my-image{\r\n\t\twidth: 70vw;\r\n\t\theight: 35vh;\r\n\t\tborder: solid 5px #043B5A;\r\n\t\tborder-radius: 10px;\r\n\t\tmargin: 0 5px;\r\n\t\tpadding:0 5px;\r\n\t}*/\r\n\t.home .my-image{\r\n\t\theight:35vw;\r\n\t}\r\n\t.gototop{\r\n\t\tdisplay:none;\r\n\t}\r\n\t.home #titem-title{\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width:575px) and (min-width:410px){\r\n\t/*.home .my-image{\r\n\t\twidth: 90vw;\r\n\t\theight: 35vh;\r\n\t\tborder: solid 5px #043B5A;\r\n\t\tborder-radius: 10px;\r\n\t\tmargin: 0 5px;\r\n\t\tpadding:0 5px;\r\n\t}*/\r\n\t.home #titem-title{\r\n\t\tdisplay: none;\r\n\t}\r\n\t.gototop{\r\n\t\tdisplay:none;\r\n\t}\r\n\t.igm{\r\n\t\twidth:90vw;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width:409px){\r\n\t/*.home .my-image{\r\n\t\twidth: 90vw;\r\n\t\theight: 25vh;\r\n\t\tborder: solid 5px #043B5A;\r\n\t\tmargin: 0 5px;\r\n\t\tpadding: 0 5px;\r\n\t}*/\r\n\t.gototop{\r\n\t\tdisplay:none;\r\n\t}\r\n\t.igm{\r\n\t\twidth: 90vw;\r\n\t}\r\n\t.home #titem-title{\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEI7O0FBRUQ7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qjs7QUFDRDtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsMkNBQTJDO0NBQzNDOztBQUdEOztDQUVDLGNBQWM7Q0FDZDs7QUFHRDtDQUNDLHFDQUFxQztDQUNyQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixvQkFBb0I7Q0FDcEIsb0NBQW9DO0NBQ3BDOztBQUNEO0NBQ0MsOEJBQThCO0NBQzlCOztBQUNEO0NBQ0MsWUFBWTtDQUNaOztBQUNEO0NBQ0MsY0FBYztDQUNkOztBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCOztBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCOztBQUNEO0NBQ0Msb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLGdDQUFnQztDQUNoQzs7QUFFRDtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWjs7QUFFRDtDQUNDLGNBQWM7Q0FDZDs7QUFHRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLCtCQUErQjtFQUMvQiwwQkFBMEI7Q0FDM0I7O0FBTUQ7Q0FDQztFQUNDLFdBQVc7RUFDWCxhQUFhO0VBQ2I7Q0FDRDs7QUFFRDtDQUNDOzs7Ozs7O0lBT0c7Q0FDSDtFQUNDLFlBQVk7RUFDWjtDQUNEO0VBQ0MsYUFBYTtFQUNiO0NBQ0Q7RUFDQyxjQUFjO0VBQ2Q7Q0FDRDs7QUFFRDtDQUNDOzs7Ozs7O0lBT0c7Q0FDSDtFQUNDLGNBQWM7RUFDZDtDQUNEO0VBQ0MsYUFBYTtFQUNiO0NBQ0Q7RUFDQyxXQUFXO0VBQ1g7Q0FDRDs7QUFFRDtDQUNDOzs7Ozs7SUFNRztDQUNIO0VBQ0MsYUFBYTtFQUNiO0NBQ0Q7RUFDQyxZQUFZO0VBQ1o7Q0FDRDtFQUNDLGNBQWM7RUFDZDtDQUNEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5hcnJvd2ltZ3tcclxuXHR3aWR0aDo1MHB4O1xyXG5cdGhlaWdodDogNTBweDtcclxuXHRib3JkZXI6MXB4IHNvbGlkIG5vbmU7IFxyXG59XHJcbmJvZHl7XHJcblx0bWFyZ2luOjA7XHJcblx0cGFkZGluZzowO1xyXG5cdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi5ob21le1xyXG5cdFxyXG5cdGNvbG9yOiMwNDNCNUE7XHJcbn1cclxuXHJcblxyXG4uaG9tZSAudGl0bGV7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojRkZGRkZGIC8qIzA0M0I1QSovO1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LXdyYXA6d3JhcDtcclxuXHRmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRjb2xvcjovKiM4QjQyMTMqLyMwNDNCNUEvKiNBREYwRDEqLztcclxufVxyXG4uaG9tZSAjdGl0ZW0tdGl0bGV7XHJcblx0LypPbmx5IGZvciB0aGUgbWVkaWEgcXVlcmllcyovXHJcbn1cclxuLm5pdGVte1xyXG5cdGJvcmRlcjpub25lO1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgLm5pdGVtIGxpIGE6aG92ZXJ7XHJcblx0Y29sb3I6IzA0M0I1QTtcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IC5uaXRlbSAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnV7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMTtcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IC5uaXRlbSAuZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0ge1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLW5hdiAubml0ZW0gLmRyb3Bkb3duIC5kcm9wZG93bi1pdGVtOmhvdmVye1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblx0Y29sb3I6IzA0M0I1QTtcclxufVxyXG5cclxuLmhvbWUgLm15LWltYWdle1xyXG5cdC8qY2xhc3Mgb25seSBmb3IgbWVkaWEgcXVlcmllcyovXHJcbn1cclxuXHJcbi5iYWNrLXRvLXRvcHtcclxuXHRib3R0b206MTBweDtcclxuXHRyaWdodDogMTVweDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0ei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi5nb3RvdG9we1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuXHJcblxyXG4ubXktZm9vdGVye1xyXG4gIHdpZHRoOjgwdnc7XHJcbiAgaGVpZ2h0OiAyMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFNUU0RDEvKiMwNDNCNUEqLztcclxuICBib3JkZXItdG9wOjZweCBkb3VibGUgIzA0M0I1QSA7XHJcbiAgY29sb3I6ICMwNDNCNUEvKiNBREYwRDEqLztcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpe1xyXG5cdC5ob21lIC5teS1pbWFnZXtcclxuXHRcdHdpZHRoOjI1dnc7XHJcblx0XHRoZWlnaHQ6IDIwdmg7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSBhbmQgKG1pbi13aWR0aDo1NzZweCl7XHJcblx0LyouaG9tZSAubXktaW1hZ2V7XHJcblx0XHR3aWR0aDogNzB2dztcclxuXHRcdGhlaWdodDogMzV2aDtcclxuXHRcdGJvcmRlcjogc29saWQgNXB4ICMwNDNCNUE7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0bWFyZ2luOiAwIDVweDtcclxuXHRcdHBhZGRpbmc6MCA1cHg7XHJcblx0fSovXHJcblx0LmhvbWUgLm15LWltYWdle1xyXG5cdFx0aGVpZ2h0OjM1dnc7XHJcblx0fVxyXG5cdC5nb3RvdG9we1xyXG5cdFx0ZGlzcGxheTpub25lO1xyXG5cdH1cclxuXHQuaG9tZSAjdGl0ZW0tdGl0bGV7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzVweCkgYW5kIChtaW4td2lkdGg6NDEwcHgpe1xyXG5cdC8qLmhvbWUgLm15LWltYWdle1xyXG5cdFx0d2lkdGg6IDkwdnc7XHJcblx0XHRoZWlnaHQ6IDM1dmg7XHJcblx0XHRib3JkZXI6IHNvbGlkIDVweCAjMDQzQjVBO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdG1hcmdpbjogMCA1cHg7XHJcblx0XHRwYWRkaW5nOjAgNXB4O1xyXG5cdH0qL1xyXG5cdC5ob21lICN0aXRlbS10aXRsZXtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdC5nb3RvdG9we1xyXG5cdFx0ZGlzcGxheTpub25lO1xyXG5cdH1cclxuXHQuaWdte1xyXG5cdFx0d2lkdGg6OTB2dztcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MDlweCl7XHJcblx0LyouaG9tZSAubXktaW1hZ2V7XHJcblx0XHR3aWR0aDogOTB2dztcclxuXHRcdGhlaWdodDogMjV2aDtcclxuXHRcdGJvcmRlcjogc29saWQgNXB4ICMwNDNCNUE7XHJcblx0XHRtYXJnaW46IDAgNXB4O1xyXG5cdFx0cGFkZGluZzogMCA1cHg7XHJcblx0fSovXHJcblx0LmdvdG90b3B7XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG5cdC5pZ217XHJcblx0XHR3aWR0aDogOTB2dztcclxuXHR9XHJcblx0LmhvbWUgI3RpdGVtLXRpdGxle1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contaniner-fluid home\">\n  <!--The Title-->\n  <div class=\"container-fluid title mb-2 justify-content-around\">\n    <div class=\"titem\">\n      <img src=\"./assets/Final_Logo.jpg\" class=\"my-image rounded img-fluid\" alt=\"Logo gets loaded\">\n    </div>\n    <div class=\"titem h1 align-self-center\" id=\"titem-title\">\n      Siddivruddhi Integration Pvt,Ltd\n    </div>\n  </div>\n</div>\n<!--  Navigation bar-->\n<!-- #e3f2fd#7A8DB7  #A1C45A  -->\n<div class=\"container-fluid sticky-top mb-4\" role=\"navigation\">\n  <nav class=\"navbar sticky-top navbar-expand-md navbar-dark\" style=\"background-color:#A1C45A;font-weight: bolder;\">\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navBarButton\" aria-controls=\"navBarButton\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-center\" id=\"navBarButton\">\n      <ul class=\"navbar-nav\">\n        <div class=\"nitem mr-3\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" [routerLink]=\"['/home']\">Home<span class=\"sr-only\">(current)</span></a>\n          </li>\n        </div>\n        <div class=\"nitem mr-3\">\n          <li class=\"nav-item  dropdown\">\n            <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\n              aria-expanded=\"false\" href=\"products.html\">Products</a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <a class=\"dropdown-item\" href=\"#\">Poultry Feed</a>\n              <a class=\"dropdown-item\" href=\"#\">Dairy Cattle Feed</a>\n              <a class=\"dropdown-item\" href=\"#\">Sheep And Goat Feed </a>\n              <a class=\"dropdown-item\" href=\"#\">Fish Feed</a>\n              <a class=\"dropdown-item\" href=\"#\">Pig Feed</a>\n              <a class=\"dropdown-item\" href=\"#\">Rabbit Feed</a>\n            </div>\n          </li>\n        </div>\n        <div class=\"nitem mr-3\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/marketing']\">Marketing</a>\n          </li>\n        </div>\n        <div class=\"nitem mr-3\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/media']\">Media</a>\n          </li>\n        </div>\n        <div class=\"nitem mr-3\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/about-us']\">About Us</a>\n          </li>\n        </div>\n        <div class=\"nitem mr-3\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/contact-us']\">Contact Us</a>\n          </li>\n        </div>\n        <div class=\"nitem  mr-3\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n          </li>\n        </div>\n      </ul>\n    </div>\n  </nav>\n</div>\n<!-- End of Navbar-->\n<router-outlet></router-outlet>"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Siddivruddhi';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _marketing_marketing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./marketing/marketing.component */ "./src/app/marketing/marketing.component.ts");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media/media.component */ "./src/app/media/media.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//set up the router to route navigate

//Formsmodule











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
                _marketing_marketing_component__WEBPACK_IMPORTED_MODULE_8__["MarketingComponent"],
                _media_media_component__WEBPACK_IMPORTED_MODULE_9__["MediaComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__["ContactUsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //Calling the forRoot function to setup routing 
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'marketing', component: _marketing_marketing_component__WEBPACK_IMPORTED_MODULE_8__["MarketingComponent"] },
                    { path: 'media', component: _media_media_component__WEBPACK_IMPORTED_MODULE_9__["MediaComponent"] },
                    { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"] },
                    { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__["ContactUsComponent"] },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
                    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myImage{\r\n    width:100vw;\r\n    height: 25vw;\r\n}\r\ninput{\r\n    font-weight: 300;\r\n}\r\n.form-control{\r\n    border:solid 1px #043B5A;\r\n    font-weight: 500;\r\n}\r\n.contactus{\r\n    color:#043B5A;\r\n    font-weight: bolder;\r\n}\r\n.ng-valid[required], .ng-valid.required {\r\n    border-left: 5px solid #42A948;/*  green */\r\n}\r\n.ng-invalid:not(form){\r\n    border-left: 5px solid #a94442;/* red */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQjtBQUNEO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSwrQkFBK0IsWUFBWTtDQUM5QztBQUNEO0lBQ0ksK0JBQStCLFNBQVM7Q0FDM0MiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teUltYWdle1xyXG4gICAgd2lkdGg6MTAwdnc7XHJcbiAgICBoZWlnaHQ6IDI1dnc7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBib3JkZXI6c29saWQgMXB4ICMwNDNCNUE7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uY29udGFjdHVze1xyXG4gICAgY29sb3I6IzA0M0I1QTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsvKiAgZ3JlZW4gKi9cclxufVxyXG4ubmctaW52YWxpZDpub3QoZm9ybSl7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7LyogcmVkICovXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col mb-5\">\n          <a><img src=\"../assets/svi1.jpg\" class=\"img-fluid myImage rounded\"></a>\n         </div>\n       </div>\n</div>\n<div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"row mb-5\">\n            <div class=\"col\">\n              <h2 class=\"heading\">Company Address</h2>\n              <p class=\"subHeading\">Survey No.12/2, Hosabadavane,<br/>Billahalli Village<br/>Kasaba Hobli<br/>Channagiri Taluk<br/>Davanagere District-577213</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n                <h2 class=\"heading\">Regd.Office Address</h2>\n                <p class=\"subHeading\">No. 1885/2,<br/>Ground Floor<br/>21st cross, 2nd Main<br/>C-block, Sahakaranagara<br/>Bengaluru-560092</p>\n            </div>\n          </div>\n            <div class=\"row\">\n             <div class=\"col\">\n             <a class=\"heading\" href=\"#\">contactus@siddivruddhi.com</a>\n             <a class=\"heading\" href=\"#\"><br/>9108543567<br/>8197023636<br/>9071363660</a> \n             <a  class=\"heading\" href=\"#\"><br/>Landline</a>\n            </div>\n            </div>\n          </div>\n        <div class=\"col-md-6\">\n          <div class=\"row\">\n              <div class=\"col\">\n                <h2 class=\"heading\">Contact Us</h2>\n                <p class=\"subHeading\">Reach us for your query.</p>\n              </div>\n          </div>\n          <form #contactForm=\"ngForm\" class=\"contactus\" (ngSubmit)=\"getData()\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Name:</label>\n                        <input type=\"text\" name=\"name\" [(ngModel)]='name' #lName='ngModel' class=\"form-control\" placeholder='Enter your Fullname' required autofocus>\n                    </div>\n                    <div [hidden]='lName.valid || lName.pristine' class='alert alert-danger'>\n                        Enter Your Name\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Mobile No:</label>\n                        <input type=\"number\" name=\"mobile\" [(ngModel)]='mobile' #lMobile = 'ngModel' class=\"form-control\" placeholder='Enter your Mobile Number' required>\n                    </div>\n                    <div [hidden]='lMobile.valid || lMobile.pristine' class=\"alert alert-danger\">\n                            Enter your mobile number\n                    </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                          <label>Email:</label>\n                          <input type=\"email\" name=\"email\" [(ngModel)]='email' #lEmail=\"ngModel\" class=\"form-control\" placeholder=\"Enter your Email\" required>\n                      </div>\n                      <div [hidden]='lEmail.valid || lEmail.pristine' class=\"alert alert-danger\">\n                            Enter your email\n                       </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                          <label>Location:</label>\n                          <input type=\"address\" name=\"location\" [(ngModel)]='location' #lLocation=\"ngModel\" class=\"form-control\" placeholder=\"Enter the Location\" required>\n                      </div>\n                      <div [hidden]='lLocation.valid || lLocation.pristine' class=\"alert alert-danger\">\n                        Enter the location name - you need our service for.  \n                      </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                       <div class=\"form-group\">\n                          <label>Select Query About:</label>\n                          <select name=\"queryCategory\" class=\"form-control\" id=\"category\" required>\n                              <option *ngFor=\"let category of possibleCategories\" [value]=\"category\">{{category}}</option>            \n                          </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                       <label>Specify your need:</label>\n                       <textarea name=\"queryNeed\" [(ngModel)]='queryNeed' #lNeed ='ngModel' class=\"form-control\" rows=\"5\" required></textarea>                 \n                     </div>\n                    </div>\n                    <div [hidden]='lNeed.valid || lNeed.pristine' class=\"alert alert-danger\">\n                            We are happy to reach you!\n                            Please provide your query in detail.\n                    </div>\n             </div>\n            \n                <div class=\"row justify-content-center\">\n                    <div class=\"col-10\">\n                        <button type=\"submit\" class=\"btn btn-lg btn-block success\" [disabled]=\"!contactForm.form.valid\">Send Message</button>\n                    </div>\n                </div>\n          </form>\n        </div>\n      </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col  my-footer mt-5\">\n      <h3>The contentes of the footer</h3>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
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

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
        this.possibleCategories = ['Marketing', 'production'];
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.prototype.getData = function () {
        var data = {
            name: this.name,
            mobile: this.mobile,
            email: this.email,
            location: this.location,
            queryNeed: this.queryNeed,
            queryCategory: this.queryCategory
        };
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products{\r\n}\r\n.productsc{\r\n\tbackground:#206;\r\n\tborder-top-right-radius:10px;\r\n\tborder-top-left-radius:10px;\r\n}\r\n.ign{ \r\n}\r\n.get-intouch{\r\n    border-top:2px solid #043B5A ;\r\n}\r\n.img-slider{\r\n\theight: 40vw;\r\n\tmargin-bottom: 4vh;\r\n}\r\n.cimg{\r\n\twidth:100vw;\r\n\theight: 40vw;\r\n}\r\n.ContentItem{\r\n\tborder:solid #A1C45A; \r\n\tborder-radius: 30px;\r\n\twidth:30vw;\r\n\theight: 40vh;\r\n}\r\n\r\n\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCLDZCQUE2QjtDQUM3Qiw0QkFBNEI7Q0FDNUI7QUFFRDtDQUNDO0FBRUQ7SUFDSSw4QkFBOEI7Q0FDakM7QUFFRDtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2I7QUFDRDtDQUNDLHFCQUFxQjtDQUNyQixvQkFBb0I7Q0FDcEIsV0FBVztDQUNYLGFBQWE7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3Rze1xyXG59XHJcbi5wcm9kdWN0c2N7XHJcblx0YmFja2dyb3VuZDojMjA2O1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O1xyXG59XHJcblxyXG4uaWdueyBcclxufVxyXG5cclxuLmdldC1pbnRvdWNoe1xyXG4gICAgYm9yZGVyLXRvcDoycHggc29saWQgIzA0M0I1QSA7XHJcbn1cclxuXHJcbi5pbWctc2xpZGVye1xyXG5cdGhlaWdodDogNDB2dztcclxuXHRtYXJnaW4tYm90dG9tOiA0dmg7XHJcbn1cclxuXHJcbi5jaW1ne1xyXG5cdHdpZHRoOjEwMHZ3O1xyXG5cdGhlaWdodDogNDB2dztcclxufVxyXG4uQ29udGVudEl0ZW17XHJcblx0Ym9yZGVyOnNvbGlkICNBMUM0NUE7IFxyXG5cdGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblx0d2lkdGg6MzB2dztcclxuXHRoZWlnaHQ6IDQwdmg7XHJcbn1cclxuXHJcblxyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Caurosel-->\n<div class=\"container\">\n  <h3>Image Slider With Comapny Name and Theme</h3>\n</div>\n<div class=\"container\">\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner img-slider\">\n      <div class=\"carousel-item active\">\n        <img class=\"cimg\" src=\"./assets/animal-feed1.jpg\" alt=\"First slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"cimg\" src=\"./assets/animal-feed2.jpg\" alt=\"Second slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"cimg\" src=\"./assets/animal-feed3.jpg\" alt=\"Third slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"cimg\" src=\"./asstes/animal-feed4.jpg\" alt=\"Fourth slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"cimg\" src=\".assets/hen.jpg\" alt=\"Fifth slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"cimg\" src=\".assets/animal-feed2.jpg\" alt=\"Sixth slide\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n<div class=\"container mb-10\">\n  <h3>This is just as junk file</h3>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum semper fermentum. Maecenas rutrum augue a\n    nisl maximus, eu elementum arcu sollicitudin. Vestibulum congue magna vitae accumsan viverra. Praesent ut faucibus\n    tellus, quis laoreet nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n    Etiam in orci sit amet felis porta tristique. Praesent ut sapien et sapien tincidunt eleifend at vitae magna. Orci\n    varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque finibus nec eros nec\n    malesuada. Morbi id lacus enim. Etiam dapibus tempor enim, ut euismod justo consectetur vitae. Cras ut tellus sed\n    leo euismod blandit. Phasellus non risus felis. Cras dapibus eros vitae turpis sodales consectetur. Quisque\n    convallis aliquam massa at feugiat.\n\n    Quisque non euismod justo. Duis ligula metus, accumsan et dolor vel, bibendum pellentesque nulla. Nulla luctus eros\n    nec neque interdum, nec facilisis lectus dapibus. Duis fringilla orci fermentum lorem malesuada sagittis. Curabitur\n    porttitor dictum tellus porttitor sollicitudin. Cras dictum ultricies erat ut condimentum. Sed erat leo, malesuada\n    ullamcorper odio vitae, ullamcorper interdum nisl.\n\n    Donec consequat diam at eros porttitor consectetur. Vivamus eu fermentum nunc. Fusce malesuada nunc at imperdiet\n    porttitor. Donec faucibus egestas tempus. Praesent consequat lectus nec magna vestibulum euismod. In maximus, ex\n    ullamcorper porta tristique, mi mi dictum justo, ac sollicitudin nunc diam a sapien. Praesent eleifend ultrices\n    velit, lobortis viverra velit ornare ac. Curabitur quis nunc eget sem blandit pellentesque. Proin a quam tristique,\n    fringilla elit vel, sodales eros. Ut convallis turpis vel mauris porta consequat. Etiam ultricies est ut dapibus\n    facilisis. Praesent mattis odio in volutpat fermentum. Ut eu magna elit. Proin nec convallis dolor, eu dictum\n    velit. Cras sem sapien, blandit sed ante ut, tristique condimentum turpis. Phasellus vestibulum tellus id suscipit\n    sagittis.\n  </p>\n</div>\n<div class=\"container products\">\n  <div class=\"h1\">\n    Products\n  </div>\n  <div class=\"row no-gutters\">\n    <div class=\"col-md mr-2 mb-3 productsc\">Column\n      <div class=\"card   cardin\">\n        <img class=\"card-img-top img-fill\" src=\"./assets/Prod1.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Card title</h5>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n            content.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md  mr-2 mb-3 productsc\">Column\n      <div class=\"card cardin\">\n        <img class=\"card-img-top img-fill\" src=\"./assets/Prod2.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Card title</h5>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n            content.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md mr-2  mb-3 productsc\">Column\n      <div class=\"card cardin\">\n        <img class=\"card-img-top img-fill\" src=\"./assets/Prod3.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Card title</h5>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n            content.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"w-100\"></div>\n    <div class=\"col-md  mr-2 mb-3 productsc\">Column\n      <div class=\"card cardin\">\n        <img class=\"card-img-top img-fill\" src=\"./assets/Prod4.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Card title</h5>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n            content.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md  mr-2 mb-3 productsc\">Column\n      <div class=\"card cardin\">\n        <img class=\"card-img-top img-fill\" src=\"./assets/Prod5.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Card title</h5>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n            content.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md mr-2 mb-3 productsc\">Column\n      <div class=\"card cardin\">\n        <img class=\"card-img-top img-fill\" src=\"./assets/Prod6.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Card title</h5>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n            content.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container get-intouch\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-8 align-self-center\">\n      <h3>We produce Products based on the customer needs</h3>\n    </div>\n    <div class=\"col-sm-12 col-md-4 align-self-center\">\n      <button class=\"success\" href=\"#\">Get Intouch</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid my-footer\">\n  <h3>The contentes of the footer</h3>\n</div>\n<!-- Go to top-->\n<!-- <div class=\"gototop\">\n  <a href=\"#0\" class=\"back-to-top\"><img  class=\"arrowimg\" src=\"gototop.png\"></a>\n</div> -->"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-10\">\n  <h3>Future purpose once the organisation is  functional.</h3>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum semper fermentum. Maecenas rutrum augue a nisl maximus, eu elementum arcu sollicitudin. Vestibulum congue magna vitae accumsan viverra. Praesent ut faucibus tellus, quis laoreet nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam in orci sit amet felis porta tristique. Praesent ut sapien et sapien tincidunt eleifend at vitae magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque finibus nec eros nec malesuada. Morbi id lacus enim. Etiam dapibus tempor enim, ut euismod justo consectetur vitae. Cras ut tellus sed leo euismod blandit. Phasellus non risus felis. Cras dapibus eros vitae turpis sodales consectetur. Quisque convallis aliquam massa at feugiat.\n\n    Quisque non euismod justo. Duis ligula metus, accumsan et dolor vel, bibendum pellentesque nulla. Nulla luctus eros nec neque interdum, nec facilisis lectus dapibus. Duis fringilla orci fermentum lorem malesuada sagittis. Curabitur porttitor dictum tellus porttitor sollicitudin. Cras dictum ultricies erat ut condimentum. Sed erat leo, malesuada ullamcorper odio vitae, ullamcorper interdum nisl.\n\n    Donec consequat diam at eros porttitor consectetur. Vivamus eu fermentum nunc. Fusce malesuada nunc at imperdiet porttitor. Donec faucibus egestas tempus. Praesent consequat lectus nec magna vestibulum euismod. In maximus, ex ullamcorper porta tristique, mi mi dictum justo, ac sollicitudin nunc diam a sapien. Praesent eleifend ultrices velit, lobortis viverra velit ornare ac. Curabitur quis nunc eget sem blandit pellentesque. Proin a quam tristique, fringilla elit vel, sodales eros. Ut convallis turpis vel mauris porta consequat. Etiam ultricies est ut dapibus facilisis. Praesent mattis odio in volutpat fermentum. Ut eu magna elit. Proin nec convallis dolor, eu dictum velit. Cras sem sapien, blandit sed ante ut, tristique condimentum turpis. Phasellus vestibulum tellus id suscipit sagittis.\n  </p>\n</div>"

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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/marketing/marketing.component.css":
/*!***************************************************!*\
  !*** ./src/app/marketing/marketing.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmtldGluZy9tYXJrZXRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/marketing/marketing.component.html":
/*!****************************************************!*\
  !*** ./src/app/marketing/marketing.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-10\">\n  <h3>Marketing</h3>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum semper fermentum. Maecenas rutrum augue a nisl maximus, eu elementum arcu sollicitudin. Vestibulum congue magna vitae accumsan viverra. Praesent ut faucibus tellus, quis laoreet nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam in orci sit amet felis porta tristique. Praesent ut sapien et sapien tincidunt eleifend at vitae magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque finibus nec eros nec malesuada. Morbi id lacus enim. Etiam dapibus tempor enim, ut euismod justo consectetur vitae. Cras ut tellus sed leo euismod blandit. Phasellus non risus felis. Cras dapibus eros vitae turpis sodales consectetur. Quisque convallis aliquam massa at feugiat.\n\n    Quisque non euismod justo. Duis ligula metus, accumsan et dolor vel, bibendum pellentesque nulla. Nulla luctus eros nec neque interdum, nec facilisis lectus dapibus. Duis fringilla orci fermentum lorem malesuada sagittis. Curabitur porttitor dictum tellus porttitor sollicitudin. Cras dictum ultricies erat ut condimentum. Sed erat leo, malesuada ullamcorper odio vitae, ullamcorper interdum nisl.\n\n    Donec consequat diam at eros porttitor consectetur. Vivamus eu fermentum nunc. Fusce malesuada nunc at imperdiet porttitor. Donec faucibus egestas tempus. Praesent consequat lectus nec magna vestibulum euismod. In maximus, ex ullamcorper porta tristique, mi mi dictum justo, ac sollicitudin nunc diam a sapien. Praesent eleifend ultrices velit, lobortis viverra velit ornare ac. Curabitur quis nunc eget sem blandit pellentesque. Proin a quam tristique, fringilla elit vel, sodales eros. Ut convallis turpis vel mauris porta consequat. Etiam ultricies est ut dapibus facilisis. Praesent mattis odio in volutpat fermentum. Ut eu magna elit. Proin nec convallis dolor, eu dictum velit. Cras sem sapien, blandit sed ante ut, tristique condimentum turpis. Phasellus vestibulum tellus id suscipit sagittis.\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/marketing/marketing.component.ts":
/*!**************************************************!*\
  !*** ./src/app/marketing/marketing.component.ts ***!
  \**************************************************/
/*! exports provided: MarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingComponent", function() { return MarketingComponent; });
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

var MarketingComponent = /** @class */ (function () {
    function MarketingComponent() {
    }
    MarketingComponent.prototype.ngOnInit = function () {
    };
    MarketingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marketing',
            template: __webpack_require__(/*! ./marketing.component.html */ "./src/app/marketing/marketing.component.html"),
            styles: [__webpack_require__(/*! ./marketing.component.css */ "./src/app/marketing/marketing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MarketingComponent);
    return MarketingComponent;
}());



/***/ }),

/***/ "./src/app/media/media.component.css":
/*!*******************************************!*\
  !*** ./src/app/media/media.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGlhL21lZGlhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/media/media.component.html":
/*!********************************************!*\
  !*** ./src/app/media/media.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-10\">\n  <h3>Media</h3>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum semper fermentum. Maecenas rutrum augue a nisl maximus, eu elementum arcu sollicitudin. Vestibulum congue magna vitae accumsan viverra. Praesent ut faucibus tellus, quis laoreet nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam in orci sit amet felis porta tristique. Praesent ut sapien et sapien tincidunt eleifend at vitae magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque finibus nec eros nec malesuada. Morbi id lacus enim. Etiam dapibus tempor enim, ut euismod justo consectetur vitae. Cras ut tellus sed leo euismod blandit. Phasellus non risus felis. Cras dapibus eros vitae turpis sodales consectetur. Quisque convallis aliquam massa at feugiat.\n\n    Quisque non euismod justo. Duis ligula metus, accumsan et dolor vel, bibendum pellentesque nulla. Nulla luctus eros nec neque interdum, nec facilisis lectus dapibus. Duis fringilla orci fermentum lorem malesuada sagittis. Curabitur porttitor dictum tellus porttitor sollicitudin. Cras dictum ultricies erat ut condimentum. Sed erat leo, malesuada ullamcorper odio vitae, ullamcorper interdum nisl.\n\n    Donec consequat diam at eros porttitor consectetur. Vivamus eu fermentum nunc. Fusce malesuada nunc at imperdiet porttitor. Donec faucibus egestas tempus. Praesent consequat lectus nec magna vestibulum euismod. In maximus, ex ullamcorper porta tristique, mi mi dictum justo, ac sollicitudin nunc diam a sapien. Praesent eleifend ultrices velit, lobortis viverra velit ornare ac. Curabitur quis nunc eget sem blandit pellentesque. Proin a quam tristique, fringilla elit vel, sodales eros. Ut convallis turpis vel mauris porta consequat. Etiam ultricies est ut dapibus facilisis. Praesent mattis odio in volutpat fermentum. Ut eu magna elit. Proin nec convallis dolor, eu dictum velit. Cras sem sapien, blandit sed ante ut, tristique condimentum turpis. Phasellus vestibulum tellus id suscipit sagittis.\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/media/media.component.ts":
/*!******************************************!*\
  !*** ./src/app/media/media.component.ts ***!
  \******************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
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

var MediaComponent = /** @class */ (function () {
    function MediaComponent() {
    }
    MediaComponent.prototype.ngOnInit = function () {
    };
    MediaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-media',
            template: __webpack_require__(/*! ./media.component.html */ "./src/app/media/media.component.html"),
            styles: [__webpack_require__(/*! ./media.component.css */ "./src/app/media/media.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MediaComponent);
    return MediaComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  products works!\n</p>\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
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

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SVI\Siddivruddhi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map