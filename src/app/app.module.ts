import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './Common/Views/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OptionsForAdminComponent } from './options-for-admin/options-for-admin.component';
import { FooterComponent } from './Common/Views/footer/footer.component';
import { GridForAdminComponent } from './grid-for-admin/grid-for-admin.component';
import { MatTableModule } from '@angular/material'  
import {
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule,
  MatCardModule,
  MatSelectModule,
  MatGridListModule,
  MatCheckboxModule,
} from '@angular/material';
import { ExtraOptionsComponent } from './extra-options/extra-options.component';
import {MatDialogModule} from '@angular/material';
import { SimpleModalComponent } from './Common/Views/simple-modal/simple-modal.component';
import { ProfessorAbmComponent } from './abm/professor-abm/professor-abm.component';
import { AssigmentAbmComponent } from './abm/assigment-abm/assigment-abm.component';
import { MatPaginatorModule } from '@angular/material';
import { StudentAbmComponent } from './abm/student-abm/student-abm.component';
import { GenerateQrComponent } from './generate-qr/generate-qr.component';
import{ NgxQRCodeModule } from 'ngx-qrcode2';
import { AvalibleAsignaturesComponent } from './Asignature/avalible-asignatures/avalible-asignatures.component';
import { HttpClientModule } from '@angular/common/http';
import { AsignatureDetailsComponent } from './Asignature/asignature-details/asignature-details.component';
import { FinishScreenComponent } from './finish-screen/finish-screen.component';
import { SpinnerComponent } from './Common/Views/spinner/spinner.component';
import { ErrorViewComponent } from './Common/Views/error-view/error-view.component';
import { StudentDetailsComponent } from './Student/student-details/student-details.component';
import { ProfessorDetailsComponent } from './Professor/professor-details/professor-details.component';
import { AsignatureFinishScreenComponent } from './Asignature/asignature-finish-screen/asignature-finish-screen.component';
import { QRCodeModule } from 'angular2-qrcode';
import { StudentInformationComponent } from './Student/student-information/student-information.component';
import { ComplexModalComponent } from './Common/Views/complex-modal/complex-modal.component';
import { BackButtonComponent } from './Common/Views/back-button/back-button.component';
import { StudentEditionComponent } from './Student/student-edition/student-edition.component';
import { EditionViewComponent } from './Common/Views/edition-view/edition-view.component';
import { ProfessorEditionComponent } from './Professor/professor-edition/professor-edition.component';
import { ModalAsignatureCreationComponent } from './Asignature/modal-asignature-creation/modal-asignature-creation.component';
import { AddUserToAsignatureComponent } from './Asignature/add-user-to-asignature/add-user-to-asignature.component';
import { AddStudentAsignatureComponent } from './Student/add-student-asignature/add-student-asignature.component';
import { ModalErrorComponent } from './Common/Views/modal-error/modal-error.component';
import { ProfessorAvalibleAsignaturesComponent } from './Professor/professor-avalible-asignatures/professor-avalible-asignatures.component';
import { DeleteAsignatureComponent } from './Asignature/delete-asignature/delete-asignature.component';
import { AsignatureAdminDetailsComponent } from './Asignature/asignature-admin-details/asignature-admin-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    OptionsForAdminComponent,
    FooterComponent,
    GridForAdminComponent,
    ExtraOptionsComponent,
    SimpleModalComponent,
    ProfessorAbmComponent,
    AssigmentAbmComponent,
    StudentAbmComponent,
    GenerateQrComponent,
    AvalibleAsignaturesComponent,
    AsignatureDetailsComponent,
    FinishScreenComponent,
    SpinnerComponent,
    ErrorViewComponent,
    StudentDetailsComponent,
    ProfessorDetailsComponent,
    AsignatureFinishScreenComponent,
    StudentInformationComponent,
    ComplexModalComponent,
    BackButtonComponent,
    StudentEditionComponent,
    EditionViewComponent,
    ProfessorEditionComponent,
    ModalAsignatureCreationComponent,
    AddUserToAsignatureComponent,
    AddStudentAsignatureComponent,
    ModalErrorComponent,
    ProfessorAvalibleAsignaturesComponent,
    DeleteAsignatureComponent,
    AsignatureAdminDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatPaginatorModule,
    NgxQRCodeModule,
    HttpClientModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
