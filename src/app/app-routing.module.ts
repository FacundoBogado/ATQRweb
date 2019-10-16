import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OptionsForAdminComponent } from './options-for-admin/options-for-admin.component';
import { GridForAdminComponent } from './grid-for-admin/grid-for-admin.component';
import { ProfessorAbmComponent } from './abm/professor-abm/professor-abm.component';
import { AssigmentAbmComponent } from './abm/assigment-abm/assigment-abm.component';
import { StudentAbmComponent } from './abm/student-abm/student-abm.component';
import { GenerateQrComponent } from './generate-qr/generate-qr.component';
import { AvalibleAsignaturesComponent } from './avalible-asignatures/avalible-asignatures.component';
import { AsignatureDetailsComponent } from './asignature-details/asignature-details.component';
import { FinishScreenComponent } from './finish-screen/finish-screen.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menuAdmin', component: OptionsForAdminComponent },
  { path: 'lista', component: GridForAdminComponent },
  { path: 'listaProfesor', component: ProfessorAbmComponent },
  { path: 'listaMaterias', component: AssigmentAbmComponent },
  { path: 'listaEstudiantes', component: StudentAbmComponent },
  { path: 'generarQR', component: GenerateQrComponent },
  { path: 'materiasDisponibles', component: AvalibleAsignaturesComponent},
  { path: 'details', component: AsignatureDetailsComponent },
  { path: 'cursoFinalizado', component: FinishScreenComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }