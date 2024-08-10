import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  unLock:boolean= false;

  showToggle(){
    this.unLock = !this.unLock;
  }

}
