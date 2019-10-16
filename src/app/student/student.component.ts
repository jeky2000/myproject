import { Component, OnInit } from '@angular/core';
import{FormsModule}from '@angular/forms'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

 Name:string;
 someList:Array<string>;
 isRed:boolean ;
  ngOnInit() {
    this.Name= "some name";
    this.someList=new Array<string>();
    this.someList.push("aaa");
    this.someList.push("bbb");
    this.someList.push("ccc");
    this.someList.push("ddd");

  }

onClick(data):void{
 alert('some changes');
}
}
