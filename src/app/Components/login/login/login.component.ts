import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  submitted = false;
  token:any;

  constructor(private formBuilder: FormBuilder,private user: UserService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      EmailId: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);

    let data = {
      EmailId: this.loginForm.value.EmailId,
      Password: this.loginForm.value.Password
    }
      console.log("User Login Successfully", this.loginForm.value);
      
      this.user.login(data).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem("token",res.data);
        console.log(res.data);
      })
    }
}
