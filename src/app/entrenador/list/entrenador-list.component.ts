import { Component, OnInit } from '@angular/core';
import { ReplayComponent } from './../../+outlook/replay/replay.component';
import { LoginComponent } from "../../+auth/+login/login.component";
import { ShowSelectionPanelComponent } from '../../+forms/+image-cropping/show-selection-panel/show-selection-panel.component';
import { DatatableComponent } from '../../shared/ui/datatable/datatable.component';
import { AlertasService} from '../service/entrenador.services';
import { FileUploadService } from 'app/core/service/fileupload.service';
import { EntrenadorService } from '../service/entrenador.service';
//import { FdiPersona } from '../form/Models/person.model';
@Component({
    selector: 'entrenador-form',
    templateUrl: './entrenador-list.component.html',
    styleUrls: [
        './entrenador-list.component.css'
    ]
})

export class EntrenadorListComponent {
    public fdiEntrenador: any = {};
    public fdiEntrenadors: any;
    public NF:any;
    public age: number;
    public temp_var: Object = false;
    public temp_var1: Object = this.NF;
    today: number = Date.now();

    constructor(
        private entrenadorService: EntrenadorService,
        private alertasService: AlertasService
    ) {

    }
    ngOnInit() {
        //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
        //  this.autores=autores;
        // console.log(this.autores,"in");
        //});
        //this.persona=new FdiPersona();
        this.getFdiEntrenadors();
        
    }
    guardar() {

        //console.log(this.nombre);
        this.entrenadorService.saveFdiEntrenador(this.fdiEntrenador).subscribe(fdiEntrenador => {
            //console.log(autor);
            this.getFdiEntrenadors();
        });
    }

    public getUrlDoc1(codigo)
  {
    return "http://localhost:8080/entrenador/documento" +"/" + codigo;
  }

  public getUrlDoc2(cod)
  {
    return "http://localhost:8080/entrenador/document" +"/" + cod;
  }

    editar(fdiEntrenador: any) {

        //console.log(this.nombre);
        this.fdiEntrenador = Object.assign({}, fdiEntrenador);
    }

    atras() {
        window.history.back();

    }

    cancelar() {
        this.temp_var = true;

    }

    eliminar(fdiEntrenador: any) {
        this.entrenadorService.delete(fdiEntrenador.entreId).subscribe(fdiEntrenador => {
            this.alertasService.mostrarAlertaWarning("Actualizando", "Se eliminó el Entrenador Correctamente!!")
            console.log(this.fdiEntrenador);
            this.getFdiEntrenadors();
        })
    }

    private getFdiEntrenadors() {

        //console.log(this.nombre);
        
        this.entrenadorService.getFdiEntrenadors().subscribe(fdiEntrenadors => {
            this.fdiEntrenadors  = fdiEntrenadors ;
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