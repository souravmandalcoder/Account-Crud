import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let loginService = this.injector.get(LoginService)
    let tokenReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${loginService.getToken()}`
      }
    })
    return next.handle(tokenReq)
  }
}
