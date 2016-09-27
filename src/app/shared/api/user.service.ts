import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable()
export class UserService
{

  /**
   * Creates a new UserService to get random users
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http)
  {
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {User[]} The Observable for the HTTP request.
   */
  getRandoms(): Observable<User>
  {
    return Observable.range(0,10)
      .delay(400)
      .timeInterval()
      .flatMap( x => {
        return this.http.get('http://uifaces.com/api/v1/random')
          .map((res: Response) => <User> res.json())
          .catch(this.handleError);
      });
  }

  /**
   * Handle HTTP error
   */
  private handleError(error: any)
  {
    // Real basic
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
