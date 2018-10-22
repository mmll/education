import {Component, OnInit} from '@angular/core';
import {User} from '../entity/user'
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  constructor() {
  }

  ngOnInit() {
  }
  onSubmit(f: NgForm){
    this.submitted = true;
  }

}
