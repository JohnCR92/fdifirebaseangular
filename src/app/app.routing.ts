/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: {pageTitle: 'Entrenamiento Deprotivo / Inicio'},
    children: [
      {
        path: '', redirectTo: 'deportista/findFNF', pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',
        data: {pageTitle: 'Dashboard'}
      },
      {
        path: 'smartadmin',
        loadChildren: 'app/+smartadmin-intel/smartadmin-intel.module#SmartadminIntelModule',
        data: {pageTitle: 'Smartadmin'}
      },
      {
        path: 'app-views',
        loadChildren: 'app/+app-views/app-views.module#AppViewsModule',
        data: {pageTitle: 'App Views'}
      },
      {
        path: 'calendar',
        loadChildren: 'app/+calendar/calendar.module#CalendarModule'
      },
      {
        path: 'e-commerce',
        loadChildren: 'app/+e-commerce/e-commerce.module#ECommerceModule',
        data: {pageTitle: 'E-commerce'}
      },

      {
        path: 'forms',
        loadChildren: 'app/+forms/forms-showcase.module#FormsShowcaseModule',
        data: {pageTitle: 'Forms'}
      },
      {
        path: 'form',
        loadChildren: 'app/+form/form-showcase.module#FormShowcaseModule',
        data: {pageTitle: 'Form'}
      },
      {
        path: 'graphs',
        loadChildren: 'app/+graphs/graphs-showcase.module#GraphsShowcaseModule',
        data: {pageTitle: 'Graphs'}
      },
      {
        path: 'maps',
        loadChildren: 'app/+maps/maps.module#MapsModule',
        data: {pageTitle: 'Maps'}
      },
      {
        path: 'miscellaneous',
        loadChildren: 'app/+miscellaneous/miscellaneous.module#MiscellaneousModule',
        data: {pageTitle: 'Miscellaneous'}
      },
      {
        path: 'outlook',
        loadChildren: 'app/+outlook/outlook.module#OutlookModule',
        data: {pageTitle: 'Outlook'}
      },
      {
        path: 'centrenamiento',
        loadChildren: 'app/centrenamiento/centrenamiento.module#CentrenamientoModule',
        data: {pageTitle: 'Campos de Entrenamiento'}
      },
      {
        path: 'persona',
        loadChildren: 'app/persona/persona.module#PersonaModule',
        data: {pageTitle: 'Personas'}
      },
      {
        path: 'deportista/findA',
        loadChildren: 'app/deportista/deportista.module#DeportistaModule',
        data: {pageTitle: 'Deportistas'}
      },
      {
        path: 'deportista/findFNF',
        loadChildren: 'app/deportistafnf/deportistafnf.module#DeportistaModule',
        data: {pageTitle: 'Deportistas'}
      },
      {
        path: 'deportista/findDB',
        loadChildren: 'app/deportistabaja/deportistabaja.module#BajaDeportistaModule',
        data: {pageTitle: 'Deportistas dados de Baja'}
      },
      {
        path: 'disciplina',
        loadChildren: 'app/disciplina/disciplina.module#DisciplinaModule',
        data: {pageTitle: 'Disciplinas Deportivas'}
      },
      {
        path: 'categoria',
        loadChildren: 'app/categoria/categoria.module#CategoriaModule',
        data: {pageTitle: 'Categorias'}
      },
      {
        path: 'categoriadisciplina',
        loadChildren: 'app/categoriadisciplina/categoriadisciplina.module#CategoriaDisciplinaModule',
        data: {pageTitle: 'Categorias con su Respectiva disciplina'}
      },
      {
        path: 'competencia',
        loadChildren: 'app/competencia/competencia.module#CompetenciaModule',
        data: {pageTitle: 'Competencias'}
      },
      {
        path: 'entrenador',
        loadChildren: 'app/entrenador/entrenador.module#EntrenadorModule',
        data: {pageTitle: 'Entrenadores'}
      },
      {
        path: 'premiosdeportista',
        loadChildren: 'app/premiosdeportista/premiosdeportista.module#PremiosDeportistaModule',
        data: {pageTitle: 'Medallas de los Deportistas'}
      },
      {
        path: 'entrenadordisci',
        loadChildren: 'app/entrenadordisci/entrenadordisci.module#EntrenadorDisciModule',
        data: {pageTitle: 'Entrenadores con sus Respectivas Disciplinas'}
      },

      {
        path: 'deportentre',
        loadChildren: 'app/deportentre/deportentre.module#DeportEntreModule',
        data: {pageTitle: 'Entrenadores con sus Respectivos Deportistas'}
      },
     
      {
        path: 'tables',
        loadChildren: 'app/+tables/tables.module#TablesModule',
        data: {pageTitle: 'Tables'}
      },
      {
        path: 'ui',
        loadChildren: 'app/+ui-elements/ui-elements.module#UiElementsModule',
        data: {pageTitle: 'Ui'}
      },
      {
        path: 'widgets',
        loadChildren: 'app/+widgets/widgets-showcase.module#WidgetsShowcaseModule',
        data: {pageTitle: 'Widgets'}
      },
    ]
  },

  {path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule'},

  {path: '**', redirectTo: 'miscellaneous/error404'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
