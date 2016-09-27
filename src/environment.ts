import {enableProdMode, ApplicationRef} from "@angular/core";
import {enableDebugTools, disableDebugTools} from "@angular/platform-browser";
import {configuration} from "./configuration";


// Environment Providers
let PROVIDERS: any[] = [
  // common env directives
];

//  just return passed object
//  check https://www.typescriptlang.org/docs/handbook/generics.html
let _environment = function identity<T>(value: T): T
{
  return value;
};

if (configuration.production)
{
  disableDebugTools();
  enableProdMode();

  // Production
  PROVIDERS = [
    ...PROVIDERS,
    // custom providers in production
  ];

}

else
{
  //  angular tools
  //  https://github.com/angular/angular/blob/2.0.1/TOOLS.md
  //  stolen from webpack starter
  _environment = (modRef: any) =>
  {
    const appRef = modRef.injector.get(ApplicationRef);
    const cmpRef = appRef.components[0];

    let _ng = (<any>window).ng;
    enableDebugTools(cmpRef);
    (<any>window).ng.probe = _ng.probe;
    (<any>window).ng.coreTokens = _ng.coreTokens;
    return modRef;
  };

  // Development
  PROVIDERS = [
    ...PROVIDERS,
    // custom providers in development
  ];

}

export const environment = _environment;
export const ENV_PROVIDERS = [
  ...PROVIDERS
];
