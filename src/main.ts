import "./polyfills.ts";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/";
import {environment} from "./environment";
//  AppModule is the entry point of our application.

//  bootstrap the module and set environment
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(environment);
