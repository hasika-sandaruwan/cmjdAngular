import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ui-one',
  templateUrl: './ui-one.component.html',
  styleUrls: ['./ui-one.component.scss']
})
export class UiOneComponent implements OnInit {

  importedUser: string | null = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.importedUser = this.activatedRoute.snapshot.paramMap.get('user');
    this.activatedRoute.paramMap.subscribe(response=>{
      this.importedUser=response.get('user');
    },error => {
      alert(error);
      console.log(error)
    });
  }

}
