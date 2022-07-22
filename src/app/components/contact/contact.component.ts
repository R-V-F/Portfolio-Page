import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:any) {
    let template = {
      from_name: form.value.email,
      to_name: form.value.name,
      message: form.value.message
    };

    if(form['value'].name == undefined) console.log('aaa');
    //console.log(typeof(form));
    emailjs.send('service_vlzbd2b', 'template_g5lkkrs', template, 'oea2UOD9K3-5GsoF7')
      .then((result: EmailJSResponseStatus) => {
        //console.log(result.text);
        confirm("Email sent! Will get back to you ASAP.");
      }, (error) => {
        //console.log(error.text);
      });
  }
}
