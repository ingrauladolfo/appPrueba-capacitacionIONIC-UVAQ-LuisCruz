import { Component } from "@angular/core";
import { InformacionService } from "../services/informacion.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  informacionTodo: any;
  informacionFiltrada: any;
  termino: any = "";

  constructor(private _infoService: InformacionService) {}

  ngOnInit() {
    // this.filtrar();
    this.informacionTodo = this._infoService.informacion;
    this.informacionFiltrada = this.informacionTodo;
  }

  filtrarInformacion() {
    this.informacionTodo = this.informacionTodo.filter((item) => {
      return item.tipo.toLowerCase().indexOf(this.termino.toLowerCase()) > -1;
    });
  }
}
