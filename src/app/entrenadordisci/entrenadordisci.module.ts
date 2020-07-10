import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SmartadminModule} from '../shared/smartadmin.module';
import {routing} from './entrenadordisci.routing';
import { SmartadminDatatableModule } from './../shared/ui/datatable/smartadmin-datatable.module';
//import { restservice } from './../core/service/rest.service';
import {AlertasService, restservice} from "./service/entrenadordisci.services";
import { DeportistaListComponent } from './list/deportista-list.component';
import { DeportistaFormComponent } from './form/deportista-form.component';
import { CategoriaDisciplinaService } from 'app/categoriadisciplina/service/categoriadisciplina.service';
import { PersonaService } from 'app/persona/service/persona.service';
import { DeportistaFormeditaComponent } from './formedita/deportista-formedita.component';
import { DeportistaFormeditfnfComponent } from './formeditfnf/deportistafnf-formeditfnf.component';
import { DeportistafnfFormComponent } from './form/deportistafnf-form.component';
import { DeportistafnfListComponent } from './list/deportistafnf-list.component';
import { FileUploadService } from 'app/core/service/fileupload.service';
import { DeportistaFormfotoComponent } from './formfoto/deportistafnf-formfoto.component';
import { DeportistaFormverfnfComponent } from './formverfnf/deportistafnf-formverfnf.component';
import { CategoriaService } from 'app/categoria/service/categoria.service';
import { DisciplinaService } from 'app/disciplina/service/disciplina.service';
import { EntrenadorFormComponent } from './form/entrenador-form.component';
import { EntrenadorListComponent } from './list/entrenador-list.component';
import { EntrenadorFormeditComponent } from './formedite/entrenador-formedite.component';
import { ListEntrenadorFormComponent } from './form/listentredeport-form.component';
import { EntrenadorDisciFormComponent } from './form/entrenadordisci-form.component';
import { EntrenadorDisciListComponent } from './list/entrenadordisci-list.component';
import { EntrenadorDisciService } from './service/entrenadordisci.service';
import { EntrenadorService } from 'app/entrenador/service/entrenador.service';
import { EntrenadorDisciFormEditedComponent } from './formedited/entrenadordisci-formedited.component';
import { EntrenadorDisciFormVeredComponent } from './formvered/entrenadordisci-formvered.component';
import { EntrenadorDisciReportesComponent } from './reportes/entrenadordisci-reportes.component';

@NgModule(
    {
        declarations:[
            EntrenadorDisciFormComponent,
            EntrenadorDisciFormEditedComponent,
            EntrenadorDisciReportesComponent,
            EntrenadorDisciFormVeredComponent,
            EntrenadorDisciListComponent

            

        ],
        imports:[
            SmartadminModule,
            routing,
            FormsModule,
            SmartadminDatatableModule 
        ],
        providers:[
            restservice,
            EntrenadorDisciService,
            EntrenadorService,
            CategoriaService,
            DisciplinaService,
            CategoriaDisciplinaService,
            PersonaService,
            AlertasService,
            FileUploadService

        ]
    }
)
export class EntrenadorDisciModule{

}