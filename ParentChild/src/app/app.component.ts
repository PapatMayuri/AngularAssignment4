import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
       public message ="hello child";                //msg from parent to child
       public msg;                                   //msg holder for parent from child
}
