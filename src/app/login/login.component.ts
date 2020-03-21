import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userServ: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(username: string, password: string) {
    if(username === "" || password ===""){
      alert("Empty password or username!")
    } else {
    this.userServ.set('username', username);
    this.userServ.set('password', password);
    this.router.navigate(['/todo']);};
  }
}
