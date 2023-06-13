import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
     <h4> 
      404  error , Request not Found
</h4>
      
  `,
  styles: [
    "h4{ Color:red; font-size:50px} "
  ]
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
