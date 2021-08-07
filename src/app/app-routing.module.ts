import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UiOneComponent} from "./components/ui-one/ui-one.component";
import {UiThreeComponent} from "./components/ui-three/ui-three.component";
import {UiTwoComponent} from "./components/ui-two/ui-two.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";

const routes: Routes = [
  /*{path:'',component: UiOneComponent},*/
  {path:'', redirectTo:'/uiOne', pathMatch:'full'},
  {path:'uiOne',component: UiOneComponent},
  {path:'uiTwo',component: UiTwoComponent},
  {path:'uiThree',component: UiThreeComponent},
  {path: '**', component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
