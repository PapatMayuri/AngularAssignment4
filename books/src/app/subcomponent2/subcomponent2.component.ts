import { Component, OnInit } from '@angular/core';
import { BookinfoService } from '../bookinfo.service';


@Component({
  selector: 'app-subcomponent2',
  templateUrl: './subcomponent2.component.html',
  styleUrls: ['./subcomponent2.component.css']
})
export class Subcomponent2Component implements OnInit {

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
