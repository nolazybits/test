import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";
import {DashboardRoutes} from "./dashboard.routing";
import {SlnTopNavComponent} from "../../shared/sln-top-nav/sln-top-nav.component";
import {SlnSidebarComponent} from "../../shared/sln-sidebar/sln-sidebar.component";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {TimeManagementComponent} from "./time-management/time-management.component";
import {InboxComponent} from "./inbox/inbox.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {AnalyticsComponent} from "./analytics/analytics.component";
import {SettingsComponent} from "./settings/settings.component";
import {DropdownModule} from "ng2-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CardChartComponent } from './home/shared/card-chart/card-chart.component';
import {ChartModule} from "angular2-highcharts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(DashboardRoutes),
    DropdownModule,
    ChartModule
  ],
  declarations: [
    DashboardComponent,
    SlnTopNavComponent,
    SlnSidebarComponent,
    HomeComponent,
    TimeManagementComponent,
    InboxComponent,
    CalendarComponent,
    AnalyticsComponent,
    SettingsComponent,
    CardChartComponent
  ],
  exports: [
    DashboardComponent,
    SlnTopNavComponent,
    SlnSidebarComponent
  ]
})

export class DashboardModule
{
}

