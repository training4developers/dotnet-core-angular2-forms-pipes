webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	// Used to bootstrap the application in a web browser environment
	var platform_browser_dynamic_1 = __webpack_require__(2);
	// The function enableProdMode switches the application to prod mode when invoked
	var core_1 = __webpack_require__(4);
	// in proc mode special development and debugging
	// capabilities are turned off to improve performance
	if (String(process.env['ENV']).toLowerCase() === 'production') {
	    core_1.enableProdMode();
	}
	// import the AppModule
	var app_module_1 = __webpack_require__(24);
	// bootstrap the application from the AppModule
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	// The NgModule decorator is use to decorate classes to identify
	// them as module classes in the Angular 2 application
	var core_1 = __webpack_require__(4);
	// Imports the Browser Module to run the Angular 2 application in
	// a web browser environment. At the moment, Angular 2 applications
	// typically run in a web browser environment, but this is expected
	// to expand to native apps, such as iOS apps, in the near future
	// meaning Angular 2 will not be limited to a web browser environment,
	// and other platform modules will be available.
	var platform_browser_1 = __webpack_require__(22);
	// Imports the Forms module to provide access to NgModel to
	// perform two-way data binding between form controls and
	// the component data
	var forms_1 = __webpack_require__(335);
	// Imports the Http module to provide access to AJAX request
	// to REST services
	var http_1 = __webpack_require__(25);
	// Imports the routing configuration for the application
	var app_router_1 = __webpack_require__(26);
	// Imports the components to be registered with the application
	// so they can be referenced in templates and by the router
	var app_component_1 = __webpack_require__(69);
	var widget_table_component_1 = __webpack_require__(59);
	var widget_view_component_1 = __webpack_require__(63);
	var widget_edit_component_1 = __webpack_require__(66);
	// Imports the pipes to be registered with the application
	// so they can be reference in the templates
	var capitalize_pipe_1 = __webpack_require__(634);
	// Imports the Widgets Service so it can be registered with the Application Module
	var widgets_1 = __webpack_require__(60);
	// Imports the global styles for the application
	// Angular 2 apps have two kinds of styles, global and component-specific
	// styles. Global styles are referenced in the App Module, while
	// component specific styles are referenced via the styles option on
	// each component's decorator configuration   
	__webpack_require__(72);
	// Decorates the class to be an Angular 2 module
	// Each Angular 2 application has a top-level AppModule
	// from which the application bootstraps itself
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        // import modules needed for the application
	        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_router_1.AppRouterModule],
	        // Make the App, Widget Table, and Widget View components available
	        // for use in the templates
	        declarations: [app_component_1.AppComponent, widget_table_component_1.WidgetTable, widget_view_component_1.WidgetView, widget_edit_component_1.WidgetEdit, capitalize_pipe_1.CapitalizePipe],
	        // Start the application from the App component
	        bootstrap: [app_component_1.AppComponent],
	        // makes the service available to the component
	        providers: [widgets_1.Widgets],
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(27);
	var widget_table_component_1 = __webpack_require__(59);
	var widget_view_component_1 = __webpack_require__(63);
	var widget_edit_component_1 = __webpack_require__(66);
	// path is the url
	// component is the component to load for the specified path
	// :widgetId is the parameter
	var appRoutes = [
	    { path: 'widget/create', component: widget_edit_component_1.WidgetEdit },
	    { path: 'widget/:widgetId', component: widget_view_component_1.WidgetView },
	    { path: 'widget/:widgetId/edit', component: widget_edit_component_1.WidgetEdit },
	    { path: '', component: widget_table_component_1.WidgetTable },
	];
	// construct a customized router module with the custom routes
	// use the HTML5 History API instead of hashes for routing
	exports.AppRouterModule = router_1.RouterModule.forRoot(appRoutes, { useHash: false });


/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(27);
	var widgets_1 = __webpack_require__(60);
	var WidgetTable = (function () {
	    function WidgetTable(widgetsSvc, router) {
	        this.widgetsSvc = widgetsSvc;
	        this.router = router;
	        // private fields to hold widgets
	        this.widgets = [];
	    }
	    // retrieve all of the widgets from the REST service when
	    // the component is loaded
	    WidgetTable.prototype.ngOnInit = function () {
	        var _this = this;
	        this.widgetsSvc.getAll()
	            .subscribe(function (widgets) { return _this.widgets = widgets; });
	    };
	    // navigate to the widget view component
	    WidgetTable.prototype.viewWidget = function (widgetId) {
	        this.router.navigate(['widget', widgetId]);
	    };
	    // navigate to the widget edit component in update mode
	    WidgetTable.prototype.editWidget = function (widgetId) {
	        this.router.navigate(['widget', widgetId, "edit"]);
	    };
	    // navigate to the widget edit component in insert mode
	    WidgetTable.prototype.createWidget = function () {
	        this.router.navigate(['widget', "create"]);
	    };
	    return WidgetTable;
	}());
	WidgetTable = __decorate([
	    core_1.Component({
	        selector: "widget-table",
	        template: __webpack_require__(61),
	        styles: [__webpack_require__(62)]
	    }),
	    __metadata("design:paramtypes", [widgets_1.Widgets,
	        router_1.Router])
	], WidgetTable);
	exports.WidgetTable = WidgetTable;


/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(25);
	// moved the widgets http code to a service so it can be utilized throughout
	// the Angular 2 application
	var Widgets = (function () {
	    // inject the Http service, and make it a private field
	    // on the service
	    function Widgets(http) {
	        this.http = http;
	        // set headers for requests which include a body
	        this.headers = new http_1.Headers({
	            'Content-Type': 'application/json'
	        });
	        // populate request options with the headers
	        this.requestOptions = new http_1.RequestOptions({
	            headers: this.headers
	        });
	    }
	    // return all of the widgets
	    Widgets.prototype.getAll = function () {
	        return this.http.get('/widgets')
	            .map(function (res) { return res.json(); });
	    };
	    // return a widget by id
	    Widgets.prototype.get = function (widgetId) {
	        return this.http.get('/widgets/' + encodeURIComponent(widgetId.toString()))
	            .map(function (res) { return res.json(); });
	    };
	    // insert a new widget, and return the widget which will contain its id
	    Widgets.prototype.insert = function (widget) {
	        return this.http.post("/widgets", JSON.stringify(widget), this.requestOptions).map(function (res) { return res.json(); });
	    };
	    // only return Observable<Response> when using 204 NoContent for REST service responses
	    Widgets.prototype.update = function (widget) {
	        return this.http.put("/widgets/" + encodeURIComponent(widget.id.toString()), JSON.stringify(widget), this.requestOptions);
	    };
	    // delete a widget by id
	    Widgets.prototype.delete = function (widgetId) {
	        return this.http.delete("/widgets/" + encodeURIComponent(widgetId.toString()));
	    };
	    return Widgets;
	}());
	Widgets = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], Widgets);
	exports.Widgets = Widgets;


/***/ },

/***/ 61:
/***/ function(module, exports) {

	module.exports = "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Color</th>\n      <th>Size</th>\n      <th>Quantity</th>\n      <th>Price</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n  <tbody>\n   <tr *ngFor=\"let widget of widgets\">\n     <td>{{widget.name}}</td>\n     <td class=\"text-center\">{{widget.color | capitalize}}</td>\n     <td class=\"text-center\">{{widget.size | capitalize}}</td>\n     <td class=\"text-right\">{{widget.quantity}}</td>\n     <td class=\"text-right\">{{widget.price | currency:'USD':true:'1.2-2'}}</td>\n     <td class=\"text-center\">\n         <button type=\"button\" (click)=\"viewWidget(widget.id)\">View</button>\n         <button type=\"button\" (click)=\"editWidget(widget.id)\">Edit</button>\n     </td>\n    </tr>\n   </tbody>\n</table>\n<button type=\"button\" (click)=\"createWidget()\">Create Widget</button>";

/***/ },

/***/ 62:
/***/ function(module, exports) {

	module.exports = "th {\n  text-align: center; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n"

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(27);
	var widgets_1 = __webpack_require__(60);
	var WidgetView = (function () {
	    function WidgetView(widgets, // the widgets data service
	        route, // the current route
	        router // the router to navigate to other routes
	    ) {
	        this.widgets = widgets;
	        this.route = route;
	        this.router = router; // the router to navigate to other routes
	    }
	    // load the widget with the route param once the component
	    // has been loaded
	    WidgetView.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.subscribe(function (params) {
	            return _this.widgets.get(params['widgetId'])
	                .subscribe(function (widget) { return _this.widget = widget; });
	        });
	    };
	    // navigate to the widget view component
	    WidgetView.prototype.editWidget = function (widgetId) {
	        this.router.navigate(['widget', widgetId, "edit"]);
	    };
	    // navigate to the widget table
	    WidgetView.prototype.returnToList = function () {
	        this.router.navigateByUrl('/');
	    };
	    return WidgetView;
	}());
	WidgetView = __decorate([
	    core_1.Component({
	        template: __webpack_require__(64),
	        styles: [__webpack_require__(65)]
	    }),
	    __metadata("design:paramtypes", [widgets_1.Widgets,
	        router_1.ActivatedRoute,
	        router_1.Router // the router to navigate to other routes
	    ])
	], WidgetView);
	exports.WidgetView = WidgetView;


/***/ },

/***/ 64:
/***/ function(module, exports) {

	module.exports = "<div>Name: {{widget?.name}}</div>\n<div>Description: {{widget?.description}}</div>\n<div>Color: {{widget?.color}}</div>\n<div>Size: {{widget?.size}}</div>\n<div>Quantity: {{widget?.quantity}}</div>\n<div>Price: {{widget?.price}}</div>\n<button type=\"button\" (click)=\"editWidget(widget.id)\">Edit Widget</button>\n<button type=\"button\" (click)=\"returnToList()\">Return to List</button>\n";

/***/ },

/***/ 65:
/***/ function(module, exports) {

	module.exports = ""

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(27);
	var widgets_1 = __webpack_require__(60);
	var WidgetEdit = (function () {
	    function WidgetEdit(widgets, route, router) {
	        this.widgets = widgets;
	        this.route = route;
	        this.router = router;
	        this.widget = {};
	    }
	    WidgetEdit.prototype.ngOnInit = function () {
	        var _this = this;
	        // if a widget id param is supplied, load the widget
	        this.route.params.subscribe(function (params) {
	            if (params["widgetId"]) {
	                _this.widgets.get(Number(params["widgetId"])).subscribe(function (widget) {
	                    return _this.widget = widget;
	                });
	            }
	        });
	    };
	    WidgetEdit.prototype.saveWidget = function (widget) {
	        var _this = this;
	        // if the widget has an id, then update it; otherwise, insert it
	        // after saving, return to the widget table
	        if (this.widget.id) {
	            this.widgets.update(this.widget).subscribe(function () {
	                return _this.router.navigateByUrl("/");
	            });
	        }
	        else {
	            this.widgets.insert(this.widget).subscribe(function () {
	                return _this.router.navigateByUrl("/");
	            });
	        }
	    };
	    // delete the widget with the specified id, then return
	    // to the table of widgets
	    WidgetEdit.prototype.deleteWidget = function (widgetId) {
	        var _this = this;
	        this.widgets.delete(widgetId)
	            .subscribe(function () { return _this.router.navigateByUrl("/"); });
	    };
	    // return to the table of widgets
	    WidgetEdit.prototype.returnToList = function () {
	        this.router.navigateByUrl("/");
	    };
	    return WidgetEdit;
	}());
	WidgetEdit = __decorate([
	    core_1.Component({
	        selector: "widget-edit",
	        template: __webpack_require__(67),
	        styles: [__webpack_require__(68)]
	    }),
	    __metadata("design:paramtypes", [widgets_1.Widgets,
	        router_1.ActivatedRoute,
	        router_1.Router])
	], WidgetEdit);
	exports.WidgetEdit = WidgetEdit;


/***/ },

/***/ 67:
/***/ function(module, exports) {

	module.exports = "<form>\n\n    <div>\n        <label for=\"widget-name-input\">Name:</label>\n        <input type=\"text\" id=\"widget-name-input\"\n            name=\"widgetNameInput\" [(ngModel)]=\"widget.name\">\n    </div>\n    <div>\n        <label for=\"widget-description-input\">Description:</label>\n        <input type=\"text\" id=\"widget-description-input\"\n            name=\"widgetDescriptionInput\" [(ngModel)]=\"widget.description\">\n    </div>\n    <div>\n        <label for=\"widget-color-input\">Color:</label>\n        <input type=\"text\" id=\"widget-color-input\"\n            name=\"widgetColorInput\" [(ngModel)]=\"widget.color\">\n    </div>\n    <div>\n        <label for=\"widget-size-input\">Size:</label>\n        <input type=\"text\" id=\"widget-size-input\"\n            name=\"widgetSizeInput\" [(ngModel)]=\"widget.size\">\n    </div>\n    <div>\n        <label for=\"widget-quantity-input\">Quantity:</label>\n        <input type=\"text\" id=\"widget-quantity-input\"\n            name=\"widgetQuantityInput\" [(ngModel)]=\"widget.quantity\">\n    </div>\n    <div>\n        <label for=\"widget-price-input\">Price:</label>\n        <input type=\"text\" id=\"widget-price-input\"\n            name=\"widgetPriceInput\" [(ngModel)]=\"widget.price\">\n    </div>\n\n    <button type=\"button\" (click)=\"saveWidget(widget)\">Save</button>\n    <button type=\"button\" *ngIf=\"widget.id\" (click)=\"deleteWidget(widget.id)\">Delete</button>\n    <button type=\"button\" (click)=\"returnToList()\">Return to List</button>\n\n</form>";

/***/ },

/***/ 68:
/***/ function(module, exports) {

	module.exports = ""

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	// imports the Component decorator from the core
	// Angular 2 module
	var core_1 = __webpack_require__(4);
	// import the Widgets service for getting widgets from the
	// REST service
	var widgets_1 = __webpack_require__(60);
	// The Component Decorator configures this class
	// to serve as a component in the Angular 2 application
	var AppComponent = (function () {
	    // inject the http service into the component
	    // marked as private so http will be available
	    // as private field on the component instance
	    function AppComponent(widgetsSvc) {
	        this.widgetsSvc = widgetsSvc;
	        // array of widgets to display in the table
	        this.widgets = null;
	        // use the current year for the copyright year
	        this.copyright = "Copyright " + (new Date()).getFullYear() + " Widget Application";
	    }
	    // runs when the component is instantiated
	    AppComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        // retrieve the widgets from the REST services
	        this.widgetsSvc.getAll()
	            .subscribe(function (widgets) {
	            _this.widgets = widgets;
	        });
	    };
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        // Used to identify the element the component will be applied to in
	        // the DOM structure of the web page
	        selector: 'main',
	        // Loads the component's specific styles
	        styles: [__webpack_require__(70)],
	        // Loads the component's template
	        template: __webpack_require__(71),
	    }),
	    __metadata("design:paramtypes", [widgets_1.Widgets])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },

/***/ 70:
/***/ function(module, exports) {

	module.exports = "h1 {\n  color: blue; }\n"

/***/ },

/***/ 71:
/***/ function(module, exports) {

	module.exports = "<header>\n    <h1>Widget Application</h1>\n</header>\n<div>\n    <router-outlet></router-outlet>\n</div>\n<footer>\n    <small>{{copyright}}</small>\n</footer>";

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(73);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(75)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./styles.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(74)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  margin: 10px; }\n", ""]);
	
	// exports


/***/ },

/***/ 634:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(4);
	var CapitalizePipe = (function () {
	    function CapitalizePipe() {
	    }
	    CapitalizePipe.prototype.transform = function (value) {
	        return value.charAt(0).toUpperCase() + value.slice(1);
	    };
	    return CapitalizePipe;
	}());
	CapitalizePipe = __decorate([
	    core_1.Pipe({ name: 'capitalize' })
	], CapitalizePipe);
	exports.CapitalizePipe = CapitalizePipe;


/***/ }

});
//# sourceMappingURL=app.js.map