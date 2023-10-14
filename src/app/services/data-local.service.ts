import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { IUserRandom, Name } from '../models/randomuser.interface';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  user: IUserRandom[]=[];
  constructor(private storage: Storage) { }

  async crearStorege(){
    await this.storage.create();
    // console.log('Storage Guardado');
  }
  guardarUser(user: IUserRandom){
    const existe=this.user.find((u) => u.name.first === user.name.first);
    if (!existe) {
      this.user.unshift(user);
      this.storage.set('favoritos', this.user);
    }
  }
  async cargarFavoritos(){
    const favorito= await this.storage.get('favoritos');
    if (favorito) {
      this.user=favorito;
    }else{
      // console.log('No hay favoritos guardados');
    }
  }

  borrarUser(user: IUserRandom){
    this.user=this.user.filter(u=>u.name.first !== user.name.first);
    this.storage.set('favoritos', this.user);
  }

}
