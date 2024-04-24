import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registrationForm:FormGroup = this._fb.group( {
    full_name: ["", Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  });  
  constructor(private _fb:FormBuilder , private _apiService : ApiService) { }

  ngOnInit(): void {
  }
  public submitData():void{
    const password = this.registrationForm.get("password")?.value;
    const confirmPassword = this.registrationForm.get("confirmPassword")?.value;
    if(password === confirmPassword) {
      console.log(this.registrationForm.value);
      const data  = {
        type : "register",
        name : this.registrationForm.get("full_name")?.value,
        email : this.registrationForm.get("email")?.value,
        password : this.registrationForm.get("password")?.value
      }
      this._apiService.callAuthApi(data).subscribe(obj => {
        if(obj?.success){
          // we can add swal.
          alert(obj?.message);
        }
      });
    }else{
      alert("confirm the password");

    }
    
  }
}
