import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends: User[];

  constructor() { 

    let myUser1: User = {
      nick: 'David',
      subnick: 'daf',
      age: 28,
      email: 'dav@hotmail.com',
      friend: true,
      uid: 1
    };

    let myUser2: User = {
      nick: 'Aleja',
      subnick: 'alej',
      age: 20,
      email: 'aleja@hotmail.com',
      friend: true,
      uid: 2
    };

    let myUser3: User = {
      nick: 'Juan',
      subnick: 'juju',
      age: 23,
      email: 'juan@hotmail.com',
      friend: false,
      uid: 3
    };

    let myUser4: User = {
      nick: 'jose',
      subnick: 'josue',
      age: 25,
      email: 'jose@hotmail.com',
      friend: true,
      uid: 4
    };

    let myUser5: User = {
      nick: 'sandra',
      subnick: 'san',
      age: 29,
      email: 'sandra@hotmail.com',
      friend: false,
      uid: 5
    };

    this.friends = [myUser1, myUser2, myUser3, myUser4, myUser5];
  }

  getFriends () : User [] {
      return this.friends;
  }

  friendById (id: any) :User {
    let friends = this.getFriends();
    let user = friends.find( friend => friend.uid == id);
    return user;
  }
}
