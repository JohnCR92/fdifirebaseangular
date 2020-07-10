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
import { ListEntrenadorFormComponent } from './form/listentredeport-form.component';
import { EntrenadorDisciListComponent } from './list/entrenadordisci-list.component';
import { EntrenadorDisciFormComponent } from './form/entrenadordisci-form.component';
import { EntrenadorDisciFormEditedComponent } from './formedited/entrenadordisci-formedited.component';
import { EntrenadorDisciFormVeredComponent } from './formvered/entrenadordisci-formvered.component';
import { EntrenadorDisciReportesComponent } from './reportes/entrenadordisci-reportes.component';

export const routes: Routes = [

    {
        path: '',
        component: EntrenadorDisciListComponent
    },
    {
        path:'form',
        component:EntrenadorDisciFormComponent
    },
    {
        path:'reportes',
        component:EntrenadorDisciReportesComponent
    },
    {
        path:'formedited/:idEntCatdis',
        component:EntrenadorDisciFormEditedComponent
    },
    {
        path:'formvered/:idEntCatdis',
        component:EntrenadorDisciFormVeredComponent
    },

    {
        path:'form/:idEntCatdis',
        component:EntrenadorDisciFormComponent
    }

   
]

export const routing = RouterModule.forChild(routes);