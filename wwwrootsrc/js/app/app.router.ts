import { Route, RouterModule } from '@angular/router';

import { WidgetTable } from './components/widget-table/widget-table.component';
import { WidgetView } from './components/widget-view/widget-view.component';
import { WidgetEdit } from './components/widget-edit/widget-edit.component';

// path is the url
// component is the component to load for the specified path
// :widgetId is the parameter
const appRoutes: Route[] = [
    { path: 'widget/create', component: WidgetEdit },
    { path: 'widget/:widgetId/edit', component: WidgetEdit },
    { path: 'widget/:widgetId', component: WidgetView },
	{ path: '', component: WidgetTable },
];

// construct a customized router module with the custom routes
// use the HTML5 History API instead of hashes for routing
export const AppRouterModule = RouterModule.forRoot(appRoutes, { useHash: false });