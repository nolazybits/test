import {Component, OnInit} from "@angular/core";
import {SlnSidebarService} from "./sln-sidebar.service";

@Component({
  selector: 'sln-sidebar',
  templateUrl: './sln-sidebar.component.html',
  styleUrls: ['./sln-sidebar.component.scss'],
  providers: [SlnSidebarService]
})

//  TODO this component could be split into the menu and it's items, and have submenus
export class SlnSidebarComponent implements OnInit
{

  public isOpen: boolean;
  public menuItems: Array<any>;

  constructor(sidebarService: SlnSidebarService)
  {
    this.isOpen = sidebarService.isOpen;
    this.menuItems = sidebarService.menu;
  }

  public toggleSideBar(): void
  {
    this.isOpen = !this.isOpen;
  }

  public closeSideBar(): void
  {
    this.isOpen = false;
  }

  public openSideBar(): void
  {
    this.isOpen = false;
  }


  ngOnInit()
  {
  }

}
