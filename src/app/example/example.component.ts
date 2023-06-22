import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }
  headername= "Angular tutorials"
  salary = 0
  isdisabled = false;
  colorname = "red"; 
  className = 'headclass';
  stylevalue = { "color":"yellow" , "font-size":"60px" }
  colors= [ 'yellow' , 'red', 'green' , 'black' ] ; 
  ngOnInit(): void {
  }

   
  functionclick (){
    alert("testing function");
  }
functionclick1 (name :  string){
    alert( name);
  }

}
