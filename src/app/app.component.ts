import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio-page';
  contact: any;
  projects: any;
  about: any;

  
  ngOnInit(): void {
    this.contact = document.getElementById('contact');
    this.projects = document.getElementById('project-txt');
    this.about = document.getElementById('about');
    console.log(typeof(this.contact));
    console.log(this.contact);

  }
  
}