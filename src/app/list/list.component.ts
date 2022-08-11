import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Post } from '../reddit';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  subreddit:string = "";
  item:Post = {} as Post;
  constructor(private apiService:RedditService) { }

  ngOnInit(): void {
    this.apiService.getAwwPosts().subscribe((response: Post) => {
      this.item = response;
    });
  } 

  // ReturnSub(sub:string):void{
  //   this.apiService.getReddit(sub).subscribe((response: Post) => {
  //     this.item = response;
  //   })
    
  // }

  //i can pull the value from here so why can't i DO ANYTHING WITH IT??? 
  SearchSubreddit(form:NgForm):void {
    this.subreddit= form.form.value.subreddit;
    console.log(this.subreddit); //test test 

  }

}
