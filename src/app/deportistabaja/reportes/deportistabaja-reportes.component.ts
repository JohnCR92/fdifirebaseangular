import { Component, OnInit } from '@angular/core';
import { ReplayComponent } from './../../+outlook/replay/replay.component';
import { LoginComponent } from "../../+auth/+login/login.component";
import { ShowSelectionPanelComponent } from '../../+forms/+image-cropping/show-selection-panel/show-selection-panel.component';
import { DatatableComponent } from '../../shared/ui/datatable/datatable.component';
import { AlertasService, DeportistaService } from '../service/deportistabaja.services';
import { FileUploadService } from 'app/core/service/fileupload.service';
//import { FdiPersona } from '../form/Models/person.model';
@Component({
    selector: 'deportistabaja-form',
    templateUrl: './deportistabaja-reportes.component.html',
    styleUrls: [
        './deportistabaja-reportes.component.css'
    ]
})

export class DeportistabajaReportesComponent {
    public edDeportista: any = {};
    public edDeportistas: any;
    public NF:any;
    public age: number;
    public temp_var: Object = false;
    public temp_var1: Object = this.NF;
    today: number = Date.now();

    constructor(
        private deportistaService: DeportistaService,
        private alertasService: AlertasService
    ) {

    }
    ngOnInit() {
        //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
        //  this.autores=autores;
        // console.log(this.autores,"in");
        //});
        //this.persona=new FdiPersona();
        this.getDB();
        
    }
    guardar() {

        //console.log(this.nombre);
        this.deportistaService.saveEdDeportista(this.edDeportista).subscribe(edDeportista => {
            //console.log(autor);
            this.getDB();
        });
    }

    public getUrlDoc1(codigo)
  {
    return "http://localhost:8080/deportista/documento" +"/" + codigo;
  }

    editar(edDeportista: any) {

        //console.log(this.nombre);
        this.edDeportista = Object.assign({}, edDeportista);
    }

    atras() {
        window.history.back();

    }

    cancelar() {
        this.temp_var = true;

    }

    eliminar(edDeportista: any) {
        this.deportistaService.delete(edDeportista.deporId).subscribe(edDeportista => {
            this.alertasService.mostrarAlertaInfo("Actualizando", "Se eliminó el Deportista Correctamente!!")
            console.log(this.edDeportista);
            this.getDB();
        })
    }

    private getDB() {

        //console.log(this.nombre);
        
        this.deportistaService.getDB().subscribe(edDeportistas => {
            this.edDeportistas = edDeportistas;
            this.temp_var = true;
            
            
        });
    }


    CalcularEdad(prsFechaNaciemineto: Date): number {

        const today: Date = new Date();
        const birthDate: Date = new Date(prsFechaNaciemineto);
        
        if (prsFechaNaciemineto != null) {
            let age: number = today.getFullYear() - birthDate.getFullYear();
            const month: number = today.getMonth() - birthDate.getMonth();
            if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
            age--;
            return age;
        } else 
        {
            return 0;
        }



    }




}