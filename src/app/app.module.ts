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
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OptionsForAdminComponent } from './options-for-admin/options-for-admin.component';
import { FooterComponent } from './footer/footer.component';
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
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { ProfessorAbmComponent } from './abm/professor-abm/professor-abm.component';
import { AssigmentAbmComponent } from './abm/assigment-abm/assigment-abm.component';
import { MatPaginatorModule } from '@angular/material';
import { StudentAbmComponent } from './abm/student-abm/student-abm.component';
import { GenerateQrComponent } from './generate-qr/generate-qr.component';
import{ NgxQRCodeModule } from 'ngx-qrcode2';
import { AvalibleAsignaturesComponent } from './avalible-asignatures/avalible-asignatures.component';
import { HttpClientModule } from '@angular/common/http';
import { AsignatureDetailsComponent } from './asignature-details/asignature-details.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
