import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FooterComponent} from "./footer/footer.component";
import {ImprintComponent} from "./imprint/imprint.component";

const routes: Routes = [
  {path: 'imprint-component', component: ImprintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
