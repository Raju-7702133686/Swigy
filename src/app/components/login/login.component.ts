import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  unLock:boolean= false;
  submitted: boolean=false;
  isSignedIn: boolean = false;
  loader: boolean = false;


  loginForm: FormGroup= new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z]).{8,}')])
  })

  signupForm: FormGroup= new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z]).{8,}')]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z]).{8,}')])
  })


  showToggle(){
    this.unLock = !this.unLock;
  }
  signUp(){
    setTimeout(()=>{
      this.isSignedIn = !this.isSignedIn;
    },1000);
    
  }
  signOut(){
    this.isSignedIn=false
  }
  constructor(private loginService: LoginService, private router: Router){}
  login(){
    console.log(this.loginForm.value);
    this.submitted=true;
    this.loginService.dologin(this.loginForm.value).subscribe(
      (res)=>{
        alert("Login Successful");
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl("/dashboard");

      },
      (err)=>{
        alert("Invalid Credentials");
      }
    )
  }

  signUpForm(){
    console.log(this.signupForm.value);
    localStorage.setItem('user', JSON.stringify(this.signupForm.value));
      alert('Your account has been created successfully');
      this.isSignedIn=false;


      

  }
  reset(){
    this.signupForm.reset();;
  }
}
