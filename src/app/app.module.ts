import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Inject, OpaqueToken } from "@angular/core";
import { HttpModule, JsonpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routing";
import { SearchService } from "./shared/sln-top-nav/shared/search.service";
import { UserService } from "./shared/api/user.service";
import { APP_BASE_HREF } from "@angular/common";

//  read
//  https://angular.io/docs/ts/latest/guide/architecture.html#!#modules
//  https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#
@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers   : [
    SearchService,
    UserService,
    {provide: APP_BASE_HREF, useValue: window['_app_base'] || '/'}
  ],
  bootstrap   : [AppComponent]
})

export class AppModule
{
  constructor()
  {
  }
}
