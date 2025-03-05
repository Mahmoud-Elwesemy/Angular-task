import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
login:{username:String , password:String}={
  username:'',
  password:''
}

  SendData()
  {
          console.log(this.login.username);
          console.log(this.login.password);
          this.login.username="";
          this.login.password="";
  }
}
