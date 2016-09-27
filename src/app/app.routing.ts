import {Routes} from "@angular/router";

export const routes: Routes = [
  {path: '', loadChildren: 'app/features/dashboard/dashboard.module#DashboardModule'}
];
