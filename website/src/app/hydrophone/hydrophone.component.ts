import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogContentComponent} from "../dialog-content/dialog-content.component";

@Component({
  selector: 'app-hydrophone',
  templateUrl: './hydrophone.component.html',
  styleUrls: ['./hydrophone.component.css']
})
export class HydrophoneComponent{

  constructor(public dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(DialogContentComponent)
  }
}
