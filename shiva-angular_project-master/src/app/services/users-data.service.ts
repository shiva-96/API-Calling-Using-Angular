import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  baseUrl = "https://dev2.athmin.com/hopfirst"
  apiUrl = "/api";
  userUrl = "/user";
  sessionsUrl = "/sessions";
  first_name: string;
  constructor(private http: HttpClient) { }

  saveUsers(userDetails: any) {
    let email = userDetails.email
    let password = userDetails.password

    const httpOptions = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic ' + btoa(`${email}:${password}`)
    };


    let myuuid = uuidv4();
    let body = {
      client_id: myuuid,
      country_code: "+91"
    }

    const apiUrls = this.baseUrl + this.apiUrl + this.userUrl + this.sessionsUrl
    console.log(userDetails)

    return this.http.post(apiUrls, body, { headers: httpOptions, observe: 'response', responseType: 'json' });

  }

  // passwordUrl: "/forgotpassword"	
  // forgotPassword(){

  //   const httpOptions = {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',

  //   };


  //   const email = localStorage.getItem('userData.email')
  //   let body = {
  //     "email_id" : email
  //   }

  //   const endPoint = this.baseUrl + this.apiUrl + this.userUrl + this.passwordUrl
  //   return this.http.post(endPoint, body, { headers: httpOptions, observe: 'response', responseType: 'json'});

  // }


  verifyToken = localStorage.getItem('xToken');
  isLoggedIn() {
    return this.verifyToken;
  }

  // CRUD Operations:---------
  //List all users api:--
  apiUrl2 = '/api'
  entityUrl = '/entity/'
  userData = JSON.parse(localStorage.getItem('userData'))
  entityId = this.userData?.entity_id
  userUrl2 = '/user'
  queryUrl = '/query'


  listUsers() {
    const endPoint = this.baseUrl + this.apiUrl2 + this.entityUrl + this.entityId + this.userUrl2 + this.queryUrl

    const listUserBody = {
      // user_id: this.userData?.user_id,r
    }

    const httpOptionsListUsers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-auth-token': this.verifyToken,
    };
    return this.http.post(endPoint, listUserBody, { headers: httpOptionsListUsers, observe: 'response', responseType: 'json' })
  }


  // /api/entity/{{entity_id}}/user
  addUser(obj:any) {
    const endPoint = this.baseUrl + this.apiUrl2 + this.entityUrl + this.entityId + this.userUrl2

    // const listAddUser = {
    //   "first_name": "",
    //   "last_name": "",
    //   "gender": "",
    //   "dob": "",
    //   "mobile": "",
    //   "country_code": "",
    //   "email": "",
    //   "role": [""],
    //   "user_title_id": ["6953540f-70c3-4819-83fe-ef769282adbb"],
    //   "preffered_language": "",
    //   "password_details": {
    //     "generate_password": true,
    //     "password": ""
    //   }
    // };

    const httpOptionsAddUsers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-auth-token': this.verifyToken,
    };

    return this.http.post(endPoint, obj, { headers: httpOptionsAddUsers, observe: 'response', responseType: 'json' })

  }




  //edit user api:--- 
  // api/entity/{{entity_id}}/user/{{user_id}}
  u_id = this.userData?.user_id
  editUser(obj:any) {
    const endPoint = this.baseUrl + this.apiUrl2 + this.entityUrl + this.entityId + this.userUrl2 + this.u_id

    // const editUserBody = {
    //   "first_name": "",
    //   "last_name": "",
    //   "role": [""],
    //   "status": "EM_VERIFIED_ACTIVE", 
    //   "preffered_language": "Python",
    //   "dob": "",
    //   "email": "", 
    //   "mobile": "",
    // }

    const httpOptionsEditUsers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-auth-token': this.verifyToken,
    };
    return this.http.put(endPoint, obj, { headers: httpOptionsEditUsers, observe: 'response', responseType: 'json' })
  }


  // /api/entity/{{entityId}}/user/query
  viewUserDetails(){
    const endPoint = this.baseUrl + this.apiUrl2 + this.entityUrl + this.entityId + this.userUrl2 + this.queryUrl

    const viewUserBody = {
      "user_id" : [''],
      "role" : ['']

    }

    const httpOptionsViewUsers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-auth-token': this.verifyToken,
    };

    return this.http.post(endPoint, viewUserBody, { headers: httpOptionsViewUsers, observe: 'response', responseType: 'json' })


  }


}
function uuid() {
  throw new Error('Function not implemented.');
}

