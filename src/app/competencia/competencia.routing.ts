import {RouterModule, Routes, Params} from '@angular/router';
import { DatatablesCaseComponent } from './form/datatables-case.component';
import { CompetenciaListComponent } from './list/competencia-list.component';
import { CompetenciaFormComponent } from './form/competencia-form.component';
import { CompetenciaFormeditcComponent } from './formeditc/competencia-formeditc.component';
import { CompetenciaReportesComponent } from './reportes/competencia-reportes.component';

export const routes: Routes=[
    {
        path:'',
        component:CompetenciaListComponent
    },

    {
        path:'form',
        component:CompetenciaFormComponent
    },

    {
        path:'reportes',
        component:CompetenciaReportesComponent
    },

    {
        path:'form/:idCompetencia',
        component:CompetenciaFormComponent
    },
    {
        path:'formeditc/:idCompetencia',
        component:CompetenciaFormeditcComponent
    }


]

export const routing=RouterModule.forChild(routes);