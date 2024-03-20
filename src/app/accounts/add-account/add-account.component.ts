import { Component } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css'
})
export class AddAccountComponent {

  name = '';
  val = '';
  allOption = ['','active','inactive','unknown']
  sendToHome(){
    console.log(this.name, this.val);
    
  }

}
