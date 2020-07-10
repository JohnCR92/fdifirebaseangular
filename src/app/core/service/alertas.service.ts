import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

declare var $: any;

@Injectable()
export class AlertasService {

  constructor() { }

  public mostrarAlertaErrorObservable(err: any) {
    let content;
    if (typeof (err._body) == 'string') {
      let errores = JSON.parse(err._body);
      if (errores.length)
        for (let index in errores) {
          let e = errores[index];
          content = (e.mensaje || 'Errores desconocido.') + "<br>Ejecutando: " + (e.accionEjecutada || 'desconocida');
          this.mostrarAlertaError("Error del sistema.", content, err);
        }
      else {
        content = (errores.mensaje || 'Error desconocido.')
          + "<br>Ejecutando: " + (errores.accionEjecutada || 'desconocida');
        this.mostrarAlertaError("Error del sistema.", content, err);
      }
    } else {
      this.mostrarAlertaError("Error del sistema.", "Error desconocido en la respuesta del servidor.", err);
    }
    return Observable.throw(err || 'Error desconocidon la respuesta del servidor.')
  }

  public mostrarAlertaInfo(titulo: string, mensaje: string) {
    $.smallBox({
      title: titulo,
      content: mensaje,
      color: "#3276b1",
      icon: "fa fa-bell bounce animated",
      timeout: 5000,
    });
  }

  public mostrarAlertaInfoGeneric() {
    $.smallBox({
      title: "Mensaje del sistema.",
      content: "Acción completada correctamente.",
      color: "#3276b1",
      icon: "fa fa-bell bounce animated",
      timeout: 5000,
    });
  }

  public mostrarAlertaError(titulo: string, mensaje: string, err: any) {
    $.smallBox({
      title: titulo,
      content: mensaje,
      color: "#c26565",
      icon: "fa fa-times bounce animated",
      timeout: 5000,
    });
  }

    public mostrarAlertaWarning(titulo: string, mensaje: string) {
    $.smallBox({
      title: titulo,
      content: mensaje,
      color: "#c79121",
      icon: "fa fa-shield bounce animated",
      timeout: 5000,
    });
  }

}