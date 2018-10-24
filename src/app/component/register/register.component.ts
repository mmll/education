import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {AlertService} from '../../service/alert.service';
import {UserService} from '../../service/user.service';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  registerForm;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private alertService: AlertService) {
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
    if(this.registerForm.invalid){
      return false;
    }
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          //this.router.navigate(['/register']);
        },
        error => {
          this.alertService.error(error);
          //this.loading = false;
        });
  }

}
