import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService {

  constructor() { }

  /**
   * 인증여부 체크: 로그인, 로그아웃 버튼 보여주기 등에 사
   * @returns {boolean}
   */
  isAuthenticated(): boolean {
    let token = localStorage.getItem('token');

    // if (token && !this.jwtHelper.isTokenExpired(token)) {
    //   return true;
    // } else {
      return false;
    // }
  }

}
