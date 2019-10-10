import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { post } from '../models/post';
import { Subscriber } from 'rxjs';
import { firestore } from 'firebase';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  postToShow : post[] = [];

  constructor(private data : DataService) {

    this.data.getAllPost().subscribe(res => {
      // iterate over the result to fix the createdOn format

      for (let i =0; i < res.length; i++){
          let post = res [i];
          let co : any = post.createdOn;
          post.createdOn = new firestore.Timestamp(co.seconds, co.nanoseconds).toDate();
      }

      this.postToShow = res;
    });

  

  }

}
