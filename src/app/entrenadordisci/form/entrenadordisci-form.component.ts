import { DISABLED } from '@angular/forms/src/model';
import { AlertasService, EntrenadorDisciService } from '../service/entrenadordisci.services';
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
import { EntrenadorService } from 'app/entrenador/service/entrenador.service';


declare var $;
@FadeInTop()

@Component({
    selector: 'entrenadordisci-form',
    templateUrl: './entrenadordisci-form.component.html',
    styleUrls: ['./entrenadordisci-form.component.css']
}

)


export class EntrenadorDisciFormComponent {

    public fdiEntrenadorCatDisciplica: any = {
        "fdiEntrenador": {
            "fdiPersona": {}
        },

        "fdiCategoriaDisciplina": {
            "fdiCategoria": {},
            "fdiDisciplina": {}
        }

    };

    public confirm = true;
    public files: any;
    fileSelected: File = null;
    public fdiEntrenadorCatDisciplicas: any;
    fdiEntrenadors: any;
    fdiPersonas: any;
    fdiCategoriaDisciplinas: any;
    fdiCategorias: any;
    fdiDisciplinas: any;
    public entorno: string = config.environment;
    constructor(private entrenadorDisciService: EntrenadorDisciService,
        private entrenadorService: EntrenadorService,
        private activatedRoute: ActivatedRoute,
        private alertaService: AlertasService,
        private personaService: PersonaService,
        private categoriaService: CategoriaService,
        private disciplinaService: DisciplinaService,
        private categoriadisciplinaService: CategoriaDisciplinaService
    ) {

    }
    ngOnInit() {
        this.getFdiCategoriaDisciplinas();
        this.getFdiEntrenadorCatDisciplicas();
        this.getFdiEntrenadors();
        this.getFdiCategorias();
        this.getFdiDisciplinas();
        this.getFdiPersonas();
        console.log(config);

        this.entorno = config.environment;

        this.activatedRoute.params.subscribe(params => {
            if (params['idEntCatdis']) {
                this.getFdiEntrenadorCatDisciplica(params['idEntCatdis']);
            }
        });
        //this.restService.get("http://localhost:8090/autor").subscribe(autores =>{
        //  this.autores=autores;
        //console.log(this.autores, "in");
        //});

        //console.log(this.autores, "out");
    }

    private getFdiEntrenadorCatDisciplica(idEntCatdis: number) {
        this.entrenadorDisciService.getFdiEntrenadorCatDisciplica(idEntCatdis).subscribe(fdiEntrenadorCatDisciplica => {
            this.fdiEntrenadorCatDisciplica = fdiEntrenadorCatDisciplica;
        });

    }

    guardar() {
        //console.log(this.nombre);
        console.log(this.fdiEntrenadorCatDisciplica);
        delete this.fdiEntrenadorCatDisciplica.disciplicas
        this.entrenadorDisciService.saveFdiEntrenadorCatDisciplica(this.fdiEntrenadorCatDisciplica).subscribe(fdiEntrenadorCatDisciplica => {
            //console.log(autor);
            this.alertaService.mostrarAlertaInfo("Actualizando", "Se a guardado el Entrenador con su Respectiva Disciplina Deportiva Correctamente!!")
            window.history.back();
            this.getFdiEntrenadorCatDisciplicas();
        });

    }

    compare(fromListValue, fromSaveValue) {
        return fromListValue && fromSaveValue ? fromListValue.idEntCatdis === fromSaveValue.idEntCatdis : null;
    }
    editar(fdiEntrenadorCatDisciplica: any) {
        //console.log(this.nombre);
        this.fdiEntrenadorCatDisciplica = Object.assign({}, fdiEntrenadorCatDisciplica);
    }
    cancelar() {
        //console.log(this.nombre);
        this.fdiEntrenadorCatDisciplica = {
            "fdiEntrenador": {},
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

    private getFdiEntrenadors() {
        //console.log(this.nombre);
        this.entrenadorService.getFdiEntrenadors().subscribe(fdiEntrenadors => {
            this.fdiEntrenadors = fdiEntrenadors;
        });

    }

    private getFdiEntrenadorCatDisciplicas() {
        //console.log(this.nombre);
        this.entrenadorDisciService.getFdiEntrenadorCatDisciplicas().subscribe(fdiEntrenadorCatDisciplicas => {
            this.fdiEntrenadorCatDisciplicas = fdiEntrenadorCatDisciplicas;
        });

    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }
}