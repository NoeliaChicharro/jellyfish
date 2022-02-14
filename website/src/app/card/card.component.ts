import {Component, Input, OnInit} from '@angular/core';

export class Game {
  type?:string;
  title?:string;
  description?:string;
  image?:string;
  alt?:string;
}

export class Person {
  type?:string;
  title?:string;
  subtitle?:string;
  description?:string;
  image?:string;
  alt?:string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  game?: Game;

  @Input()
  person?: Person;

  ngOnInit(): void {
    console.log(this.game)
  }

}
