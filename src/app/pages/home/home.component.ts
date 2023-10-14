import { Component, Input, OnInit } from '@angular/core';
import { IUserRandom, Results } from 'src/app/models/randomuser.interface';
import { RandomUserService } from '../../services/random-user.service';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  @Input() enFavoritos=false;

  user: IUserRandom|undefined

  constructor(private randomuserService: RandomUserService, private dataLocalService:DataLocalService) { }

  ngOnInit(): void {
    this.dataLocalService.crearStorege();
    this.cargarUser();
  }

  cargarUser(){
    this.randomuserService.obtenerRandomUser().subscribe(resp=>{
      this.user=resp.results[0];
    });
  }

}
