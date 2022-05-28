import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-login-integrated',
  templateUrl: './login-integrated.component.html',
  styleUrls: ['./login-integrated.component.css']
})
export class LoginIntegratedComponent implements OnInit {

  constructor(private userData:UsersDataService) { }

  user:any;
  name:any;
  fName:any;

  ngOnInit(): void {

    this.name =JSON.parse(localStorage.getItem('userData'));    
    this.fName=this.name['first_name']
    console.log(this.fName) 
    
  }
      
}









  