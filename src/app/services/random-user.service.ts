import { Injectable } from '@angular/core';
import { IUserRandom, Results } from '../models/randomuser.interface'
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const url=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  page=8;
  genderActual=''

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string){
    query=url+query;
    // console.log(query);
    return this.http.get<T>(query)
  }
  obtenerRandomUser(){
    return this.ejecutarQuery<Results>('');
  }
  // obtenerRandomUsers(){
  //   return this.ejecutarQuery<Results>(`/?results=${this.page}`);
  // }
  obtenerRandomUsersGenero(gender:string){
    return this.ejecutarQuery<Results>(`/?gender=${gender}&results=${this.page}`);
  }

}
