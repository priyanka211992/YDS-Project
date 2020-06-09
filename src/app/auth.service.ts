import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import{ tap, map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _url ="http://localhost:3000/api/register";

  constructor(private http: HttpClient,
              private _router: Router, 
             ) { }
   
             getUsers(){
              return this.http.get<any[]>(this._url).pipe(
                map(users => {
                  const newUsers = [];
                  for (let user of users) {
                  const email = user.email;
                  newUsers.push({ email: email });
                }
                return newUsers;
                }),
                tap(users => console.log(users))
              );
            }           
            getUserByEmail(email: string) {
              return this.http.get<any[]>(`${this._url}?email=${email}`);
            }
  registerUsers(user){

    return this.http.post<any>(this._registerUrl,user)
  }
  

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)

  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }
  getToken() {
    return localStorage.getItem('token')
  }


}