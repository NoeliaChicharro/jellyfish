import { Component, OnInit } from '@angular/core';
import cards from "../cards.json";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  ngOnInit(): void {}

  gameList = cards.game;
  personList = cards.person;
}
