import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SmartadminModule} from '../shared/smartadmin.module';
import {routing} from './categoriadisciplina.routing';
import {CategoriaDisciplinaFormComponent} from './form/categoriadisciplina-form.component';
import { SmartadminDatatableModule } from './../shared/ui/datatable/smartadmin-datatable.module';
//import { restservice } from './../core/service/rest.service';
import {AlertasService, restservice, CategoriaDisciplinaService} from "./service/categoriadisciplina.services";
import { CategoriaDisciplinaListComponent } from './list/categoriadisciplina-list.component';
import { DisciplinaService } from '../disciplina/service/disciplina.service';
import { CategoriaService } from '../categoria/service/categoria.service';
import { CategoriaDisciplinaFormeditcdComponent } from './formeditcd/categoriadisciplina-formeditcd.component';
import { CategoriaReportesComponent } from 'app/categoria/reportes/categoria-reportes.component';
import { CategoriaDisciplinaReportesComponent } from './reportes/categoriadisciplina-reportes.component';
import { ExcelService } from 'app/core/service/excel.service';


@NgModule(
    {
        declarations:[
            CategoriaDisciplinaFormComponent,
            CategoriaDisciplinaFormeditcdComponent,
            CategoriaDisciplinaListComponent,
            CategoriaDisciplinaReportesComponent

        ],
        imports:[
            SmartadminModule,
            routing,
            FormsModule,
            SmartadminDatatableModule 

        ],
        providers:[
            restservice,
            CategoriaDisciplinaService,
            DisciplinaService,
            CategoriaService,
            AlertasService,
            ExcelService

        ]
    }
)
export class CategoriaDisciplinaModule{

}