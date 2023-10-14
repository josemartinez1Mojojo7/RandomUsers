import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { NavController } from '@ionic/angular';
import { IUserRandom } from 'src/app/models/randomuser.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent  implements OnInit {

  constructor(public dataLocalService:DataLocalService, private navCtrl: NavController) {}

  ngOnInit() {}

  verUser(user:IUserRandom){
    this.navCtrl.navigateForward('user-detail', { queryParams: { user: user, favorite:true } });
  }

}
