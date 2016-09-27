import {Injectable} from '@angular/core';
import {MENU} from "./sln-sidebar.menu";

@Injectable()
export class SlnSidebarService
{
  public isOpen: boolean = false;
  protected _menu: Array<any> = MENU;

  constructor()
  {
  }

  public get menu(): Array<any>
  {
    return this._menu.concat();
  }

}
