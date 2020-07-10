import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { AlertasService } from './alertas.service';

declare var $:any;

@Injectable()
export class FileUploadService {
  public progress:number;
  public maxFileSize = 100024 * 100024 * 100000000;
  public static token:string = "";
  
  constructor (private alertasService:AlertasService) {}

  public generarFileRequest (url: string, params: any, files: File[], method ? :string) {
    let upperObserver;
    return Observable.create(observer => {
      upperObserver = observer;
      let formData: FormData = new FormData() ,
        xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.withCredentials = true;
      for (let i = 0; i < files.length; i++) {
        if(files[i].size > this.maxFileSize){
          observer.error({_body: '{"mensaje": "Tamaño de los archivos excede el limite de 100MB", "accionEjecutada": "PUT FileLoader"}'});
        }
        formData.append("uploads", files[i], files[i].name);
      }

      for (let i in params) {
        formData.append(i, params[i]);
      }
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.complete();
          } else {
            this.alertasService.mostrarAlertaErrorObservable({_body:xhr.response});
          }
        }
      };

      xhr.upload.onprogress = (event) => {
        //this.progress = Math.round(event.loaded / event.total * 100);
        this.progress = Math.round(event.loaded / event.total * 100000000);
      };      
      xhr.open(method || 'POST', url, true);
      xhr.setRequestHeader("Authorization", FileUploadService.token);
      xhr.send(formData);
    }).catch(err => {
      //upperObserver.error(err);
      this.alertasService.mostrarAlertaErrorObservable(err)
    });
  }
}