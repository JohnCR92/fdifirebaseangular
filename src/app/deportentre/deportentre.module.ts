import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SmartadminModule} from '../shared/smartadmin.module';
import {routing} from './deportentre.routing';
import { SmartadminDatatableModule } from './../shared/ui/datatable/smartadmin-datatable.module';
//import { restservice } from './../core/service/rest.service';
import {AlertasService, restservice} from "./service/deportentre.services";
import { DisciplinaService } from '../disciplina/service/disciplina.service';
import { CategoriaService } from '../categoria/service/categoria.service';
import { DeportEntreFormComponent } from './form/deportentre-form.component';
import { DeportEntreListComponent } from './list/deportentre-list.component';
import { DeportEntreService } from './service/deportentre.service';
import { EntrenadorService } from 'app/entrenador/service/entrenador.service';
import { DeportistaService } from 'app/deportistafnf/service/deportistafnf.service';
import { CategoriaDisciplinaService } from 'app/categoriadisciplina/service/categoriadisciplina.service';
import { DeportEntreFormeditdeComponent } from './formeditde/deportentre-formeditde.component';
import { EntrenadorDisciService } from 'app/entrenadordisci/service/entrenadordisci.service';
import { DeportEntreFormVerdeComponent } from './fromverde/deportentre-formverde.component';
import { DeportEntreReporteComponent } from './reportes/deportentre-reportes.component';


@NgModule(
    {
        declarations:[
            DeportEntreFormComponent,
            DeportEntreFormeditdeComponent,
            DeportEntreReporteComponent,
            DeportEntreFormVerdeComponent,
            DeportEntreListComponent
            

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
            DeportEntreService,
            EntrenadorDisciService,
            EntrenadorService,
            DeportistaService,
            DisciplinaService,
            CategoriaService,
            AlertasService

        ]
    }
)
export class DeportEntreModule{

}