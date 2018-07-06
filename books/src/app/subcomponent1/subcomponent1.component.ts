import { Component, OnInit } from '@angular/core';
import { BookinfoService } from '../bookinfo.service';

@Component({
  selector: 'app-subcomponent1',
  templateUrl: './subcomponent1.component.html',
  styleUrls: ['./subcomponent1.component.css']
})
export class Subcomponent1Component implements OnInit {

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
