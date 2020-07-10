import {Component, OnInit} from '@angular/core';
import {LoginComponent} from "../../+auth/+login/login.component"; 
import { ShowSelectionPanelComponent } from '../../+forms/+image-cropping/show-selection-panel/show-selection-panel.component';
import { DatatableComponent } from '../../shared/ui/datatable/datatable.component'; 
import { AlertasService } from '../service/competencia.services';
import { CompetenciaService } from '../service/competencia.service';
@Component({
    selector:'competencia-form',
    templateUrl:'./competencia-list.component.html',
    styleUrls:[
        './competencia-list.component.css'
    ]
})

export class CompetenciaListComponent{
public competencia:any={};
public competencias:any;
public temp_var: Object=false;

constructor (
    private competenciaService:CompetenciaService,
    private alertasService:AlertasService
){

}
ngOnInit(){
    //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
      //  this.autores=autores;
       // console.log(this.autores,"in");
    //});
    this.getCompetencias();
}
    guardar(){

    //console.log(this.nombre);
    this.competenciaService.saveCompetencia(this.competencia).subscribe(competencia =>{
        //console.log(autor);
        this.getCompetencias();
    });
    }

    editar(competencia:any){

        //console.log(this.nombre);
        this.competencia=Object.assign({},competencia);
        }

        atras(){
            window.history.back();

        }

        cancelar() {
            this.temp_var=true;
         
        }

    eliminar(competencia: any){
        this.competenciaService.delete(competencia.idCompetencia).subscribe(competencia=>{
            this.alertasService.mostrarAlertaInfo("Actualizando", "Se eliminó la Competencia Correctamente!!")
            console.log(this.competencia);

            this.getCompetencias();
        })
    }

        private getCompetencias(){

            //console.log(this.nombre);
            this.competenciaService.getCompetencias().subscribe(competencias =>{
                this.competencias=competencias;
                this.temp_var=true;
            });
            }
        

}