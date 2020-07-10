import { Component, OnInit } from '@angular/core';
import { ReplayComponent } from './../../+outlook/replay/replay.component';
import { LoginComponent } from "../../+auth/+login/login.component";
import { ShowSelectionPanelComponent } from '../../+forms/+image-cropping/show-selection-panel/show-selection-panel.component';
import { DatatableComponent } from '../../shared/ui/datatable/datatable.component';
import { AlertasService} from '../service/premiosdeportista.services';
import { FileUploadService } from 'app/core/service/fileupload.service';
import { PremiosDeportistaService } from '../service/premiosdeportista.service';
//import { FdiPersona } from '../form/Models/person.model';
@Component({
    selector: 'premiosdeportista-form',
    templateUrl: './premiosdeportista-list.component.html',
    styleUrls: [
        './premiosdeportista-list.component.css'
    ]
})

export class PremiosDeportistaListComponent {
    public edPremiosDeportista: any = {};
    public edPremiosDeportistas: any;
    public NF:any;
    public age: number;
    public temp_var: Object = false;
    public temp_var1: Object = this.NF;
    today: number = Date.now();

    constructor(
        private premiosdeportistaService: PremiosDeportistaService,
        private alertasService: AlertasService
    ) {

    }
    ngOnInit() {
        //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
        //  this.autores=autores;
        // console.log(this.autores,"in");
        //});
        //this.persona=new FdiPersona();
        this.getEdPremiosDeportistas();
        
    }
    guardar() {

        //console.log(this.nombre);
        this.premiosdeportistaService.saveEdPremiosDeportista(this.edPremiosDeportista).subscribe(edPremiosDeportista => {
            //console.log(autor);
            this.getEdPremiosDeportistas();
        });
    }

    public getUrlDoc1(codigo)
  {
    return "http://localhost:8080/deportista/documento" +"/" + codigo;
  }

    editar(edPremiosDeportista: any) {

        //console.log(this.nombre);
        this.edPremiosDeportista = Object.assign({}, edPremiosDeportista);
    }

    atras() {
        window.history.back();

    }

    cancelar() {
        this.temp_var = true;

    }

    eliminar(edPremiosDeportista: any) {
        this.premiosdeportistaService.delete(edPremiosDeportista.idPremios).subscribe(edPremiosDeportista => {
            this.alertasService.mostrarAlertaInfo("Actualizando", "Se eliminaron los Premios del Deportista Correctamente!!")
            console.log(this.edPremiosDeportista);
            this.getEdPremiosDeportistas();
        })
    }

    private getEdPremiosDeportistas() {

        //console.log(this.nombre);
        
        this.premiosdeportistaService.getEdPremiosDeportistas().subscribe(edPremiosDeportistas => {
            this.edPremiosDeportistas  = edPremiosDeportistas ;
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