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
    selector: 'entrenadordisci-formvered',
    templateUrl: './entrenadordisci-formvered.component.html',
    styleUrls: ['./entrenadordisci-formvered.component.css']
}

)


export class EntrenadorDisciFormVeredComponent {

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

    public getUrlDoc1(codigo) {
        return "http://localhost:8080/entrenador/documento" + "/" + codigo;

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

    
    print(): void {

        let fdiEntrenadorCatDisciplica = this.fdiEntrenadorCatDisciplica.fdiEntrenador

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
                  <b >DATOS DEL ENTRENADOR CON SU RESPECTIVA DISCIPLINA DEPORTIVA Y CATEGORÍA CORRESPODNIENTE</b>
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
                                <br>
                                <br>
                                <br>
                         <div align="left">
                                <body >
                          <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Cédula: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.fdiEntrenadorCatDisciplica.fdiEntrenador.fdiPersona.prsCedula}
                          </FONT>
                      </b>
                      <b><img  align="right" src="${this.getUrlDoc1(this.fdiEntrenadorCatDisciplica.fdiEntrenador.entreFoto)}"
                                  alt="Smiley face" height="90" width="90"></b>
                      <br>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Apellidos: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.fdiEntrenadorCatDisciplica.fdiEntrenador.fdiPersona.prsApellido}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Nombres: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.fdiEntrenadorCatDisciplica.fdiEntrenador.fdiPersona.prsNombre} 
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Disciplina: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.fdiEntrenadorCatDisciplica.fdiCategoriaDisciplina.fdiDisciplina.disciplinaNombre} 
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Categoría: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.fdiEntrenadorCatDisciplica.fdiCategoriaDisciplina.fdiCategoria.categoriaNombre} 
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Fecha de Nacimiento: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.fdiEntrenadorCatDisciplica.fdiEntrenador.fdiPersona.prsFechaNaciemineto}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Sexo: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.fdiEntrenadorCatDisciplica.fdiEntrenador.fdiPersona.prsSexo}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Email: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.fdiEntrenadorCatDisciplica.fdiEntrenador.fdiPersona.prsCorreo}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Teléfono/Celular: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.fdiEntrenadorCatDisciplica.fdiEntrenador.fdiPersona.prsTelefono}
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