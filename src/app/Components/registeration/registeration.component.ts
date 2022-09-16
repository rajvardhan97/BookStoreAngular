import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userServices/user.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  registerForm : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      EmailId: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      MobileNumber: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    
    if (this.registerForm.valid) {
       console.log("valid", this.registerForm.value);
       let data = {
         fullName: this.registerForm.value.FullName,
         EmailId: this.registerForm.value.EmailId,
         Password: this.registerForm.value.Password,
         MobileNumber: this.registerForm.value.MobileNumber,
       }
       this.user.register(data).subscribe((res: any) => {
         console.log(res);
       })
    }

    else {
      console.log("Enter valid data");
    }

  }
}
