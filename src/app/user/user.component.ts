import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from "../auth/auth-guard.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private authGuard: AuthGuardService) { }

  ngOnInit() {
  }

  isAuthenticated(): boolean {
    return this.authGuard.isAuthenticated();
  }

}
