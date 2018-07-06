import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
 {
  @Output() public Event = new EventEmitter();
 
  public sendmsg()
  {
    // Send the event to parent
    this.Event.emit('Hello Parent');
  }

  constructor() { }

  ngOnInit() {
  }

}
