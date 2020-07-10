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
    selector: 'deportistafnf-formverfnf',
    templateUrl: './deportistafnf-formverfnf.component.html',
    styleUrls: ['./deportistafnf-formverfnf.component.css']
}

)


export class DeportistaFormverfnfComponent {


    public edDeportista: any = {
        "fdiPersona": {},
        "fdiCategoriaDisciplina": {
            "fdiCategoria": {},
            "fdiDisciplina": {}
        }

    };



    defaultOption = null; y



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

    public getUrlDoc2(cod) {
        return "http://localhost:8080/deportista/document" + "/" + cod;

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
        this.edDeportista = {};
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

    print(): void {

        let edDeportista = this.edDeportista.fdiPersona

        let printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
        
            <html>
            
              <head>
              
                <title align="rigth">FEDERACIÓN DEPORTIVA DE IMBABURA</title>
                
        
                <style>
                
                @page {
                  size: 210mm 297mm;
                  margin: 20mm 20mm 20mm 20mm;
                  
               }
               body{
                  
               }
               h4{
                   color:#808080;
               }
               textarea{ 
                 
                  width: 100%; 
                  border:none;
                  font-size: 12,5px;
                  height=100%;
                  text-align: justify;
                  
                  
              } 
              }
                </style>
                
              </head>
          <body onload="window.print();window.close()">
          <img align="right" src="assets/img/FDI.png" alt="SmartAdmin" height="65" width="65">
          <img align="left" src="assets/img/fdiiii.png" alt="SmartAdmin" height="65" width="65">
          <br>
                  <br>
                  <div align="center">
                  <body>
                  <body>
                  <body>
                  <b >DATOS DEL DEPORTISTA</b>
                  </body>
                  <br>
                  <body>
                  <b>---------------------------------------------------------------</b>
                  </body>
                  </body>
                  </body>
                  </div>
                                <br>
                                <br>
                                <br>
                                <br>
                         <div align="left">
                                <body >
                          <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Cédula: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.edDeportista.fdiPersona.prsCedula}
                          </FONT>
                      </b>
                      <b><img  align="right" src="${this.getUrlDoc1(this.edDeportista.deportFoto)}"
                                  alt="Smiley face" height="90" width="90"></b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Apellidos: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.edDeportista.fdiPersona.prsApellido}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Nombres: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.edDeportista.fdiPersona.prsNombre} 
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Disciplina: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportista.fdiCategoriaDisciplina.fdiDisciplina.disciplinaNombre}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Categoria: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportista.fdiCategoriaDisciplina.fdiCategoria.categoriaNombre}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Fecha de Nacimiento: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportista.fdiPersona.prsFechaNaciemineto}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Sexo: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportista.fdiPersona.prsSexo}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Tipo del Deportista: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportista.deportTipodeportista}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Talla del Uniforme: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportista.deportTallaunif}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Calzado: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportista.deportCalzado}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Número de Hermanos: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportista.deportNrohermanos}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Estrato Social: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportista.deportEstratosocial}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Nivel Educativo: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportista.deportNiveleducativo}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Institudción Educativa: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportista.deportInstieducativa}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* DIRECTOR DTM: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          __________________________
                          </FONT>
                      </b>
                      
                      </body>
                      </div>
                          
  
          </body>
            </html>`
        );
        popupWin.document.close();

    }



}