import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routing";
import {SearchService} from "./shared/sln-top-nav/shared/search.service";
import {UserService} from "./shared/api/user.service";

//  read
//  https://angular.io/docs/ts/latest/guide/architecture.html#!#modules
//  https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SearchService,
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule
{
}
