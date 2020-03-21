import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/UserService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string;
  password: string;

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.username = this.userServ.get('username');
    this.password = this.userServ.get('password');
  }

  onSave() {
    this.userServ.set('username', this.username);
    this.userServ.set('password', this.password);
  }

}
