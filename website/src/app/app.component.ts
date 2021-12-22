import { Component } from '@angular/core';
import cards from "./cards.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';

  // @todo don't give whole json
  gameList = cards.game;
  personList = cards.person;

}
