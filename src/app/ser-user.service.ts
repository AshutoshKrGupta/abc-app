import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SerUserService {
  private url = "http://jsonplaceholder.typicode.com/users";

  constructor(private http:Http) { }

  getProfiles()
  {
    return this.http.get(this.url).map(response => response.json());
  }
  getProfileById(id)
  {console.log("ser" +  id)
    return this.http.get(this.url + '/'+ id).map(response => response.json());

  }
}
