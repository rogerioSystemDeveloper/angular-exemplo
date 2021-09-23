import { Component } from '@angular/core';
 
@Component ({
  selector: 'my',
  templateUrl: './my.component.html'
})
export class My {
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';
 
  sayMessage() {
    alert(this.message);
  }
 
}