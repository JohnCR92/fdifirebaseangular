import {ModuleWithProviders, Component} from '@angular/core';
import {RouterModule, Routes, Params} from '@angular/router';
import {CentrenamientoFormComponent} from './form/centrenamiento-form.component';
import { DatatablesCaseComponent } from './form/datatables-case.component';
import {CentrenamientoListComponent} from './list/centrenamiento-list.component';
import { CentrenamientoReporteComponent } from './reportes/centrenamiento-reportes.component';

export const routes: Routes=[
    {
        path:'',
        component:CentrenamientoListComponent
    },

    {
        path:'form',
        component:CentrenamientoFormComponent
    },

    {
        path:'reportes',
        component:CentrenamientoReporteComponent
    },

    {
        path:'form/:campentreId',
        component:CentrenamientoFormComponent
    }

]

export const routing=RouterModule.forChild(routes);

