import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AccountService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(data: any){
    return this.httpClient.post(environment.apiContatos + "/Account/Login", data);
  }

  register(data: any){
    return this.httpClient.post(environment.apiContatos + "/Account/Register", data);
  }

  passwordRecover(data: any){
    return this.httpClient.post(environment.apiContatos + "/Account/passwordRecover", data);
  }

  userData(){
    return this.httpClient.get(environment.apiContatos + "/Account/userData")
  } 
  

}
