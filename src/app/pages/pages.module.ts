import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    UserDetailComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ComponentsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
