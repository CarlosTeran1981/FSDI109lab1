import { Component } from '@angular/core';
import { Friend } from '../models/Friend';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  model : Friend = new Friend();

  constructor() {}

  register(){
    console.log("Register Friend");
    //send the object to data service

    //clear form
    this.model = new Friend();
  }

}
