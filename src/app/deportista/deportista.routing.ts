import { RouterModule, Routes, Params } from '@angular/router';
import { DatatablesCaseComponent } from './form/datatables-case.component';
import { DeportistaListComponent } from './list/deportista-list.component';
import { DeportistaFormComponent } from './form/deportista-form.component';
import { DeportistaFormeditaComponent } from './formedita/deportista-formedita.component';
import { DeportistaFormeditfnfComponent } from './formeditfnf/deportista-formeditfnf.component';

export const routes: Routes = [
    {
        path: '',
        component: DeportistaListComponent
    },
    {
        path:'form',
        component:DeportistaFormComponent
    },

    {
        path:'form/:deporId',
        component:DeportistaFormComponent
    },
    {
        path: 'formedita/:deporId',
        component: DeportistaFormeditaComponent
    }

   
]

export const routing = RouterModule.forChild(routes);