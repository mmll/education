import {Component, OnInit} from '@angular/core';
import {User} from '../entity/user';
import {FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {UserService} from '../service/user.service';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  registerForm;
  userService;
  email;

  constructor(formBuilder: FormBuilder, userService: UserService) {
    this.registerForm = formBuilder.group({
      username: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
