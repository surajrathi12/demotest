import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router,ParamMap } from '@angular/Router';



export class blog {
  constructor(
    public  userId: number,
    public  id: number,
    public title: string,
    public body: string
   
  ) 
  {
  }
}


@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {


userId:number;
id: number;

blogs:blog[];
dposts;


   constructor(
     private http: HttpClient,

     private route:ActivatedRoute,
     private router:Router

     )
    { }

  ngOnInit(): void {

  	this.getblog();
    this.getcomment();
     this.getdata();

this.route.paramMap.subscribe(
  params=>{
    //this.userId= +params.get('userId');
    this.id= +params.get('id');

  }
  );


}

getdata(){


const param1 = new HttpParams(

  {
    fromObject:{
      id:'1'    
    }
  });


   this.http.get('http://jsonplaceholder.typicode.com/posts',{params:param1}).subscribe(data => {
    
   
   
    this.dposts=data;
    console.log(data);
   
    
    }, error => console.error(error));


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



// const body = { comment:"hiii" };
//         this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', body)
//             .subscribe(data => this.postId = data.id);

}
}