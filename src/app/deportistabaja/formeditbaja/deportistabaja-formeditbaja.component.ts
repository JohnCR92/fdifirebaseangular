import { DISABLED } from '@angular/forms/src/model';
import { AlertasService, DeportistaService } from '../service/deportistabaja.services';
import { Component, OnInit, ChangeDetectorRef, ViewChild, Renderer2, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Route, Params } from '@angular/router';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
//import { id } from '@swimlane/ngx-datatable/release/utils';
import { restservice } from '../../core/service/rest.service';
import { config } from '../../shared/smartadmin.config';
import { style } from '@angular/animations';
import { PersonaService } from 'app/persona/service/persona.service';
import { CategoriaDisciplinaService } from 'app/categoriadisciplina/service/categoriadisciplina.service';
import { FileUploadService } from 'app/core/service/fileupload.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { CategoriaService } from 'app/categoria/service/categoria.service';
import { DisciplinaService } from 'app/disciplina/service/disciplina.service';

declare var $;
@FadeInTop()

@Component({
    selector: 'deportistabaja-formeditbaja',
    templateUrl: './deportistabaja-formeditbaja.component.html',
    styleUrls: ['./deportistabaja-formeditbaja.component.css']
}

)


export class DeportistaFormeditbajaComponent {


    public edDeportista: any = {
        "fdiPersona": {},
        "fdiCategoriaDisciplina": {
            "fdiCategoria": {},
            "fdiDisciplina": {}
        }

    };



    defaultOption = null;y



    public confirm = true;
    public files: any;
    fileSelected: File = null;
    public edDeportistas: any;
    fdiPersonas: any;
    fdiCategorias: any;
    fdiDisciplinas: any;
    path: string[];
    public fdiCategoriaDisciplinas: any;
    public entorno: string = config.environment;
    constructor(private deportistaService: DeportistaService,
        private activatedRoute: ActivatedRoute,
        private alertaService: AlertasService,
        private personaService: PersonaService,
        private categoriaService: CategoriaService,
        private disciplinaService: DisciplinaService,
        private categoriadisciplinaService: CategoriaDisciplinaService,
        private fileuploadService: FileUploadService
    ) {

    }
    ngOnInit() {
        this.getFdiCategoriaDisciplinas();
        this.getDB();
        this.getFdiPersonas();
        this.getFdiDisciplinas();
        this.getFdiCategorias();
        console.log(config);

        this.entorno = config.environment;

        this.activatedRoute.params.subscribe(params => {
            if (params['deporId']) {
                this.getEdDeportista(params['deporId']);
            }
        });
        //this.restService.get("http://localhost:8090/autor").subscribe(autores =>{
        //  this.autores=autores;
        //console.log(this.autores, "in");
        //});

        //console.log(this.autores, "out");
    }




    private getEdDeportista(deporId: number) {
        this.deportistaService.getEdDeportista(deporId).subscribe(edDeportista => {
            this.edDeportista = edDeportista;
        });

    }

    public getUrlDoc1(codigo) {
        return "http://localhost:8080/deportista/documento" + "/" + codigo;

    }

    public getUrlDoc2(cod) {
        return "http://localhost:8080/deportista/document" + "/" + cod;

    }

    guardar() {
        //console.log(this.nombre);

        this.deportistaService.saveEdDeportista(this.edDeportista).subscribe((edDeportista: any) => {
            //console.log(autor)
            this.alertaService.mostrarAlertaInfo("Actualizando", "Se Actualizado el Deportista dado de Baja Correctamente!!");
            
            window.history.back();
            this.getDB();






            //this.cargarArchivo1(deportista.deporId);









        });

    }

    compare(fromListValue, fromSaveValue) {
        return fromListValue && fromSaveValue ? fromListValue.deporId === fromSaveValue.deporId : null;
    }
    editar(edDeportista: any) {
        //console.log(this.nombre);
        this.edDeportista = Object.assign({}, edDeportista);
    }
    cancelar() {
        //console.log(this.nombre);
        this.edDeportista = {
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

    private getDB() {
        //console.log(this.nombre);
        this.deportistaService.getDB().subscribe(edDeportistas => {
            this.edDeportistas = edDeportistas;

        });

    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }


}