import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class InformacionService {
  informacion: any = [];

  constructor() {
    this.informacion = [
      {
        id: 1,
        titulo: "Mercado de Dulces",
        tipo: "comida",
        descripcion:
          "El mercado de dulces y artesanías de Morelia es el lugar donde encontrarás los famosos ates y las artesanías de los diferentes municipios de Michoacán.",
        image: "../../assets/image.jpg",
      },
      {
        id: 2,
        titulo: "Sang Fui",
        tipo: "comida",
        descripcion:
          "Buen lugar para vacacionar con tu familia y comer comida china",
        image: "../../assets/image2.jpg",
      },
      {
        id: 3,
        titulo: "Vista Azul",
        tipo: "vacaciones",
        descripcion:
          "Vacaciona en las playas griegas con tus amigos o familia a un super precio increíble.",
        image: "../../assets/image3.jpg",
      },
      {
        id: 4,
        titulo: "Led Zepelin",
        tipo: "concierto",
        descripcion:
          "Asiste al concierto de Led Zepelin el 26 de Febrero de 2020 y vive la emoción de escuchar a la banda en vivo.",
        image: "../../assets/image4.jpg",
      },
    ];
  }

  getDetail(id) {
    return this.informacion.find((item) => item.id == id);
  }
}
