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
    selector: 'premiosdeportista-formver',
    templateUrl: './premiosdeportista-formver.component.html',
    styleUrls: ['./premiosdeportista-formver.component.css']
}

)


export class PremiosDeportistaFormVerComponent {

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

    guardar(){

        //console.log(this.nombre);
        this.premiosdeportistaService.saveEdPremiosDeportista(this.edPremiosDeportista).subscribe(edPremiosDeportista =>{
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

    print(): void {

        let edPremiosDeportista = this.edPremiosDeportista

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
                  <body align="center">
                  <body>
                  <b >MEDALLAS DEL DEPORTISTA OBTENIDAS EN LA COMPETENCIA</b>
                  </body>
                  <br>
                  <body>
                  <b align="center">---------------------------------------------------------------</b>
                  </body>
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
                                <FONT SIZE=4>* Nombre de la Competencia: </FONT>
                            </label><b>
                                <FONT SIZE=3>${edPremiosDeportista.competencia.nombreCompetencia}
                                </FONT>
                            </b>
                            <b> <img align="right" src="${this.getUrlDoc1(this.edPremiosDeportista.edDeportista.deportFoto)}"
                                        alt="Smiley face" height="90" width="90"></b>
                            <br>
                            <br>
                            <br>
                            <label for="prsCedula"
                                style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                                <FONT SIZE=4>* Lugar de la Competencia: </FONT>
                            </label><b>
                                <FONT SIZE=3>${edPremiosDeportista.competencia.lugar}
                                </FONT>
                            </b>
                            <br>
                            <br>
                            <br>
                            <label for="prsCedula"
                                style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                                <FONT SIZE=4>* Cédula del Deportista: </FONT>
                            </label><b>
                                <FONT SIZE=3>${edPremiosDeportista.edDeportista.fdiPersona.prsCedula}
                                </FONT>
                            </b>
                            <br>
                            <br>
                            <br>
                            <label for="prsCedula"
                                style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                                <FONT SIZE=4>* Apellidos del Deportista: </FONT>
                            </label><b>
                                <FONT SIZE=3>${edPremiosDeportista.edDeportista.fdiPersona.prsApellido}
                                </FONT>
                            </b>
                            <br>
                            <br>
                            <br>
                            <label for="prsCedula"
                                style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                                <FONT SIZE=4>* Nombres del Deportista: </FONT>
                            </label><b>
                                <FONT SIZE=3>${edPremiosDeportista.edDeportista.fdiPersona.prsNombre}
                                </FONT>
                            </b>
                            <br>
                            <br>
                            <br>
                            <label for="prsCedula"
                                style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                                <FONT SIZE=4>* Número de Medallas de Oro: </FONT>
                            </label><b>
                                <FONT SIZE=3>
                                ${edPremiosDeportista.moro}
                                </FONT>
                            </b>
                            <br>
                            <br>
                            <br>
                            <label for="prsCedula"
                                style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                                <FONT SIZE=4>* Número de Medallas de Plata: </FONT>
                            </label><b>
                                <FONT SIZE=3>
                                ${edPremiosDeportista.mplata}
                                    </FONT>
                            </b>
                            <br>
                            <br>
                            <br>
                            <label for="prsCedula"
                                style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                                <FONT SIZE=4>* Número de Medallas de Bronce: </FONT>
                            </label><b>
                                <FONT SIZE=3>
                                ${edPremiosDeportista.mbronce}
                                </FONT>
                            </b>
                            <br>
                            <br>
                            <br>
                            
                            <label for="prsCedula"
                                style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                                <FONT SIZE=4>* Posición Obtenida: </FONT>
                            </label><b>
                                <FONT SIZE=3>
                                ${edPremiosDeportista.posicion}
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
                          <FONT SIZE=4>* Director DTM: </FONT>
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