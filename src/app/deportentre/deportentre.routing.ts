import {ModuleWithProviders, Component} from '@angular/core';
import {RouterModule, Routes, Params} from '@angular/router';
import { DatatablesCaseComponent } from './form/datatables-case.component';
import { DeportEntreListComponent } from './list/deportentre-list.component';
import { DeportEntreFormComponent } from './form/deportentre-form.component';
import { DeportEntreFormeditdeComponent } from './formeditde/deportentre-formeditde.component';
import { DeportEntreFormVerdeComponent } from './fromverde/deportentre-formverde.component';
import { DeportEntreReporteComponent } from './reportes/deportentre-reportes.component';

export const routes: Routes=[
    {
        path:'',
        component:DeportEntreListComponent
    },

    {
        path:'form',
        component:DeportEntreFormComponent
    },

    {
        path:'reportes',
        component:DeportEntreReporteComponent
    },

    {
        path:'form/:idDepEntre',
        component:DeportEntreFormComponent
    },
    {
        path:'formverde/:idDepEntre',
        component:DeportEntreFormVerdeComponent
    },
    {
        path: 'formeditde/:idDepEntre',
        component: DeportEntreFormeditdeComponent
    }

]

export const routing=RouterModule.forChild(routes);