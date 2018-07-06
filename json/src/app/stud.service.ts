import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student} from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudService 
{
  constructor(private http:HttpClient) 
  {
 
   }
 
   private _url:string = "/assets/data/studentinfo.json";
 
  
 StudentDetails():Observable<student[]>                         //method to return array of student details
 {
   return this.http.get<student[]>(this._url);
 }
 
}
