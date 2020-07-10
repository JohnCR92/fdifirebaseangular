import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "../../+auth/+login/login.component";
import { ShowSelectionPanelComponent } from '../../+forms/+image-cropping/show-selection-panel/show-selection-panel.component';
import { DatatableComponent } from '../../shared/ui/datatable/datatable.component'; 
import { AlertasService } from '../service/deportentre.services';
import { DeportEntreService } from '../service/deportentre.service';
@Component({
    selector: 'deportentre-form',
    templateUrl: './deportentre-reportes.component.html',
    styleUrls: [
        './deportentre-reportes.component.css'
    ]
})

export class DeportEntreReporteComponent {
    public edDeportistaEntrenador: any = {};
    public edDeportistaEntrenadors: any;
    public temp_var: Object=false;

    constructor(
        private deportentreService: DeportEntreService,
        private alertasService: AlertasService
    ) {

    }
    ngOnInit() {
        //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
        //  this.autores=autores;
        // console.log(this.autores,"in");
        //});
        this.getEdDeportistaEntrenadors();
    }
    guardar() {

        console.log(this.edDeportistaEntrenador);
        this.deportentreService.saveEdDeportistaEntrenador(this.edDeportistaEntrenador).subscribe(edDeportistaEntrenador => {
            //console.log(autor)
            this.edDeportistaEntrenadors();
        });
    }

    editar(edDeportistaEntrenador: any) {

        //console.log(this.nombre);
        this.edDeportistaEntrenador = Object.assign({}, edDeportistaEntrenador);
    }

    atras() {
        window.history.back();

    }

    public getUrlDoc1(codigo)
    {
      return "http://localhost:8080/deportista/documento" +"/" + codigo;
    }

    public getUrlDoc2(codigo)
    {
      return "http://localhost:8080/entrenador/documento" +"/" + codigo;
    }
  

    cancelar() {
        this.temp_var=true;
     
    }

    eliminar(edDeportistaEntrenador: any) {
        this.deportentreService.delete(edDeportistaEntrenador.idDepEntre).subscribe(fdiCategoriaDisciplina => {
            this.alertasService.mostrarAlertaInfo("Actualizando", "Se eliminó el Entrenador con su respectivo Deportista Correctamente!!")
            console.log(this.edDeportistaEntrenador);

            this.getEdDeportistaEntrenadors();
        })
    }


    private getEdDeportistaEntrenadors() {

        //console.log(this.nombre);
        this.deportentreService.getEdDeportistaEntrenadors().subscribe(edDeportistaEntrenadors => {
            this.edDeportistaEntrenadors = edDeportistaEntrenadors;
            this.temp_var=true;
        });
    }


}