import {ModuleWithProviders, Component} from '@angular/core';
import {RouterModule, Routes, Params} from '@angular/router';
import { DatatablesCaseComponent } from './form/datatables-case.component';
import {DisciplinaFormComponent} from './form/disciplina-form.component';
import {DisciplinaListComponent} from './list/disciplina-list.component';
import { DisciplinaFormeditdComponent } from './formeditd/disciplina-formeditd.component';
import { DisciplinaReportesComponent } from './reportes/disciplina-reportes.component';

export const routes: Routes=[
    {
        path:'',
        component:DisciplinaListComponent
    },

    {
        path:'form',
        component:DisciplinaFormComponent
    },

    {
        path:'reportes',
        component:DisciplinaReportesComponent
    },

    {
        path:'form/:disciplinaId',
        component:DisciplinaFormComponent
    },
    {
        path:'formeditd/:disciplinaId',
        component:DisciplinaFormeditdComponent
    },


]

export const routing=RouterModule.forChild(routes);