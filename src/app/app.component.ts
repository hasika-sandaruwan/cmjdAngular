import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  status=true;

  showAndHide() {
   /* if (this.status){
      this.status=false;
    }else{
      this.status=true;
    }*/
    /*this.status=!this.status;*/
  }
}
