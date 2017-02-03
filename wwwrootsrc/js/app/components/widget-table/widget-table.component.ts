import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Widgets } from "../../services/widgets";
import { Widget } from "../../models/widget";

// The Component Decorator configures this class
// to serve as a component in the Angular 2 application
@Component({
    // Used to identify the element the component will be applied to in
    // the DOM structure of the web page    
    selector: "widget-table",
    // Loads the component's specific styles
    template: require("./widget-table.component.html"),
    // Loads the component's template
    styles: [ require("./widget-table.component.scss") ]
})
export class WidgetTable implements OnInit {

    // private field to hold an array of widgets
    private widgets: Widget[] = [];

    constructor(
        private widgetsSvc: Widgets, // the widgets data service
        private router: Router, // the router to navigate to other routes
    ) { }

    // retrieve all of the widgets from the REST service when
    // the component is loaded
    ngOnInit() {
        this.widgetsSvc.getAll()
            .subscribe(widgets => this.widgets = widgets);
    }

    // navigate to the widget view component
    viewWidget(widgetId: number) {
        this.router.navigate(['widget', widgetId]);
    }

    // navigate to the widget edit component in update mode
    editWidget(widgetId: number) {
        this.router.navigate(['widget', widgetId, "edit"]);
    }

    // navigate to the widget edit component in insert mode
    createWidget() {
        this.router.navigate(['widget', "create"]);
    }
}