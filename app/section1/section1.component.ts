import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';



export class blog {
  constructor(
    public  userId: string,
    public  id: string,
    public title: string,
    public body: string
   
  ) {
  }
}



@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})


export class Section1Component implements OnInit {

	
    //showMore = true;
blogs:blog[];
  constructor(private http: HttpClient)
   { }

  ngOnInit(): void {

  	this.getblog();
}

getblog()
  {
    this.http.get<any>('http://jsonplaceholder.typicode.com/posts').subscribe(data => {
   
   
    this.blogs=data;
    console.log(data);
   
    
    }, error => console.error(error));
  }





  }


