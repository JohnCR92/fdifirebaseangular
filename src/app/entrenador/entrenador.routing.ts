import { RouterModule, Routes, Params } from '@angular/router';
import { DatatablesCaseComponent } from './form/datatables-case.component';
import { DeportistaListComponent } from './list/deportista-list.component';
import { DeportistaFormComponent } from './form/deportista-form.component';

import { DeportistafnfListComponent } from './list/deportistafnf-list.component';
import { DeportistaFormeditfnfComponent } from './formeditfnf/deportistafnf-formeditfnf.component';
import { DeportistafnfFormComponent } from './form/deportistafnf-form.component';
import { DeportistaFormfotoComponent } from './formfoto/deportistafnf-formfoto.component';
import { DeportistaFormverfnfComponent } from './formverfnf/deportistafnf-formverfnf.component';
import { EntrenadorListComponent } from './list/entrenador-list.component';
import { EntrenadorFormComponent } from './form/entrenador-form.component';
import { EntrenadorFormeditComponent } from './formedite/entrenador-formedite.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { EntrenadorFormvereComponent } from './formvere/entrenador-formvere.component';
import { EntrenadorReportesComponent } from './reportes/entrenador-reportes.component';

export const routes: Routes = [
    {
        path: '',
        component: EntrenadorListComponent
    },
    {
        path:'form',
        component:EntrenadorFormComponent
    },

    {
        path:'form/:entreId',
        component:EntrenadorFormComponent
    },
    {
        path:'reportes',
        component:EntrenadorReportesComponent
    },
    {
        path: 'formedite/:entreId',
        component: EntrenadorFormeditComponent
    },
    {
        path: 'formvere/:entreId',
        component: EntrenadorFormvereComponent
    },
    {
        path: 'asistencia',
        component: AsistenciaComponent
    }

   
]

export const routing = RouterModule.forChild(routes);