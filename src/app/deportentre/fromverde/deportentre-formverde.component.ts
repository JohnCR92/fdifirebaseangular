import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Params } from '@angular/router';
import { CategoriaDisciplinaService } from './../service/categoriadisciplina.service';
import { LoginComponent } from "../../+auth/+login/login.component";
import { config } from '../../shared/smartadmin.config';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { AlertasService } from '../service/deportentre.services';
import { DisciplinaService } from '../../disciplina/service/disciplina.service';
import { CategoriaService } from '../../categoria/service/categoria.service';
import { DeportistaService } from 'app/deportistafnf/service/deportistafnf.service';
import { EntrenadorService } from 'app/entrenador/service/entrenador.service';
import { DeportEntreService } from '../service/deportentre.service';

@FadeInTop()
@Component({
    selector: 'deportentre-formverde',
    templateUrl: './deportentre-formverde.component.html',
    styleUrls: ['./deportentre-formverde.component.css']
})

export class DeportEntreFormVerdeComponent {
    public edDeportistaEntrenador: any = {

        "edDeportista": {
            "fdiCategoriaDisciplina": {
                "fdiCategoria": {},
                "fdiDisciplina": {}
            },
            "fdiPersona": {}
        },

        "fdiEntrenador": {
            "fdiPersona": {}
        }



    };
    selected: string = "";
    public edDeportistaEntrenadors: any;
    edDeportistas: any;
    fdiEntrenadors: any;
    public entorno: string = config.environment;
    constructor(private deportentreService: DeportEntreService,
        private activatedRoute: ActivatedRoute,
        private alertaService: AlertasService,
        private deportistaService: DeportistaService,
        private entrenadorService: EntrenadorService
    ) {

    }
    ngOnInit() {
        this.getEdDeportistaEntrenadors();
        this.getEdDeportistas();
        this.getFdiEntrenadors();
        console.log(config);

        this.entorno = config.environment;

        this.activatedRoute.params.subscribe(params => {
            if (params['idDepEntre']) {
                this.getEdDeportistaEntrenador(params['idDepEntre']);

            }
        });
        //this.restService.get("http://localhost:8090/autor").subscribe(autores =>{
        //  this.autores=autores;
        //console.log(this.autores, "in");
        //});

        //console.log(this.autores, "out");
    }

    test(value) {
        console.log(value)

    }

    private getEdDeportistaEntrenador(idDepEntre: number) {
        this.deportentreService.getEdDeportistaEntrenador(idDepEntre).subscribe(edDeportistaEntrenador => {
            this.edDeportistaEntrenador = edDeportistaEntrenador;

            console.log(this.edDeportistaEntrenador)
        });

    }


    guardar() {
        //console.log(this.nombre);
        console.log(this.edDeportistaEntrenador)
        delete this.edDeportistaEntrenador.fdiEntrenador.disciplicas
        console.log(this.edDeportistaEntrenador)
        this.deportentreService.saveEdDeportistaEntrenador(this.edDeportistaEntrenador).subscribe(edDeportistaEntrenador => {
            //console.log(autor);

            this.alertaService.mostrarAlertaInfo("Actualizando", "Se a guardado el Entrenador con su respectivo Deportista Correctamente!!")
            window.history.back();

            this.getEdDeportistaEntrenadors();
        });

    }
    compare(fromListValue, fromSaveValue) {
        return fromListValue && fromSaveValue ? fromListValue.idDepEntre === fromSaveValue.idDepEntre : null;
    }
    editar(edDeportistaEntrenador: any) {
        //console.log(this.nombre);
        this.edDeportistaEntrenador = Object.assign({}, edDeportistaEntrenador);
    }
    cancelar() {
        //console.log(this.nombre);
        this.edDeportistaEntrenador = {
            "edDeportista": {
                "fdiCategoriaDisciplina": {
                    "fdiCategoria": {},
                    "fdiDisciplina": {}
                },
                "fdiPersona": {}
            },

            "fdiEntrenador": {
                "fdiPersona": {}
            }



        };

    }

    atras() {
        //console.log(this.nombre);
        window.history.back();
    }

    private getEdDeportistas() {
        //console.log(this.nombre);
        this.deportistaService.getEdDeportistas().subscribe(edDeportistas => {
            this.edDeportistas = edDeportistas;
        });

    }


    private getFdiEntrenadors() {
        //console.log(this.nombre);
        this.entrenadorService.getFdiEntrenadors().subscribe(fdiEntrenadors => {
            this.fdiEntrenadors = fdiEntrenadors;
        });

    }
    //public cargar:boolean;
    //  private getFdiCategorias(){
    //console.log(this.nombre);
    //    this.cargar = true;
    //    this.categoriaService.getFdiCategorias().subscribe(fdiCategorias =>{
    //        console.log(fdiCategorias)
    //       this.fdiCategorias=fdiCategorias;
    //       this.cargar=false;
    //    });

    // }

    private getEdDeportistaEntrenadors() {
        //console.log(this.nombre);
        this.deportentreService.getEdDeportistaEntrenadors().subscribe(edDeportistaEntrenadors => {
            this.edDeportistaEntrenadors = edDeportistaEntrenadors;
        });

    }
    public getUrlDoc1(codigo) {
        return "http://localhost:8080/deportista/documento" + "/" + codigo;
    }

    public getUrlDoc2(codigo) {
        return "http://localhost:8080/entrenador/documento" + "/" + codigo;
    }

    print(): void {

        let edDeportistaEntrenador = this.edDeportistaEntrenador

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
                  <b >DATOS DEL ENTRENADOR CON SU RESPECTIVO DEPORTISTA</b>
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
                         <div align="left">
                                <body >
                                <legend align="center" style="font-family: 'Times New Roman';color:rgb(0, 92, 128)">
                                                <b> DATOS DEL ENTRENADOR</b>
                                            </legend>
                                    <br>
                          <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Cédula: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.edDeportistaEntrenador.fdiEntrenador.fdiPersona.prsCedula}
                          </FONT>
                      </b>
                      <b><img  align="right" src="${this.getUrlDoc2(this.edDeportistaEntrenador.fdiEntrenador.entreFoto)}"
                                  alt="Smiley face" height="90" width="90"></b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Apellidos: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.edDeportistaEntrenador.fdiEntrenador.fdiPersona.prsApellido}
                          </FONT>
                      </b>
                      <br>
                      <br>
                     
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Nombres: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.edDeportistaEntrenador.fdiEntrenador.fdiPersona.prsNombre} 
                          </FONT>
                      </b>
                      <br>
                      <br>
                      
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Fecha de Nacimiento: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportistaEntrenador.fdiEntrenador.fdiPersona.prsFechaNaciemineto}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Sexo: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportistaEntrenador.fdiEntrenador.fdiPersona.prsSexo}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Email: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportistaEntrenador.fdiEntrenador.fdiPersona.prsCorreo}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Teléfono/Celular: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportistaEntrenador.fdiEntrenador.fdiPersona.prsTelefono}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <br>
                      <legend align="center" style="font-family: 'Times New Roman';color:rgb(0, 92, 128)">
                                                <b> DATOS DEL DEPORTISTA</b>
                                            </legend>
                                    <br>
                          <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Cédula: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.edDeportistaEntrenador.edDeportista.fdiPersona.prsCedula}
                          </FONT>
                      </b>
                      <br>
                      <b><img  align="right" src="${this.getUrlDoc1(this.edDeportistaEntrenador.edDeportista.deportFoto)}"
                                  alt="Smiley face" height="90" width="90"></b>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Apellidos: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.edDeportistaEntrenador.edDeportista.fdiPersona.prsApellido}
                          </FONT>
                      </b>
                      <br>
                      <br>
                     
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Nombres: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.edDeportistaEntrenador.edDeportista.fdiPersona.prsNombre} 
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Disciplina: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.edDeportistaEntrenador.edDeportista.fdiCategoriaDisciplina.fdiDisciplina.disciplinaNombre} 
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Categoría: </FONT>
                      </label><b>
                          <FONT SIZE=3>${this.edDeportistaEntrenador.edDeportista.fdiCategoriaDisciplina.fdiCategoria.categoriaNombre} 
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Fecha de Nacimiento: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportistaEntrenador.edDeportista.fdiPersona.prsFechaNaciemineto}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Sexo: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportistaEntrenador.edDeportista.fdiPersona.prsSexo}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Email: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportistaEntrenador.edDeportista.fdiPersona.prsCorreo}
                          </FONT>
                      </b>
                      <br>
                      <br>
                      <label for="prsCedula"
                          style="color: rgb(126, 123, 123) ; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
                          <FONT SIZE=4>* Teléfono/Celular: </FONT>
                      </label><b>
                          <FONT SIZE=3>
                          ${this.edDeportistaEntrenador.edDeportista.fdiPersona.prsTelefono}
                          </FONT>
                      </b>
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