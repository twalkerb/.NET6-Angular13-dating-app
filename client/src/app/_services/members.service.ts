import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

import { Member } from '../_models/member';




@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
    })
  }

  constructor(private http: HttpClient) { }

  
  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'users', this.httpOptions);
  }
  getMember(username: string) {
    return this.http.get<Member[]>(this.baseUrl + 'users/' + username, this.httpOptions);
  }

}
