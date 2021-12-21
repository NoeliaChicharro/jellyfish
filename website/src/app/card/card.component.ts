import {Component, Input, OnInit} from '@angular/core';

export class Game {
  type?:string;
  title?:string;
  description?:string;
  image?:string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  game?: Game;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.game)
  }

}
