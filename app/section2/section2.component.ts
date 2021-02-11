import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';


export class blog {
  constructor(
    public  userId: number,
    public  id: number,
    public title: string,
    public body: string
   
  ) {
  }
}


@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

postId;
blogs:blog[];
  constructor(private http: HttpClient)
   { }

  ngOnInit(): void {

  	this.getblog();
    this.getcomment();
}

getblog()
   {
    this.http.get<any>('http://jsonplaceholder.typicode.com/posts').subscribe(data => {
    //this.data.push(data);
   
    this.blogs=data;
    console.log(data);
   
    
    }, error => console.error(error));
  }


  

  comment:any="";


 commentsubmit(pcomment)
 {
this.comment=pcomment;
 }

  getcomment(){



const body = { comment:"hiii" };
        this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', body)
            .subscribe(data => this.postId = data.id);

}
}