import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router) { }
  canLoad() {
    const auth = Number.parseInt(localStorage.getItem('authentication'), 10);
    let isAuth = false;
    if(auth){
      if(auth > 0){
        isAuth = true;
      } else {
        isAuth = false;
      }
    }
    if(isAuth){
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }

  }
}
