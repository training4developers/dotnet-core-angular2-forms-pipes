import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

import { Observable } from "rxjs";

import { Widget } from "../models/widget";

// moved the widgets http code to a service so it can be utilized throughout
// the Angular 2 application

@Injectable()
export class Widgets {

    // set headers for requests which include a body
	private readonly headers: Headers = new Headers({
		'Content-Type': 'application/json'
	});
	
    // populate request options with the headers
	private readonly requestOptions: RequestOptions = new RequestOptions({
		headers: this.headers
	});    

    // inject the Http service, and make it a private field
    // on the service
    constructor(private http: Http) { }

    // return all of the widgets
    getAll(): Observable<Widget[]> {
        return this.http.get('/widgets')
            .map(res => res.json());
    }

    // return a widget by id
    get(widgetId: number): Observable<Widget> {
        return this.http.get('/widgets/' + encodeURIComponent(widgetId.toString()))
            .map(res => res.json());
    }

    // insert a new widget, and return the widget which will contain its id
	insert(widget: Widget): Observable<Widget> {
		return this.http.post(`/widgets`, JSON.stringify(widget),
			this.requestOptions).map(res => res.json());
	}

	// only return Observable<Response> when using 204 NoContent for REST service responses
	update(widget: Widget): Observable<Response> {
		return this.http.put(`/widgets/${encodeURIComponent(widget.id.toString())}`,
			JSON.stringify(widget), this.requestOptions);
	}

    // delete a widget by id
	delete(widgetId: number): Observable<Response> {
		return this.http.delete(`/widgets/${encodeURIComponent(widgetId.toString())}`);
	}    
}