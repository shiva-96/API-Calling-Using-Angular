import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersDataService } from 'src/app/services/users-data.service';
import { ListusersComponent } from '../listusers/listusers.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId:any
  editUserForm: FormGroup = new FormGroup({});

  constructor(private activateRoute: ActivatedRoute,private editService:UsersDataService, private formBuilder: FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.editUserForm = this.formBuilder.group({
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

  editUser(){
    const editUserForm = {
      "first_name": this.editUserForm.value.firstName,
      "last_name": this.editUserForm.value.lastName,
      "gender": this.editUserForm.value.gender,
      "dob": this.editUserForm.value.birthday,
      "mobile": this.editUserForm.value.mobile,
      "country_code": this.editUserForm.value.country_code,
      "email": this.editUserForm.value.email,
      "role": [this.editUserForm.value.role],
      "user_title_id": ["6953540f-70c3-4819-83fe-ef769282adbb"],
      "preffered_language": this.editUserForm.value.preffered_language,
      "password_details": {
        "generate_password": this.editUserForm.value.password_details,
        "password": ""
      }
    };
    console.log(editUserForm)

    
    this.activateRoute.params.subscribe(data=>{
      this.userId = data.id;
    })
    if (this.userId !== ""){
      this.editService.listUsers()

    }


    this.editService.editUser(editUserForm).subscribe(data =>{
      if (data.status == 200) {
        alert(data['user_id'])
        
      }
    }),
    err => {
      alert(err.message)
    }



  }











}
