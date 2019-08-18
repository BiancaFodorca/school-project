import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_Form: FormGroup;
  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(
    fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.login_Form = fb.group({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit() {}

  doLogin(values: any): void {
    console.log(values);
    if (this.login_Form.valid) {
      // if (values.email === "prof") {
      //   console.log("prof");
      //   console.log(this.router.navigate(["/teacher"]));
      //   this.router.navigate(["/teacher"]);
      // } else {
      //   console.log("elev");
      //   this.router.navigate(["/student"]);
      // }
      this.authService.login(values).subscribe(resp => {
        this.router.navigate(['/teacher']);
        if (resp.type === 1) {
          this.router.navigate(['/teacher']);
        } else {
          this.router.navigate(['/student']);
        }
      });
    }
  }
}
