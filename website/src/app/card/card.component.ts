import { Component, OnInit } from '@angular/core';
import * as gameCards from './gameCards.json';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public gameList: {
      type:string,
      title:string,
      description:string,
      image:string
  }[]  = gameCards ;

  constructor() { }

  ngOnInit(): void {
  }

}
