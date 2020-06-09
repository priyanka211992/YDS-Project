import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData ={}
  msg: string;
  constructor(private _auth: AuthService,
              private _router: Router,
              private toastr: ToastrService
             ) { }

  ngOnInit() {
  }

  registerUser(){
  this._auth.registerUsers(this.registerUserData)
    .subscribe(
     res => {
       console.log(res)
       localStorage.setItem('token' ,res.token)
       this.toastr.success('register successful');
       this._router.navigate(['/special'])
       
     },
     err => console.log(err)
     )
  }
  

}
