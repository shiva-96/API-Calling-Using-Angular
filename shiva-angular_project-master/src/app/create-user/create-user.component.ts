import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private addUserService : UsersDataService, private router : Router) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'firstName':new FormControl(''),
      'lastName': new FormControl(''),
      'email':new FormControl(''),
      'gender' : new FormControl(''),
      'birthday' : new FormControl(''),
      'mobile' : new FormControl(''),
      'country_code' : new FormControl(''),
      'role' : new FormControl(''),
      'user_title_id' : new FormControl(''),
      'preffered_language' : new FormControl(''),
      'password_details' :{
        'generate_password': new FormControl(''),
        'password' : new FormControl(''),
      } 
    })
  }


  createUser(){
    const listAddUser = {
      "first_name": this.addUserForm.value.firstName,
      "last_name": this.addUserForm.value.lastName,
      "gender": this.addUserForm.value.gender,
      "dob": this.addUserForm.value.birthday,
      "mobile": this.addUserForm.value.mobile,
      "country_code": this.addUserForm.value.country_code,
      "email": this.addUserForm.value.email,
      "role": [this.addUserForm.value.role],
      "user_title_id": ["6953540f-70c3-4819-83fe-ef769282adbb"],
      "preffered_language": this.addUserForm.value.preffered_language,
      "password_details": {
        "generate_password": this.addUserForm.value.password_details,
        "password": ""
      }
    };
    console.log(listAddUser)

    this.addUserService.addUser(listAddUser).subscribe(data=> {
      if (data.status == 200){
        alert("User Crearted Successfully")
        console.log(data)
        console.log("User Crearted Successfully")
        this.router.navigateByUrl('/welcome')
      }
    }),
    err => {
      alert(err.message)
    }
    console.log(this.addUserForm.value);
  }

}
