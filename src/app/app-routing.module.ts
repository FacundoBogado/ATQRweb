import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OptionsForAdminComponent } from './options-for-admin/options-for-admin.component';
import { GridForAdminComponent } from './grid-for-admin/grid-for-admin.component';
import { ProfessorAbmComponent } from './abm/professor-abm/professor-abm.component';
import { AssigmentAbmComponent } from './abm/assigment-abm/assigment-abm.component';
import { StudentAbmComponent } from './abm/student-abm/student-abm.component';
import { GenerateQrComponent } from './generate-qr/generate-qr.component';
import { AvalibleAsignaturesComponent } from './Asignature/avalible-asignatures/avalible-asignatures.component';
import { AsignatureDetailsComponent } from './Asignature/asignature-details/asignature-details.component';
import { ErrorViewComponent } from './Common/Views/error-view/error-view.component';
import { StudentDetailsComponent } from './Student/student-details/student-details.component';
import { ProfessorDetailsComponent } from './Professor/professor-details/professor-details.component';
import { AsignatureFinishScreenComponent } from './Asignature/asignature-finish-screen/asignature-finish-screen.component';
import { StudentInformationComponent } from './Student/student-information/student-information.component';
import {StudentEditionComponent} from './Student/student-edition/student-edition.component'
import { ProfessorEditionComponent } from './Professor/professor-edition/professor-edition.component';
import { AddStudentAsignatureComponent } from './Student/add-student-asignature/add-student-asignature.component';
import { AsignatureAdminDetailsComponent } from './Asignature/asignature-admin-details/asignature-admin-details.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menuAdmin', component: OptionsForAdminComponent },
  { path: 'lista', component: GridForAdminComponent },
  { path: 'listaProfesor', component: ProfessorAbmComponent },
  { path: 'listaMaterias', component: AssigmentAbmComponent },
  { path: 'listaEstudiantes', component: StudentAbmComponent },
  { path: 'generarQR/:id', component: GenerateQrComponent },
  { path: 'materiasDisponibles', component: AvalibleAsignaturesComponent},
  { path: 'details/:id', component: AsignatureDetailsComponent },
  { path: 'clase/:id1/cursoFinalizado/:id2', component: AsignatureFinishScreenComponent },
  { path: 'error', component: ErrorViewComponent },
  { path: 'course/:id1/student/:id2/details', component: StudentDetailsComponent },
  { path: 'professor/details/:id', component: ProfessorDetailsComponent },
  { path: 'student/information/:id', component: StudentInformationComponent },
  { path: 'edit/student/:id', component: StudentEditionComponent },
  { path: 'edit/professor/:id', component: ProfessorEditionComponent },
  { path: 'asignature/add/:id', component: AddStudentAsignatureComponent },
  { path: 'admin/details/:id', component: AsignatureAdminDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }