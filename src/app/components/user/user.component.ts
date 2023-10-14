import { Component, Input, OnInit } from '@angular/core';
import { IUserRandom } from 'src/app/models/randomuser.interface';
import { ActionSheetController } from "@ionic/angular";
import { Share } from '@capacitor/share';
// import { Plugins } from '@capacitor/core';
// const { Share } = Plugins;
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {

  @Input() user: IUserRandom | any;
  @Input() enFavoritos:any;

  constructor(private actionSheetController: ActionSheetController, public dataLocalService:DataLocalService) { }

  ngOnInit() {}

  async more(){
    let guardarBorrarBtn;
    if (this.enFavoritos) {
      guardarBorrarBtn={
        text: 'Borrar de Favoritos',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          // console.log('clic en Borrar de Fovorito');
          this.dataLocalService.borrarUser(this.user);
        }
      };
    }else{
      guardarBorrarBtn={
        text: 'Favoritos',
        icon: 'heart',
        cssClass: 'action-dark',
        handler: () => {
          // console.log('clic en Fovoritos');
          this.dataLocalService.guardarUser(this.user);
        }
      };
    }
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Compartir',
        icon: 'share-social-outline',
        cssClass: 'action-dark',
        data: 10,
        handler: () => {
          // console.log('clic en Compartir');
          Share.share({
            title: this.user.name.first,
            text: this.user.location.country,
            url: this.user.picture.medium
          })
        }
      },
      guardarBorrarBtn,
      {
        text: 'Cancelar',
        icon: 'close',
        cssClass: 'action-dark',
        role: 'cancel',
        handler: () => {
          // console.log('clic en Cancelar');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    // console.log('onDidDismiss resolved with role and data', role, data);
  }

}
