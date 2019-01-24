import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {
 private url:string="https://reqres.in/api/users/2"
 private urldel:string="http://jsonplaceholder.typicode.com/photos";
  constructor(private http:HttpClient) { }
gettingdata(){
  return  this.http.get(this.url );
  }
postdata(name):Observable<any>{
    return this.http.post(this.url,name);
  }
  deletedata(arrs):Observable<any>{
    return this.http.delete(this.urldel + '/' + arrs.id);
  }
    putdata(name):Observable<any>{
    return this.http.put(this.url,name);
  }
  patchdata(name):Observable<any>{
    return this.http.patch(this.url,name);
  }
}
