import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  friendId: any;
  friend: User;
  price: number = 78.2378788787787;
  today: any = Date.now();

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) { 

    this.friendId = this.activatedRoute.snapshot.params['uid'];
    
    this.friend = this.userService.friendById(this.friendId);

    console.log(this.friend);


  }

  ngOnInit() {
  }

}
