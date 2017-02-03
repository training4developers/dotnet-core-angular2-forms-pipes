import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Widgets } from "../../services/widgets";
import { Widget } from "../../models/widget";

@Component({
    template: require('./widget-view.component.html'),
    styles: [ require('./widget-view.component.scss') ]
})
export class WidgetView implements OnInit {

    // private field of the widget to view
    public widget: Widget;

    constructor(
        private widgets: Widgets, // the widgets data service
        private route: ActivatedRoute, // the current route
        private router: Router, // the router to navigate to other routes
    ) { }

    // load the widget with the route param once the component
    // has been loaded
    public ngOnInit() {
        this.route.params.subscribe(params =>
            this.widgets.get(params['widgetId'])
                .subscribe(widget => this.widget = widget));
    }

    // navigate to the widget view component
    editWidget(widgetId: number) {
        this.router.navigate(['widget', widgetId, "edit"]);
    }

    // navigate to the widget table
    public returnToList() {
        this.router.navigateByUrl('/');
    }

}