import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MovieDataService{

  private baseURL = 'http://127.0.0.1:8080/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })
  };

  constructor(private http: HttpClient) {
  }

  getShowsByName (name : string) : Observable<any> {
    return this.http.get(this.baseURL + `/getshowsbyname?name=`+name,this.httpOptions);
  }

  getTrendingShows () : Observable<any>{
    return this.http.get(this.baseURL + `/topten`,this.httpOptions);
  }

  getMovieById (id : number) : Observable<any>{
    return this.http.get(this.baseURL + `/getmoviedetails?id=`+id,this.httpOptions);
  }

  getTvShowById (id : number) : Observable<any>{
    return this.http.get(this.baseURL + `/gettvshowdetails?id=`+id,this.httpOptions)
  }
}
