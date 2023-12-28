
import { securityApi } from '../api/security-api.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  
  
  constructor(
    private _securityApi: securityApi,

  ) { }

  sendEmail(to: string): Observable<any> {
    return this._securityApi.sendEmail(to);
  }
  

  ResetPassword(newPassword: string, tempKey: string): Observable<any> {
    return this._securityApi.resetPassword(newPassword,tempKey);
  }
}

