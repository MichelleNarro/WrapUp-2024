import { Component, OnInit } from '@angular/core';
import mockGenericDataBooks from '../../assets/mockGenericDataBooks';
import mockGenericDataMovies from '../../assets/mockGenericDataMovies';
import mockGenericDataSeries from '../../assets/mockGenericDataSeries';
import { GenericItem } from '../Model/genericItem';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  tipoSeleccionado: string = '';
  dataListSeleccionada: GenericItem[] = [];

  constructor() {}

  ngOnInit(): void {}

  cambiarLista(event: Event) {
    const tipo = (event.target as HTMLSelectElement).value;
    this.tipoSeleccionado = tipo;

    switch (tipo) {
      case 'libros':
        this.dataListSeleccionada = mockGenericDataBooks;
        break;
      case 'peliculas':
        this.dataListSeleccionada = mockGenericDataMovies;
        break;
      case 'series':
        this.dataListSeleccionada = mockGenericDataSeries;
        break;
      default:
        this.dataListSeleccionada = [];
        break;
    }
  }
}
