import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Widgets } from "../../services/widgets";
import { Widget } from "../../models/widget";

@Component({
    selector: "widget-table",
    template: require("./widget-table.component.html"),
    styles: [ require("./widget-table.component.scss") ]
})
export class WidgetTable implements OnInit {

    // private fields to hold widgets
    private widgets: Widget[] = [];

    constructor(
        private widgetsSvc: Widgets,
        private router: Router
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