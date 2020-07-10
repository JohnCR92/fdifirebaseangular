import { DISABLED } from '@angular/forms/src/model';
import { AlertasService, EntrenadorService } from '../service/entrenador.services';
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
import { FileUploadService } from 'app/core/service/fileupload.service';
import { Entrenador } from './Entrenador';
import { isFulfilled } from 'q';

declare var $;
@FadeInTop()

@Component({
    selector: 'asistencia',
    templateUrl: './asistencia.component.html',
    styleUrls: ['./asistencia.component.css']
}

)


export class AsistenciaComponent {

    public fdiEntrenador: any = {
        "fdiPersona": {},
        "fdiCategoriaDisciplina": {
            "fdiCategoria": {},
            "fdiDisciplina": {}
        }

    };

    public disciplinas: any;
    public confirm = true;
    edDeportistas: any
    public files: any;
    fileSelected: File = null;
    public fdiEntrenadors: Entrenador[];
    fdiPersonas: any;
    
    fdiCategoriaDisciplinas: any;
    fdiCategorias: any;
    fdiDisciplinas: any;
    public entorno: string = config.environment;
    constructor(private entrenadorService: EntrenadorService,
        private activatedRoute: ActivatedRoute,
        private alertaService: AlertasService,
        private personaService: PersonaService,
        private categoriaService: CategoriaService,
        private disciplinaService: DisciplinaService,
        private fileuploadService: FileUploadService,
        private categoriadisciplinaService: CategoriaDisciplinaService
    ) {

    }
    ngOnInit() {
        this.getFdiCategoriaDisciplinas();
        this.getFdiEntrenadors();
        this.getFdiCategorias();
        this.getFdiDisciplinas();
        this.getFdiPersonas();
        console.log(config);
        this.fdiEntrenadors = new Array<Entrenador>();

        this.entorno = config.environment;

        this.activatedRoute.params.subscribe(params => {
            if (params['entreId']) {
                this.getFdiEntrenador(params['entreId']);
            }
        });
        //this.restService.get("http://localhost:8090/autor").subscribe(autores =>{
        //  this.autores=autores;
        //console.log(this.autores, "in");
        //});

        //console.log(this.autores, "out");
    }
    public cargando:boolean;
    getDeportitasByEntrenador(disciplina: any) {
        this.cargando = true;
        this.entrenadorService.getDeportistas(this.identrenador, disciplina).subscribe(edDeportistas => {
            this.edDeportistas = edDeportistas;
            this.cargando = false;
            console.log(edDeportistas);
        }, error =>{
            this.cargando = false;
        });

    }

    private getFdiEntrenador(entreId: number) {
        this.entrenadorService.getFdiEntrenador(entreId).subscribe(fdiEntrenador => {
            this.fdiEntrenador = fdiEntrenador;
        });

    }



    public getUrlDoc1(codigo) {
        return "http://localhost:8080/entrenador/documento" + "/" + codigo;

    }

    public cargarArchivo(id) {

        if ($('#file').val() == "")
            return console.log("Error", "El archivo es obligatorio.", {});

        this.fileuploadService
            .generarFileRequest('http://localhost:8080/entrenador/fotos',
                { objectID: id, numeroDoc: 1 }, this.files)
            .subscribe((response) => {
                console.log('Archivo guardado')
            });
    }

    public setArchivo(event) {
        this.files = (event.srcElement) ? event.srcElement.files : event.target.files;
    }

    selectObjeto(event) {
        this.fileSelected = <File>event.target.files[0];
        console.log(event)
    }

    guardar() {
        //console.log(this.nombre);

        this.entrenadorService.saveFdiEntrenador(this.fdiEntrenador).subscribe((fdiEntrenador: any) => {
            //console.log(autor)
            this.alertaService.mostrarAlertaInfo("Actualizando", "El Registro del Entrenador se Guardo Correctamente!!");
            this.cargarArchivo(fdiEntrenador.entreId);
            window.history.back();
            this.getFdiEntrenadors();

        });

    }

    compare(fromListValue, fromSaveValue) {
        return fromListValue && fromSaveValue ? fromListValue.entreId === fromSaveValue.entreId : null;
    }
    editar(fdiEntrenador: any) {
        //console.log(this.nombre);
        this.fdiEntrenador = Object.assign({}, fdiEntrenador);
    }
    cancelar() {
        //console.log(this.nombre);
        this.fdiEntrenador = {
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
        this.entrenadorService.getFdiEntrenadors().subscribe((fdiEntrenadors: any) => {
            this.fdiEntrenadors = fdiEntrenadors;
            console.log(fdiEntrenadors)
        });

    }

    public identrenador: number
 
    getDisciplinas(value) {
        let dato = this.fdiEntrenadors.find(x => x.entreId == value)
        if (dato) {
            this.fdiCategoriaDisciplinas = dato.disciplicas
            this.identrenador = dato.entreId

        } else {
            this.fdiCategoriaDisciplinas = [];
        }
        return this.fdiCategoriaDisciplinas;
    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }
}