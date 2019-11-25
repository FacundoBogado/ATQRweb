import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let CommonService = class CommonService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCollectionById(object) {
        return this.httpClient.post('http://obscure-taiga-98790.herokuapp.com/course/professor', object);
    }
    getById(id, object) {
        return this.httpClient.get('http://obscure-taiga-98790.herokuapp.com/' + object + "/" + id);
    }
};
CommonService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CommonService);
export { CommonService };
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
//# sourceMappingURL=common.service.js.map