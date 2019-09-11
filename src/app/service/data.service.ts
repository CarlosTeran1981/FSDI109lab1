import { Injectable } from '@angular/core';
import { post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  posts : post[] = [];

  constructor() { 
  }

  public savePost(post: post
    ){
    this.posts.push(post);
  }

  public getAllPost(){
    return this.posts;
  }
}
