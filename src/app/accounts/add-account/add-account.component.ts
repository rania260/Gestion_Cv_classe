import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css'
})
export class AddAccountComponent {

  // name = '';
  // val = '';
  allOption = ['', 'active', 'inactive', 'unknown'];
  @Output() sendAcc = new EventEmitter();
  sendToHome(inp, st) {
    console.log(inp, st);
    this.sendAcc.emit(
      {
        name : inp,
        status : st
      }
    )
  }

}
