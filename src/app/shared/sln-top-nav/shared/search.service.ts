import {Injectable} from "@angular/core";
import {Jsonp, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class SearchService {

  constructor(private jsonp: Jsonp) { }

  search(term: string) : Observable<Array<string>>
  {
    var search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
      .get('https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
      .map((request) => request.json()[1]);
  }
}
