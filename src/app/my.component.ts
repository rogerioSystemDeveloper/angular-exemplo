import { Component } from '@angular/core';
 
@Component({
  selector: 'my',
  templateUrl: './my.component.html'
})
export class HelloWorldNgIfComponent {
  message = 'I\'m read only!';
  canEdit = false;
 
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = 'I\'m read only!';
    }
  }
}