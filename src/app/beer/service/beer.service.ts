import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

/**
 * Beer data
 */
export class Beer {
  constructor(
    public id: number,
    public name: string,
    public alcoholContent: number,
    public description?: string,
    public ibu?: number) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  /**
   * Endpoint of a backend
   */
  private readonly ENDPOINT = environment.backendUrl + "/beers";

  /**
   * Constructor that is used to inject required resources
   *
   * @param httpClient to send HTTP requests
   */
  constructor(private httpClient: HttpClient) {
  }

  /**
   * Fetch beer by it's id
   *
   * @param id of beer that is requested
   * @return observable fof beer
   */
  getBeer(id: number): Observable<any> {
    return this.httpClient.get<Beer>(this.ENDPOINT + "/" + id);
  }

  /**
   * Fetch all beers from backend
   *
   * @return Observable of beers
   */
  getAll(): Observable<any> {
    return this.httpClient.get<any>(this.ENDPOINT);
  }

  /**
   * Delete beer with provided id
   *
   * @param id of beer to remove
   * @return Observable of a request
   */
  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.ENDPOINT + "/" + id);
  }

  /**
   * Create new beer
   *
   * @param beer data that is send to backend
   * @return Observable of a request
   */
  post(beer: Beer): Observable<any> {
    return this.httpClient.post(this.ENDPOINT, beer);
  }

  /**
   * Modify beer with provided id and data
   *
   * @param beer data to modify
   * @param id of a beer to modify
   * @return Observable of a request
   */
  put(beer: Beer, id: number): Observable<any> {
    return this.httpClient.put(this.ENDPOINT + "/" + id, beer);
  }
}
