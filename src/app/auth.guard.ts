import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';//CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authServices: AuthService,
              private _router: Router
              ){}

  canActivate(): boolean{
     if (this._authServices.loggedIn()) {
       return true
      } else {
        this._router.navigate(['/login'])
        return false

     }

    }           
    
  }
  // canActivateChild(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

