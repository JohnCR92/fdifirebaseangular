import { DISABLED } from '@angular/forms/src/model';
import { AlertasService, DeportistaService } from '../service/deportistafnf.services';
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
    selector: 'deportistafnf-formeditfnf',
    templateUrl: './deportistafnf-formeditfnf.component.html',
    styleUrls: ['./deportistafnf-formeditfnf.component.css']
}

)


export class DeportistaFormeditfnfComponent {


    public edDeportista: any = {
        "fdiPersona": {},
        "fdiCategoriaDisciplina": {
            "fdiCategoria": {},
            "fdiDisciplina": {}
        }

    };



    defaultOption = null;



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
        this.getFNF();
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

    public cargarArchivo(id) {

        if ($('#file').val() == "")
            return console.log("Error", "El archivo es obligatorio.", {});

        this.fileuploadService
            .generarFileRequest('http://localhost:8080/deportista/fotos',
                { objectID: id, numeroDoc: 3 }, this.files)
            .subscribe((response) => {
                console.log('Archivo guardado')
            });
    }

    public setArchivo(event) {
        this.files = (event.srcElement) ? event.srcElement.files : event.target.files;
    }

    location: any;


    selectObjeto(event) {
        this.fileSelected = <File>event.target.files[0];
        console.log(event)
    }

    public getUrlDoc2(cod) {
        return "http://localhost:8080/deportista/document" + "/" + cod;

    }

    public cargarArchivo2(ide) {

        if ($('#file2').val() == "")
            return console.log("Error", "El archivo es obligatorio.", {});

        this.fileuploadService
            .generarFileRequest('http://localhost:8080/deportista/cedulas',
                { objID: ide, numDoc: 1 }, this.files)
            .subscribe((response) => {
                console.log('Archivo guardado')
            });
    }

    public setArchivo2(event) {
        this.files = (event.srcElement) ? event.srcElement.files : event.target.files;
    }

    selectObjeto2(event) {
        this.fileSelected = <File>event.target.files[0];
        console.log(event)
    }

    guardar() {
        //console.log(this.nombre);

        this.deportistaService.saveEdDeportista(this.edDeportista).subscribe((edDeportista: any) => {
            //console.log(autor)
            this.alertaService.mostrarAlertaInfo("Actualizando", "Se Actualizado el Deportista Correctamente!!");
            window.history.back();
            this.getFNF();
            //this.cargarArchivo1(deportista.deporId);

        });

    }

    guardarfoto() {
        //console.log(this.nombre);

        this.deportistaService.saveEdDeportista(this.edDeportista).subscribe((edDeportista: any) => {
            //console.log(autor)
            this.alertaService.mostrarAlertaWarning("Actualizando", "Se Guardo la Foto Deportista Correctamente!!");
            this.cargarArchivo(edDeportista.deporId);
            //this.cargarArchivo1(deportista.deporId);

        });

    }

    guardarcedula() {
        //console.log(this.nombre);

        this.deportistaService.saveEdDeportista(this.edDeportista).subscribe((edDeportista: any) => {
            //console.log(autor)
            this.alertaService.mostrarAlertaWarning("Actualizando", "Se Guardo la Cédula Deportista Correctamente!!");
            this.cargarArchivo2(edDeportista.deporId);
            //this.cargarArchivo1(deportista.deporId);

        });

    }

    guardar2() {
        //console.log(this.nombre);
            //console.log(autor)
            this.alertaService.mostrarAlertaWarning("Actualizando", "Se Guardaron todos los Cambios!!");
            //this.cargarArchivo1(deportista.deporId);

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

    private getFNF() {
        //console.log(this.nombre);
        this.deportistaService.getFNF().subscribe(edDeportistas => {
            this.edDeportistas = edDeportistas;
            

        });

    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }


}