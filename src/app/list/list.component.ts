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
  constructor(private RedditService:RedditService) { }

  //"subscribe" = wait for a response, then when you get it, then do the part in the {}
  //
  ngOnInit(): void {  
    this.ReturnSub("aww");

  }
   

  //formerly in ngOnInit()
  // getApiData():void{
  //   //response = result 
  //   this.RedditService.getAwwPosts().subscribe((response: Post) => {
  //   this.item = response; 
  //   });
  // }


  ReturnSub(sub:string):void{
    this.RedditService.getReddit(sub).subscribe((response: Post) => {
      this.item = response;
    })
    
  }

  //i can pull the value from here so why can't i DO ANYTHING WITH IT??? 
  SearchSubreddit(form:NgForm):void {
    this.subreddit= form.form.value.subreddit;
    console.log(this.subreddit); //test test 
    this.ReturnSub(this.subreddit);
  }

}
