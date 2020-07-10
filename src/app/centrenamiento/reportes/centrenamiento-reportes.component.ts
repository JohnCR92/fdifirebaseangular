import {Component, OnInit, ChangeDetectorRef, ViewChild} from '@angular/core';
import {LoginComponent} from "../../+auth/+login/login.component";
import { ShowSelectionPanelComponent } from '../../+forms/+image-cropping/show-selection-panel/show-selection-panel.component';
import { DatatableComponent } from '../../shared/ui/datatable/datatable.component'; 
import { AlertasService, CentrenamientoService } from '../service/centrenamiento.services';
import { ExcelService } from 'app/core/service/excel.service';
declare const $;
@Component({
    selector:'centrenamiento-form',
    templateUrl:'./centrenamiento-reportes.component.html',
    styleUrls:[
        './centrenamiento-reportes.component.css'
    ]
})

export class CentrenamientoReporteComponent{
public centrenamiento:any={};
public centrenamientos:any;
public temp_var: Object=false;

constructor (
    private centrenamientoService:CentrenamientoService,
    private alertasService:AlertasService,
    private excelService:ExcelService
){

}
ngOnInit(){
    //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
      //  this.autores=autores;
       // console.log(this.autores,"in");
    //});
    this.getEdCamposEntrenamientos();
}
    guardar(){

    //console.log(this.nombre);
    this.centrenamientoService.saveEdCamposEntrenamiento(this.centrenamiento).subscribe(centrenamiento =>{
        //console.log(autor);
        this.getEdCamposEntrenamientos();
    });
    }

    editar(centrenamiento:any){

        //console.log(this.nombre);
        this.centrenamiento=Object.assign({},centrenamiento);
        }

        atras(){
            window.history.back();

        }

        cancelar() {
            this.temp_var=true;
         
        }

    eliminar(centrenamiento: any){
        this.centrenamientoService.delete(centrenamiento.campentreId).subscribe(centrenamiento=>{
            this.alertasService.mostrarAlertaInfo("Actualizando", "Se eliminó el Campo de Entrenamiento Correctamente!!")
            console.log(this.centrenamiento);

            this.getEdCamposEntrenamientos();
        })
    }

        private getEdCamposEntrenamientos(){

            //console.log(this.nombre);
            this.centrenamientoService.getEdCamposEntrenamientos().subscribe(centrenamientos =>{
                this.centrenamientos=centrenamientos;
                this.temp_var=true;
            });
            }


            print(): void {

                
        
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
                  <img align="right" src="assets/img/FDI.jpg" alt="SmartAdmin" height="65" width="65">
                  <img align="left" src="assets/img/deporte.jpg" alt="SmartAdmin" height="65" width="65">
                  </body>
                  <br>
                  <br>
                  <body align="center">
                  <body>
                  <b >LISTA DE CAMPOS DE ENTRENAMIENTO</b>
                  </body>
                  <br>
                  <body>
                  <b align="center">---------------------------------------------------------------</b>
                  </body>
                                <br>
                                <br>
                                <br>
                  <body onload="window.print();window.close()">${printContents}</body>
                  </body>
                    </html>`
                );
                popupWin.document.close();
        
            }

            exportAsXLSX():void {
              this.excelService.exportAsExcelFile(this.centrenamientos, 'ReporteExcel');
            }

            

        }