import { Component } from '@angular/core';
import gameList from "./gameCards.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';

  list = gameList.game;
}
