import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversationComponent} from '../app/conversation/conversation.component';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { ProfileComponent } from '../app/profile/profile.component';
import {NotFoundComponent} from '../app/not-found/not-found.component';

const app_routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'conversation/:uid', component: ConversationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
      RouterModule.forRoot(app_routes)
  ],
  exports: [
      RouterModule
  ]
})

export class AppRoutingModule { }
