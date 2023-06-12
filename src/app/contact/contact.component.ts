import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h2>
      contact
    </h2>
    <a routerLink="Add">Add Contact </a>
    <br>
    <a routerLink="Edit/1">Edit Contact </a>
    <div>
        <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
