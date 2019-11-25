import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ASSIGMENTS } from 'src/app/objects.json';
let GridForAdminComponent = class GridForAdminComponent {
    constructor(CommonService, router, httpClient) {
        this.CommonService = CommonService;
        this.router = router;
        this.httpClient = httpClient;
        this.action = new EventEmitter();
        this.objects = [];
        this.data = [];
        this.objectType = "";
        this.isProfessor = false;
        this.isAssigment = false;
        this.isAdmin = false;
        this.isStudent = false;
    }
    ngOnInit() {
        //const x = this.action.emit();
        if (this.isProfessor) {
            this.data = ASSIGMENTS;
        }
        else if (this.isAssigment) {
            this.data = ASSIGMENTS;
        }
        this.objects = this.data;
    }
    applyFilter(value) {
        this.objects = this.data.filter(object => object.name.toLocaleUpperCase().includes(value.toLocaleUpperCase()));
    }
    triggerAction() {
        this.action.emit();
    }
    redirectToView() {
        /this.httpClient.post(`http:/ / obscure - taiga - 98790.;
        herokuapp.com / student / class {
        } `, null)
      .subscribe(
        (data: any) => {
          if (data != null) {
            this.router.navigate(['/generarQR']);
          } else {
          }
        }
      )
  }
};
    }
};
tslib_1.__decorate([
    Input()
], GridForAdminComponent.prototype, "isProfessor", void 0);
tslib_1.__decorate([
    Input()
], GridForAdminComponent.prototype, "isAssigment", void 0);
tslib_1.__decorate([
    Input()
], GridForAdminComponent.prototype, "isAdmin", void 0);
tslib_1.__decorate([
    Input()
], GridForAdminComponent.prototype, "isStudent", void 0);
tslib_1.__decorate([
    Input()
], GridForAdminComponent.prototype, "objectType", void 0);
tslib_1.__decorate([
    Output()
], GridForAdminComponent.prototype, "action", void 0);
GridForAdminComponent = tslib_1.__decorate([
    Component({
        selector: 'app-grid-for-admin',
        templateUrl: './grid-for-admin.component.html',
        styleUrls: ['./grid-for-admin.component.css']
    })
], GridForAdminComponent);
export { GridForAdminComponent };
//# sourceMappingURL=grid-for-admin.component.js.map