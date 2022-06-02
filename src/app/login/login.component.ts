import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Login } from './Login';
import { observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = new Login();
  users: Login[] = [];
  error: any;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    // const usersObservable = this.loginService.getUsers();
    // usersObservable.subscribe((usersData: Login[]) => {
    //   this.users = usersData;
    // });
    this.loginService
      .getUsers()
      .subscribe({ next: (users) => (this.users = users) });
  }

  onsubmit(myloginform: any) {
    this.login.userid = myloginform.value.userName;
    this.login.password = myloginform.value.password;
    const user = this.users.filter(
      (currUser) =>
        currUser.userid === this.login.userid &&
        currUser.password === this.login.password
    )[0];
    if (user) {
      this.router.navigate(['/view']);
    } else {
      this.error = 'please enter correct username and password';
    }
  }
}
