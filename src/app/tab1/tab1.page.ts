import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { post } from '../models/post';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  postToShow : post[] = [];

  constructor(private data : DataService) {

  this.postToShow = this.data.getAllPost();

  }

}
