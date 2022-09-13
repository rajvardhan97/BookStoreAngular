import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userServices/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user : UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      EmailId: ['', [Validators.required, Validators.email]],
    })
  }
  onSubmit() {
    this.submitted = true;

    if (this.forgotForm.invalid) {
      console.log("invalid data");
    }
    else{
      console.log("Forgot Password Successfully");
      let reqData={
        EmailId:this.forgotForm.value.EmailId
      }
      this.user.forgotpassword(reqData).subscribe((response:any)=> {
        console.log(response);
        
      })

    }
  }

}
