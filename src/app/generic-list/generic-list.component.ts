import { Component, Input } from '@angular/core';
import { GenericItem } from '../Model/genericItem';
import mockGenericDataSeries from '../../assets/mockGenericDataSeries';
import mockGenericDataMovies from '../../assets/mockGenericDataMovies';
import mockGenericDataBooks from '../../assets/mockGenericDataBooks';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrl: './generic-list.component.scss'
})

export class GenericListComponent { 

  @Input() itemList: GenericItem []=[];

  //itemList: GenericItem[] = mockGenericDataBooks;
  //itemList: GenericItem[] = mockGenericDataSeries;
  //itemList: GenericItem[] = mockGenericDataMovies;

  listagrid: boolean = true;

  @Input() tipodeLista: string ='';
  //tipodeLista='peliculas'; //series //libros

  switchView(option:boolean): void {
    this.listagrid = option;
  }
}
