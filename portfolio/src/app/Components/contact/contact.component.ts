import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.contactForm.valid) {
      const { name, email, subject, message } = this.contactForm.value;

      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
      };

      emailjs.send(
        'service_3wmslta',
        'template_3vegbxb',
        templateParams,
        'Gny19ADlUvRq21cjx'
      )
      .then(() => {
        alert('Message sent successfully!');
        this.contactForm.reset();
      })
      .catch((error) => {
        console.error('Email sending error:', error);
        alert('There was a problem sending your message.');
      });
    }
  }
}
