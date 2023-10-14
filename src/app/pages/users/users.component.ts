import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IUserRandom } from 'src/app/models/randomuser.interface';
import { RandomUserService } from '../../services/random-user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent  implements OnInit {

  @Input() enFavoritos=false;

  users: IUserRandom[]=[]
  genders=['female','male','all']

  gender=''

  constructor(private randomuserService: RandomUserService, private navCtrl: NavController) { }

  ngOnInit(): void {
    this.cargarUsers();
  }

  loadData(event: any){
    this.cargarUsers(this.gender,event);
  }

  cargarUsers(gender?:string, event?:any ){
    this.randomuserService.obtenerRandomUsersGenero(gender? gender:'').subscribe(resp=>{
      this.users.push(...resp.results);
      if (event) {
        event.target.complete();
      }
    });
  }
  cambioGenero(event: any){
    this.users=[];
    this.gender=event.detail.value;
    this.cargarUsers(event.detail.value);
  }

  verUser(user:IUserRandom){
    this.navCtrl.navigateForward('user-detail', { queryParams: { user: user } });
  }
}
