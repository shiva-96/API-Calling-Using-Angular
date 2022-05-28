import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthGuard } from '../guard/auth.guard';
import { UsersDataService } from '../services/users-data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  submitted: boolean = false;
  responseData: any;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: UsersDataService,
    private router: Router,
    private auth: AuthGuard
  ) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn()){
      this.router.navigateByUrl('/welcome')
    }
  }

  get controls() { return this.loginForm.controls; }

  public inputType: string = 'password';
  public passwordShow: boolean = false;
  public showPassword(event: any) {
    if (this.passwordShow) {
      this.passwordShow = false;
      this.inputType = 'password'
    }
    else {
      this.passwordShow = true;
      this.inputType = 'text'
    }

  }

  display: any;

  onlogin() {

    this.loginService.saveUsers(this.loginForm.value).subscribe(res => {
      if (res.status == 200) {
        this.display = res;
        localStorage.setItem('userData', JSON.stringify(res.body));
        // console.log(localStorage.getItem('userData')||'');
        localStorage.setItem('xToken', res.headers.get('x-auth-token'));
        localStorage.setItem('refToken', res.headers.get('refresh-token'));
      }
      

      let name = JSON.parse(localStorage.getItem('userData.first_name'));
      console.log(name)
      
      this.router.navigateByUrl('/welcome')
      console.log(res);
      
      
    },
      err => {
        alert(err.message)
      })
    this.submitted = true;
    return this.loginForm?.invalid ? "Invalid User" : null
      
  }

}
