import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from "../demoservice.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.css']
})
export class CmpComponent implements OnInit {
  arr:any=[];
  postarray=[];
  fname;
 //private  url="https://reqres.in/api/users";
  constructor(private https:HttpClient,private demoservice:DemoserviceService){
  //  this.getdata();
   console.log("in con");
  //  
 this.getdata();
  

}
// getdata(){
//   console.log("in getdata");
//   this.https.get(this.url)
//   .subscribe(response => this.arr=response);
//   console.log(this.arr);
 
// }
getdata(){
  this.demoservice.gettingdata()
  .subscribe(response=>{this.arr=response;
  console.log("getdata")});
}
putting(name):void{
  this.demoservice.postdata({name})
  .subscribe(response =>this.postarray=response);
  console.log(this.postarray);
  
}
deletedata1(arrs):void{
  console.log(arrs);
  this.demoservice.deletedata(arrs).subscribe(()=>{
    let index = this.arr.indexOf(arrs);
      console.log(index);
      this.arr.splice(index, 1);
  });
}

putdata1(name1){
  this.demoservice.putdata({name1})
  .subscribe(response =>this.arr.push(response));
  console.log(this.arr);
}
patchdata1(name2){
  this.demoservice.patchdata({name2})
  .subscribe(response =>this.arr.push(response));
  console.log(this.arr);
}
  ngOnInit() {
  }

}
