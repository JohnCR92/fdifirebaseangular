import {ModuleWithProviders, Component} from '@angular/core';
import {RouterModule, Routes, Params} from '@angular/router';
import { DatatablesCaseComponent } from './form/datatables-case.component';
import {CategoriaDisciplinaFormComponent} from './form/categoriadisciplina-form.component';
import {CategoriaDisciplinaListComponent} from './list/categoriadisciplina-list.component';
import { CategoriaDisciplinaFormeditcdComponent } from './formeditcd/categoriadisciplina-formeditcd.component';
import { CategoriaDisciplinaReportesComponent } from './reportes/categoriadisciplina-reportes.component';

export const routes: Routes=[
    {
        path:'',
        component:CategoriaDisciplinaListComponent
    },

    {
        path:'form',
        component:CategoriaDisciplinaFormComponent
    },

    {
        path:'reportes',
        component:CategoriaDisciplinaReportesComponent
    },

    {
        path:'form/:catdisciId',
        component:CategoriaDisciplinaFormComponent
    },
    {
        path:'formeditcd/:catdisciId',
        component:CategoriaDisciplinaFormeditcdComponent
    }

]

export const routing=RouterModule.forChild(routes);