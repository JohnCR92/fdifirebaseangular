import { RouterModule, Routes, Params } from '@angular/router';
import { DatatablesCaseComponent } from './form/datatables-case.component';
import { DeportistaListComponent } from './list/deportista-list.component';
import { DeportistaFormComponent } from './form/deportista-form.component';

import { DeportistafnfListComponent } from './list/deportistafnf-list.component';
import { DeportistaFormeditfnfComponent } from './formeditfnf/deportistafnf-formeditfnf.component';
import { DeportistafnfFormComponent } from './form/deportistafnf-form.component';
import { DeportistaFormfotoComponent } from './formfoto/deportistafnf-formfoto.component';
import { DeportistaFormverfnfComponent } from './formverfnf/deportistafnf-formverfnf.component';
import { DeportistabajaListComponent } from './list/deportistabaja-list.component';
import { DeportistabajaFormComponent } from './form/deportistabaja-form.component';
import { DeportistaFormeditbajaComponent } from './formeditbaja/deportistabaja-formeditbaja.component';
import { DeportistaFormverbajaComponent } from './formverbaja/deportistabaja-formverbaja.component';
import { DeportistabajaReportesComponent } from './reportes/deportistabaja-reportes.component';

export const routes: Routes = [
    {
        path: '',
        component: DeportistabajaListComponent
    },
    {
        path:'form',
        component:DeportistabajaFormComponent
    },

    {
        path:'reportes',
        component:DeportistabajaReportesComponent
    },

    {
        path:'form/:deporId',
        component:DeportistabajaFormComponent
    },
    {
        path: 'formeditbaja/:deporId',
        component: DeportistaFormeditbajaComponent
    },
    {
        path: 'formverbaja/:deporId',
        component: DeportistaFormverbajaComponent
    }

   
]

export const routing = RouterModule.forChild(routes);