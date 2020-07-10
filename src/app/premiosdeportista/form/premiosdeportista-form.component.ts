import { DISABLED } from '@angular/forms/src/model';
import { AlertasService, PremiosDeportistaService } from '../service/premiosdeportista.services';
import { Component, OnInit, ChangeDetectorRef, ViewChild, Renderer2, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Route, Params } from '@angular/router';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
//import { id } from '@swimlane/ngx-datatable/release/utils';
import { restservice } from '../../core/service/rest.service';
import { config } from '../../shared/smartadmin.config';
import { style } from '@angular/animations';
import { PersonaService } from 'app/persona/service/persona.service';
import { CategoriaDisciplinaService } from 'app/categoriadisciplina/service/categoriadisciplina.service';
import { CategoriaService } from 'app/categoria/service/categoria.service';
import { DisciplinaService } from 'app/disciplina/service/disciplina.service';
import { DeportistaService } from 'app/deportistafnf/service/deportistafnf.service';
import { CompetenciaService } from 'app/competencia/service/competencia.service';
import { FileUploadService } from 'app/core/service/fileupload.service';


declare var $;
@FadeInTop()

@Component({
    selector: 'premiosdeportista-form',
    templateUrl: './premiosdeportista-form.component.html',
    styleUrls: ['./premiosdeportista-form.component.css']
}

)


export class PremiosDeportistaFormComponent {

    public edPremiosDeportista: any = {
        "competencia": {},
        "edDeportista": {},
        "fdiPersona": {},
        "fdiCategoriaDisciplina": {
            "fdiCategoria": {},
            "fdiDisciplina": {}
        }

    };

    public confirm = true;
    public files: any;
    fileSelected: File = null;
    public edPremiosDeportistas: any;
    fdiPersonas: any;
    competencias: any;
    edDeportistas: any;
    fdiCategoriaDisciplinas: any;
    fdiCategorias: any;
    fdiDisciplinas: any;
    public entorno: string = config.environment;
    constructor(private premiosdeportistaService: PremiosDeportistaService,
        private activatedRoute: ActivatedRoute,
        private alertasService: AlertasService,
        private deportistaService: DeportistaService,
        private competenciaService: CompetenciaService,
        private personaService: PersonaService,
        private categoriaService: CategoriaService,
        private disciplinaService: DisciplinaService,
        private fileuploadService: FileUploadService,
        private categoriadisciplinaService: CategoriaDisciplinaService
    ) {

    }
    ngOnInit() {
        this.getFdiCategoriaDisciplinas();
        this.getCompetencias();
        this.getFNF();
        this.getEdPremiosDeportistas();
        this.getFdiCategorias();
        this.getFdiDisciplinas();
        this.getFdiPersonas();
        console.log(config);

        this.entorno = config.environment;

        this.activatedRoute.params.subscribe(params => {
            if (params['idPremios']) {
                this.getEdPremiosDeportista(params['idPremios']);
            }
        });
        //this.restService.get("http://localhost:8090/autor").subscribe(autores =>{
        //  this.autores=autores;
        //console.log(this.autores, "in");
        //});

        //console.log(this.autores, "out");
    }

    private getEdPremiosDeportista(idPremios: number) {
        this.premiosdeportistaService.getEdPremiosDeportista(idPremios).subscribe(edPremiosDeportista => {
            this.edPremiosDeportista = edPremiosDeportista;
        });

    }



    public getUrlDoc1(codigo) {
        return "http://localhost:8080/deportista/documento" + "/" + codigo;

    }

    guardar() {

        //console.log(this.nombre);
        this.premiosdeportistaService.saveEdPremiosDeportista(this.edPremiosDeportista).subscribe(edPremiosDeportista => {
            //console.log(autor);
            this.alertasService.mostrarAlertaInfo("Actualizando", "Se guardo el Premio del Deportista Correctamente!!")
            window.history.back();
            this.getEdPremiosDeportistas();
        });
    }

    compare(fromListValue, fromSaveValue) {
        return fromListValue && fromSaveValue ? fromListValue.idPremios === fromSaveValue.idPremios : null;
    }
    editar(edPremiosDeportista: any) {
        //console.log(this.nombre);
        this.edPremiosDeportista = Object.assign({}, edPremiosDeportista);
    }
    cancelar() {
        //console.log(this.nombre);
        this.edPremiosDeportista = {
            "competencia": {},
            "edDeportista": {},
            "fdiPersona": {},
            "fdiCategoriaDisciplina": {
                "fdiCategoria": {},
                "fdiDisciplina": {}
            }
        };
    }

    atras() {
        //console.log(this.nombre);
        window.history.back();
    }

    private getFdiCategoriaDisciplinas() {
        //console.log(this.nombre);
        this.categoriadisciplinaService.getFdiCategoriaDisciplinas().subscribe(fdiCategoriaDisciplinas => {
            this.fdiCategoriaDisciplinas = fdiCategoriaDisciplinas;
        });

    }

    private getFdiPersonas() {
        //console.log(this.nombre);
        this.personaService.getFdiPersonas().subscribe(fdiPersonas => {
            this.fdiPersonas = fdiPersonas;
        });

    }

    private getCompetencias() {
        //console.log(this.nombre);
        this.competenciaService.getCompetencias().subscribe(competencias => {
            this.competencias = competencias;
        });

    }

    private getFNF() {
        //console.log(this.nombre);
        this.deportistaService.getFNF().subscribe(edDeportistas => {
            this.edDeportistas = edDeportistas;
        });

    }

    private getFdiCategorias() {
        //console.log(this.nombre);
        this.categoriaService.getFdiCategorias().subscribe(fdiCategorias => {
            this.fdiCategorias = fdiCategorias;
        });

    }

    private getFdiDisciplinas() {
        //console.log(this.nombre);
        this.disciplinaService.getFdiDisciplinas().subscribe(fdiDisciplinas => {
            this.fdiDisciplinas = fdiDisciplinas;
        });

    }

    private getEdPremiosDeportistas() {
        //console.log(this.nombre);
        this.premiosdeportistaService.getEdPremiosDeportistas().subscribe(edPremiosDeportistas => {
            this.edPremiosDeportistas = edPremiosDeportistas;
        });

    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }
}