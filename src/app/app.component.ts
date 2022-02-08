import { Component, VERSION, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  answer: any;
  upto:any;
   @ViewChild(ChildComponent) child :ChildComponent;
message: any;
childMsg:boolean = false;
  fromChild(e: any) {
    console.log(e);
    this.answer = e;
    this.upto = e[0].presentCount;
  }
  alert() {
    this.child.Message('Dinoraj');
  }
  NgAfterViewInit() {

  }
  Child(e) {
    this.message=e;
  }
}
