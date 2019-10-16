import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  public getCollectionById(id: number) {
    return this.httpClient.post<any[]>('http://obscure-taiga-98790.herokuapp.com/course/student', id);
  }

  getById(id: number, object: string) {
    return this.httpClient.get('http://obscure-taiga-98790.herokuapp.com/' + object + "/" + id);
  }
}

/*
  {
    "id": 15,
    "firstName": "Marco",
    "lastName": "Cupo",
    "document": 12345678,
    "mail": "primer.nombre@atqr.com",
    "birth": "2019-09-24T21:33:03.125+0000",
    "imageUrl": "imagen.com",
    "password": "contrasena"
  }
*/