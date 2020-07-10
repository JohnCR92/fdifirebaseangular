import { RouterModule, Routes, Params } from '@angular/router';
import { DatatablesCaseComponent } from './form/datatables-case.component';
import { DeportistaListComponent } from './list/deportista-list.component';
import { DeportistaFormComponent } from './form/deportista-form.component';

import { DeportistafnfListComponent } from './list/deportistafnf-list.component';
import { DeportistaFormeditfnfComponent } from './formeditfnf/deportistafnf-formeditfnf.component';
import { DeportistafnfFormComponent } from './form/deportistafnf-form.component';
import { DeportistaFormfotoComponent } from './formfoto/deportistafnf-formfoto.component';
import { DeportistaFormverfnfComponent } from './formverfnf/deportistafnf-formverfnf.component';
import { PremiosDeportistaListComponent } from './list/premiosdeportista-list.component';
import { PremiosDeportistaFormComponent } from './form/premiosdeportista-form.component';
import { PremiosDeportistaFormeditComponent } from './formeditp/premiosdeportista-formeditp.component';
import { PremiosDeportistaReportesComponent } from './reportes/premiosdeportista-reportes.component';
import { PremiosDeportistaFormVerComponent } from './formver/premiosdeportista-formver.component';

export const routes: Routes = [
    {
        path: '',
        component: PremiosDeportistaListComponent
    },
    {
        path:'form',
        component:PremiosDeportistaFormComponent
    },

    {
        path:'reportes',
        component:PremiosDeportistaReportesComponent
    },

    {
        path:'form/:idPremios',
        component:PremiosDeportistaFormComponent
    },
    {
        path: 'formeditp/:idPremios',
        component: PremiosDeportistaFormeditComponent
    },
    {
        path: 'formver/:idPremios',
        component: PremiosDeportistaFormVerComponent
    }

   
]

export const routing = RouterModule.forChild(routes);