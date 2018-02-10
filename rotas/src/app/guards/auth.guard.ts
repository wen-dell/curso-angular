import { LoginService } from 'app/login/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private loginService: LoginService, private router: Router) {
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      if (this.loginService.usuarioEstaAutenticado()) {
        return true;
      }

      this.router.navigate(['/login']);

      return false;

  }
}
