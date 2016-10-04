import {Component, OnInit} from "@angular/core";
import {SearchService} from "./shared/search.service";
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'sln-top-nav',
  templateUrl: './sln-top-nav.component.html',
  styleUrls: ['./sln-top-nav.component.scss']
})

export class SlnTopNavComponent implements OnInit
{
  public status:{isOpen:boolean} = {isOpen: false};
  public searchResults: Array<string>;
  public searchInputControl: FormControl = new FormControl('');
  public avatarURL: string;

  //  this should have its own type in the shared core
  public alerts: {type: string, title: string}[];

  constructor( private searchService: SearchService)
  {
    this.avatarURL = 'https://s3.amazonaws.com/uifaces/faces/twitter/_everaldo/48.jpg';
    this.alerts = [
      {type: 'default', title: 'Default'},
      {type: 'primary', title: 'Primary'},
      {type: 'success', title: 'Success'},
      {type: 'info', title: 'Info'},
      {type: 'warning', title: 'Warning'},
      {type: 'danger', title: 'Danger'},
    ];
  }

  ngOnInit()
  {
    this.searchInputControl.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(searchInput => this.searchService.search(searchInput))
      .subscribe((result: Array<string>) =>
      {
        this.searchResults = result;
        if (this.searchResults && this.searchResults.length > 0)
        {
          this.showSearchResults();
        }
        else
        {
          this.hideSearchResults();
        }
      });
  }

  public showSearchResults(): void
  {
    this.status.isOpen = true;
  }

  public hideSearchResults(): void
  {
    this.status.isOpen = false;
  }
}
