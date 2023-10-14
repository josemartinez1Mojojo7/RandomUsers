import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUserRandom } from 'src/app/models/randomuser.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent  implements OnInit {

  user: IUserRandom|undefined
  enFavoritos=false

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      const data = params['user'];
      const favorite = params['favorite']
      this.user=data
      this.enFavoritos=favorite? favorite:false
    });
  }

}
