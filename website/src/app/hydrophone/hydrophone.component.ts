import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogContentComponent} from "../dialog-content/dialog-content.component";

@Component({
  selector: 'app-hydrophone',
  templateUrl: './hydrophone.component.html',
  styleUrls: ['./hydrophone.component.css']
})
export class HydrophoneComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  openDialog(){
    const dialogRef = this.dialog.open(DialogContentComponent)
  }

}
