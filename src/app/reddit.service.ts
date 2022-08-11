import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  // apiUrl:string = "https://www.reddit.com/r/aww.json";
  apiUrl:string = "https://www.reddit.com/r/";
  constructor(private http:HttpClient) { }
  
  getAwwPosts():any {
    //get requesting to the apiUrl aka reddit. 
    return this.http.get(this.apiUrl);
  }


json: string = "/.json";

//how do i fill in "sub" in another component? inmport? 
getReddit(sub:string):any{
  //ok basically just making a new link in same format: 
  return this.http.get(this.apiUrl + sub + this.json);
}

}