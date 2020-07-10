import {RouterModule, Routes, Params} from '@angular/router';
import {CategoriaFormComponent} from './form/categoria-form.component';
import { DatatablesCaseComponent } from './form/datatables-case.component';
import {CategoriaListComponent} from './list/categoria-list.component';
import { CategoriaReportesComponent } from './reportes/categoria-reportes.component';

export const routes: Routes=[
    {
        path:'',
        component:CategoriaListComponent
    },

    {
        path:'form',
        component:CategoriaFormComponent
    },

    {
        path:'reportes',
        component:CategoriaReportesComponent
    },

    {
        path:'form/:categoriaId',
        component:CategoriaFormComponent
    }

]

export const routing=RouterModule.forChild(routes);