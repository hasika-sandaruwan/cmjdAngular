import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UiOneComponent } from './components/ui-one/ui-one.component';
import { UiTwoComponent } from './components/ui-two/ui-two.component';
import { UiThreeComponent } from './components/ui-three/ui-three.component';

@NgModule({
  declarations: [
    AppComponent,
    UiOneComponent,
    UiTwoComponent,
    UiThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
