import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  ACCESS_TOKEN: string = "access_token";

  constructor() { }

  setAccessToken(accessToken: string): void{
    localStorage.setItem(this.ACCESS_TOKEN, accessToken)
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  removeAccessToken(): void {
    localStorage.removeItem(this.ACCESS_TOKEN);
  }


}
