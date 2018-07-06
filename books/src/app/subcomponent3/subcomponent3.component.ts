import { Component, OnInit } from '@angular/core';
import { BookinfoService } from '../bookinfo.service';


@Component({
  selector: 'app-subcomponent3',
  templateUrl: './subcomponent3.component.html',
  styleUrls: ['./subcomponent3.component.css']
})
export class Subcomponent3Component implements OnInit
 {
  public book = [];

  // Add instance of Service in constructor
  constructor(private bookservice:BookinfoService)
  {
  }

  // Call the service method once
  ngOnInit() 
  {
    this.book = this.bookservice.BookDetails();
  }


}
