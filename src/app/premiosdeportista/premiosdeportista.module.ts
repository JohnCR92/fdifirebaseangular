import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SmartadminModule} from '../shared/smartadmin.module';
import {routing} from './premiosdeportista.routing';
import { SmartadminDatatableModule } from './../shared/ui/datatable/smartadmin-datatable.module';
//import { restservice } from './../core/service/rest.service';
import {AlertasService, restservice} from "./service/premiosdeportista.services";
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
import { DeportistaService } from 'app/deportistafnf/service/deportistafnf.service';
import { PremiosDeportistaService } from './service/premiosdeportista.service';
import { PremiosDeportistaFormComponent } from './form/premiosdeportista-form.component';
import { PremiosDeportistaListComponent } from './list/premiosdeportista-list.component';
import { CompetenciaService } from 'app/competencia/service/competencia.service';
import { PremiosDeportistaFormeditComponent } from './formeditp/premiosdeportista-formeditp.component';
import { PremiosDeportistaReportesComponent } from './reportes/premiosdeportista-reportes.component';
import { PremiosDeportistaFormVerComponent } from './formver/premiosdeportista-formver.component';

@NgModule(
    {
        declarations:[
            PremiosDeportistaFormComponent,
            PremiosDeportistaListComponent,
            PremiosDeportistaReportesComponent,
            PremiosDeportistaFormVerComponent,
            PremiosDeportistaFormeditComponent

            

        ],
        imports:[
            SmartadminModule,
            routing,
            FormsModule,
            SmartadminDatatableModule 
        ],
        providers:[
            restservice,
            DeportistaService,
            PremiosDeportistaService,
            CompetenciaService,
            CategoriaService,
            DisciplinaService,
            CategoriaDisciplinaService,
            PersonaService,
            AlertasService,
            FileUploadService

        ]
    }
)
export class PremiosDeportistaModule{

}