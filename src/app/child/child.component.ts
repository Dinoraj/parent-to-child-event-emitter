import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() SendCount = new EventEmitter<any>();
  upto:any
  constructor() {}
  array:any;
  ngOnInit() {
   
  }
  obj: any;
  message:any;
  alert:boolean = false;
  count: number = 0;
  async decrease() {
    this.count -= 1;
    await this.send();
  }
  async increase() {
    this.count += 1;
    await this.send();
  }

  send() {
    this.obj = [
      {
        pastCount: this.count - 1,
        presentCount: this.count,
        id: this.count * 1000,
      },
    ];
    this.SendCount.emit(this.obj);
  }

  Message(val:any) {
    this.message = val;
    this.alert = true;
    setTimeout(()=>{
      this.alert =false;
    }, 3000)
console.log(val);
  }

}
