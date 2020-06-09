import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password;

  show = false;

  loginUserData = {}
 
  constructor(private _auth: AuthService,
              private _router: Router,
              //private formBuilder: FormBuilder
             ) { }

  ngOnInit() {
    this.password = 'password';
  }
  loginUser(){
    this._auth.loginUser(this.loginUserData)
     .subscribe(
       res => {
        console.log(res)
        localStorage.setItem('token' ,res.token)
        this._router.navigate(['/special'])

       },

       err => console.log(err)
     )
  }
  registerMe(){
    this._router.navigate(['/register'])
  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

}
