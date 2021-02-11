import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { fApiService}  from  "./services/fapi.services";
import { Comments}  from  "./classes/comments";
import { Cposts}  from  "./classes/cpost";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

// // constructor(
// //   private route: ActivatedRoute,
// // ) {}
// constructor(private _fApiService: fApiService)
//    { }
//    lstcomments:Comments[];

// ngOnInit(): void {


 
// 	this._fApiService.getcomments()
// 	.subscribe(
// 		data=>{
//         this.lstcomments=data;
// 		}
// 		);



 
 }