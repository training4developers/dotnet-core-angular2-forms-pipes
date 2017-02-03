import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Widgets } from "../../services/widgets";
import { Widget } from "../../models/widget";

@Component({
    selector: "widget-edit",
    template: require("./widget-edit.component.html"),
    styles: [ require("./widget-edit.component.scss") ]
})
export class WidgetEdit implements OnInit {

    private widget: Widget = {} as Widget;

    constructor(
        private widgets: Widgets,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    public ngOnInit() {
        // if a widget id param is supplied, load the widget
        this.route.params.subscribe(params => {

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
