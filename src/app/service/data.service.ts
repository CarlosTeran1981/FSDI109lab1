import { Injectable } from '@angular/core';
import { post } from '../models/post';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  allPosts: Observable<post[]>;
  postCollection: AngularFirestoreCollection<post>;

  

  constructor(private fb:AngularFirestore) {
      this.postCollection = fb.collection<post>('posts');
      
      //read all the messages from database and popular local array
      this.allPosts = this.postCollection.valueChanges();
  }

  public savePost(post: post) {
    var item = Object.assign({}, post);
    
    this.postCollection.add(post);
    
    console.log('original', post);
    console.log('simpler', item);

   
  }

  public getAllPost(){
    return this.allPosts;
  }
}
