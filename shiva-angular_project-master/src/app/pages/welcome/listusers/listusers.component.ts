import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  listUsers : any = [];
  arrList : any = [];
  listArray : any;

  constructor(private listAllUserService:UsersDataService) { }

  ngOnInit(): void {
    this.listAllUserService.listUsers().subscribe(data=>
      {
        if (data.status ==200){
          console.log(data)
          this.listUsers = data;
          this.arrList = this.listUsers.body.users
          console.log(this.arrList.first_name)
          console.log(this.arrList)         
        };       
      }        
    )
  }
      
}


