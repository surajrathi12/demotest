import { Injectable } from '@angular/core';
import { Observable}  from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Cposts}  from  "../classes/cpost";



@Injectable()
export class fApiService
{



constructor(private http: HttpClient)
   { }


getcomments(): Observable<any>{

	return this.http.get('http://jsonplaceholder.typicode.com/posts');
	// .subscribe(data => {
 // //    //this.data.push(data);
   
 //    this.blogs=data;
 //    console.log(data);

}
 
 getpostby():Observable<any>{
 	let param1 =new HttpParams().set('userId',"1");

 return this.http.post('http://jsonplaceholder.typicode.com/posts',{Params:param1});

 }
}

