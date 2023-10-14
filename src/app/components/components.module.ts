import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    TabsComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports:[
    TabsComponent,
    UserComponent
  ]
})
export class ComponentsModule { }
