import { Component } from '@angular/core';
import { post } from '../models/post';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  p: post = new post();

  constructor(private data : DataService){}
  
  post() {
    console.log('Save btn pressed');
    console.log(this.p);
  

    // save the post
    this.data.savePost(this.p);

    // clear the form
    this.p = new post();
}
}
