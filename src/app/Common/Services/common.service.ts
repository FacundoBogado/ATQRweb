import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericObject } from 'src/app/Objects/GenericObject';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  public getCollectionById(object: Object): Observable<any> {
    return this.httpClient.post<any[]>('http://obscure-taiga-98790.herokuapp.com/course/professor', object);
  }

  getById(id: number, object: string) {
    return this.httpClient.get('http://obscure-taiga-98790.herokuapp.com/' + object + "/" + id);
  }

  getCourses(id: number){
    return this.httpClient.get('http://obscure-taiga-98790.herokuapp.com/course/' + id);
  }

  getStudent(body:any){
    return this.httpClient.post('http://obscure-taiga-98790.herokuapp.com/course/student', body);
  }

  getCurrentUser(path: string){
    return this.httpClient.get('http://obscure-taiga-98790.herokuapp.com/' + path);
  }

  endClass(id: number, body: any){
    return this.httpClient.post('http://obscure-taiga-98790.herokuapp.com/course/endclass', body);
  }

  getCourseHistory(body:any){
    return this.httpClient.post('http://obscure-taiga-98790.herokuapp.com/course/history', body);
  } 

  getProfessors(){
    return this.httpClient.get('http://obscure-taiga-98790.herokuapp.com/professor');
  }

  getAsignatures(){
    return this.httpClient.get('http://obscure-taiga-98790.herokuapp.com/asignature');
  }

  getAll(data: string){
    return this.httpClient.get('http://obscure-taiga-98790.herokuapp.com/' + data);
  }

  delete(object: string){
    return this.httpClient.delete('http://obscure-taiga-98790.herokuapp.com/' + object);
  }

  create(object: string, body: any){
    return this.httpClient.post('http://obscure-taiga-98790.herokuapp.com/' + object, body);
  }

  edit(url: string, body: any){
    return this.httpClient.patch('http://obscure-taiga-98790.herokuapp.com/' + url, body)
  }

  addStudent(id:number, body:any){
    return this.httpClient.post('http://obscure-taiga-98790.herokuapp.com/course/'+ id, body)
  }

  removeStudent(id:number, body:any){
    return this.httpClient.post('http://obscure-taiga-98790.herokuapp.com/course/'+ id + "/delete", body)
  }
}