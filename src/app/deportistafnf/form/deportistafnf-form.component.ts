import { DISABLED } from '@angular/forms/src/model';
import { AlertasService, DeportistaService } from '../service/deportistafnf.services';
import { FileUploadService } from 'app/core/service/fileupload.service';

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

declare var $;

@FadeInTop()

@Component({
    selector: 'deportistafnf-form',
    templateUrl: './deportistafnf-form.component.html',
    styleUrls: ['./deportistafnf-form.component.css']
}

)


export class DeportistafnfFormComponent {

    public deportista: any = {
        "fdiPersona": {},
        "fdiCategoria": {},
        "fdiCategoriaDisciplina": {}
    };
    public files:any;
    fileSelected:File= null;
    public deportistas: any;
    fdiPersonas: any;
    fdiCategorias: any;
    fdiCategoriaDisciplinas: any;
    public entorno: string = config.environment;
    constructor(private deportistaService: DeportistaService,
        private activatedRoute: ActivatedRoute,
        private alertaService: AlertasService,
        private personaService: PersonaService,
        private categoriaService: CategoriaService,
        private categoriadisciplinaService: CategoriaDisciplinaService, private fileuploadService: FileUploadService
    ) {

    }
    ngOnInit() {
        this.getFdiCategoriaDisciplinas();
        this.getFNF();
        this.getFdiCategorias();
        this.getFdiPersonas();
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

    public cargarArchivo(id)

    {
  
      if($('#file').val() == "")
        return console.log("Error", "El archivo es obligatorio.", {});
  
      this.fileuploadService
      .generarFileRequest('http://localhost:8080/deportista/fotos', 
      {objectID: id, numeroDoc: 1}, this.files)
      .subscribe((response) => {
        this.alertaService.mostrarAlertaInfo("Actualizando", "Se a guardado el Aspirante Correctamente!!")
        window.history.back();
       console.log('Archivo guardado')
       this.getFNF();
      });
    }

    public setArchivo(event)
  {
    this.files = (event.srcElement) ? event.srcElement.files : event.target.files;
  }

    selectObjeto(event){
        this.fileSelected = <File>event.target.files[0];
        console.log(event)
    }

    

    private getEdDeportista(deporId: number) {
        this.deportistaService.getEdDeportista(deporId).subscribe(deportista => {
            this.deportista = deportista;
        });

    }


    guardar() {
        //console.log(this.nombre);

        this.deportistaService.saveEdDeportista(this.deportista).subscribe((deportista:any) => {
            //console.log(autor);
            this.cargarArchivo(deportista.deporId);       
            
            
        });

    }
    compare(fromListValue, fromSaveValue) {
        return fromListValue && fromSaveValue ? fromListValue.deporId === fromSaveValue.deporId : null;
    }
    editar(deportista: any) {
        //console.log(this.nombre);
        this.deportista = Object.assign({}, deportista);
    }
    cancelar() {
        //console.log(this.nombre);
        this.deportista = {};
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

    private getFNF() {
        //console.log(this.nombre);
        this.deportistaService.getFNF().subscribe(deportistas => {
            this.deportistas = deportistas;
        });

    }
}