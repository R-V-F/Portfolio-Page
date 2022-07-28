import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input()
  contact_ref: HTMLBodyElement | undefined;
  @Input()
  projects_ref: any;
  @Input()
  about_ref: any;

  constructor() { }


  ngOnInit(): void {
  }

  toContact() {
    this.contact_ref!.scrollIntoView();
    console.log(typeof(this.contact_ref));
  }
  toAbout() {
    this.about_ref.scrollIntoView();
  }
  toProjects() {
    this.projects_ref.scrollIntoView();
  }
}
