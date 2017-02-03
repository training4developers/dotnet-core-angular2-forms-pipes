import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Widgets } from "../../services/widgets";
import { Widget } from "../../models/widget";

interface SelectOption {
    value: string,
    label: string,
}

@Component({
    selector: "widget-edit",
    template: require("./widget-edit.component.html"),
    styles: [require("./widget-edit.component.scss")]
})
export class WidgetEdit implements OnInit {

    // the widget to modify in the form
    private widget: Widget = { color: "", size: "", quantity: 0, price: 0 } as Widget;

    // options for drop downs
    private colors: SelectOption[] = [
        { value: "red", label: "Red" },
        { value: "blue", label: "Blue" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
        { value: "orange", label: "Orange" },
        { value: "purple", label: "Purple" },
    ];

    private sizes: SelectOption[] = [
        { value: "tiny", label: "Tiny" },
        { value: "small", label: "Small" },
        { value: "medium", label: "Medium" },
        { value: "large", label: "Large" },
        { value: "huge", label: "Huge" },
    ];

    constructor(
        private widgets: Widgets, // the widgets data service
        private route: ActivatedRoute, // the current route
        private router: Router, // the router to navigate to other routes
    ) { }

    public ngOnInit() {

        // if a widget id param is supplied, load the widget
        this.route.params.subscribe(params => {

            // check to see if a widget id has been specified, if it had,
            // then load the widget
            if (params["widgetId"]) {
                this.widgets.get(Number(params["widgetId"])).subscribe(widget =>
                    this.widget = widget);
            }

        });
    }

    public saveWidget(widget: Widget) {

        // if the widget has an id, then update it; otherwise, insert it
        // after saving, return to the widget table
        if (this.widget.id) {
            this.widgets.update(this.widget).subscribe(() =>
                this.router.navigateByUrl("/"));
        } else {
            this.widgets.insert(this.widget).subscribe(() =>
                this.router.navigateByUrl("/"));
        }

    }

    // delete the widget with the specified id, then return
    // to the table of widgets
    public deleteWidget(widgetId: number) {
        this.widgets.delete(widgetId)
            .subscribe(() => this.router.navigateByUrl("/"));
    }

    // return to the table of widgets
    public returnToList() {
        this.router.navigateByUrl("/");
    }
}
