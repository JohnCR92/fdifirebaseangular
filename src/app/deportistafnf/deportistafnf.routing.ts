import { RouterModule, Routes, Params } from '@angular/router';
import { DatatablesCaseComponent } from './form/datatables-case.component';
import { DeportistaListComponent } from './list/deportista-list.component';
import { DeportistaFormComponent } from './form/deportista-form.component';

import { DeportistafnfListComponent } from './list/deportistafnf-list.component';
import { DeportistaFormeditfnfComponent } from './formeditfnf/deportistafnf-formeditfnf.component';
import { DeportistafnfFormComponent } from './form/deportistafnf-form.component';
import { DeportistaFormfotoComponent } from './formfoto/deportistafnf-formfoto.component';
import { DeportistaFormverfnfComponent } from './formverfnf/deportistafnf-formverfnf.component';
import { DeportistafnfReportesComponent } from './reportes/deportistafnf-reportes.component';

export const routes: Routes = [
    {
        path: '',
        component: DeportistafnfListComponent
    },
    {
        path:'form',
        component:DeportistafnfFormComponent
    },
    {
        path:'reportes',
        component:DeportistafnfReportesComponent
    },

    {
        path:'form/:deporId',
        component:DeportistafnfFormComponent
    },
    {
        path: 'formeditfnf/:deporId',
        component: DeportistaFormeditfnfComponent
    },
    {
        path: 'formverfnf/:deporId',
        component: DeportistaFormverfnfComponent
    }

   
]

export const routing = RouterModule.forChild(routes);