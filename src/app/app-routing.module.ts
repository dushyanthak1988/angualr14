import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddcontactComponent } from './addcontact/addcontact.component';

const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "About", component: AboutComponent },
  {
    path: "Contact",
    component: ContactComponent,
    children: [
      { path:"Add" , component:AddcontactComponent} , 
      { path:"Edit/:id" , component:AddcontactComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
