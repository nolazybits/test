import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {HOME_ROUTES} from "./home/home.routing";
import {ANALYTICS_ROUTES} from "./analytics/analytics.routing";
import {INBOX_ROUTES} from "./inbox/inbox.routing";
import {CALENDAR_ROUTES} from "./calendar/calendar.routing";
import {TIME_MANAGEMENT_ROUTES} from "./time-management/time-management.routing";
import {SETTINGS_ROUTES} from "./settings/settings.routing";

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: HOME_ROUTES[0].path
      },
      ...HOME_ROUTES,
      ...TIME_MANAGEMENT_ROUTES,
      ...INBOX_ROUTES,
      ...CALENDAR_ROUTES,
      ...ANALYTICS_ROUTES,
      ...SETTINGS_ROUTES
    ]
  }
];
