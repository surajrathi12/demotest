import { Injectable } from '@angular/core';
import { Observable}  from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
 
 post(cposts:Cposts):Observable<any>{

 return this.http.post('http://jsonplaceholder.typicode.com/posts',cposts);

 }
}

