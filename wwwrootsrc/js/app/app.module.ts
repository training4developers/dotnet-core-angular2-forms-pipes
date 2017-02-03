// The NgModule decorator is use to decorate classes to identify
// them as module classes in the Angular 2 application
import { NgModule } from '@angular/core';

// Imports the Browser Module to run the Angular 2 application in
// a web browser environment. At the moment, Angular 2 applications
// typically run in a web browser environment, but this is expected
// to expand to native apps, such as iOS apps, in the near future
// meaning Angular 2 will not be limited to a web browser environment,
// and other platform modules will be available.
import { BrowserModule } from '@angular/platform-browser';

// Imports the Forms module to provide access to NgModel to
// perform two-way data binding between form controls and
// the component data
import { FormsModule } from '@angular/forms';

// Imports the Http module to provide access to AJAX request
// to REST services
import { HttpModule } from '@angular/http';

// Imports the routing configuration for the application
import { AppRouterModule } from './app.router'; 

// Imports the components to be registered with the application
// so they can be referenced in templates and by the router
import { AppComponent } from './app.component';
import { WidgetTable } from "./components/widget-table/widget-table.component";
import { WidgetView } from "./components/widget-view/widget-view.component";
import { WidgetEdit } from "./components/widget-edit/widget-edit.component";

// Imports the pipes to be registered with the application
// so they can be reference in the templates
import { CapitalizePipe } from "./pipes/capitalize.pipe";

// Imports the Widgets Service so it can be registered with the Application Module
import { Widgets } from "./services/widgets";

// Imports the global styles for the application
// Angular 2 apps have two kinds of styles, global and component-specific
// styles. Global styles are referenced in the App Module, while
// component specific styles are referenced via the styles option on
// each component's decorator configuration   
import '../../css/styles.scss';

// Decorates the class to be an Angular 2 module
// Each Angular 2 application has a top-level AppModule
// from which the application bootstraps itself
@NgModule({
    // import modules needed for the application
    imports: [ BrowserModule, FormsModule, HttpModule, AppRouterModule ],

    // Make the App, Widget Table, and Widget View components available
    // for use in the templates
    declarations: [ AppComponent, WidgetTable, WidgetView, WidgetEdit, CapitalizePipe ],

    // Start the application from the App component
    bootstrap: [ AppComponent ],

    // makes the service available to the component
    providers: [ Widgets ],    
})
export class AppModule { }