import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImprintComponent} from "./imprint/imprint.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {HydrophoneComponent} from "./hydrophone/hydrophone.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'imprint-component', component: ImprintComponent},
  {path: 'hydrophone-component', component: HydrophoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
