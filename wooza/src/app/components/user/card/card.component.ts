import { UserService } from './../../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Models/user.model';

@Component({
  selector: 'w-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  private userModel: Array<UserModel>;

  constructor(private userService: UserService) { 
    this.userModel = new Array<UserModel>();
  }

  ngOnInit() {
    this.listUsers();
  }

  listUsers(){
    this.userService.getUsers().subscribe(res=>{
      this.userModel = res;
    },error=>{
      console.log(error);
    });
  }

}
