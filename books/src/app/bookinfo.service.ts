import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookinfoService {

  constructor() { }


 BookDetails()
{
  return [
    {"BookName":"Programming in c",  "Price":600,  "Author": "Ajay Mittal",        "Pages": 737},
    {"BookName":"Core Java",         "Price":600,  "Author": "Dr.R.Nageswara Rao", "Pages":683},
    {"BookName":"Ng-Book",           "Price":4000, "Author": "Ari Lerner",         "Pages": 683},
    {"BookName":"Angular 5",         "Price":200,  "Author": "Asim Hussain",       "Pages": 846},
     ];
}
}
