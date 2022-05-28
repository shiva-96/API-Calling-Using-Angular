import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  userId:any
  constructor(private deleteService : UsersDataService, private activateRoute: ActivatedRoute){ }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(data=>{
      this.userId = data.id;
    })
    

    this.deleteService.listUsers().subscribe(data=>{
      
    })
  }

}
