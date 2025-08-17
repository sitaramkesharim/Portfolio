import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  // Your Google Map embed link (replace API key and coordinates as needed)
googleMapUrl: string =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9510141661194!2d77.6843978!3d12.91087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1377591db561%3A0x77bf70ae3c020cf4!2sSarjapur%20Main%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1755461355097!5m2!1sen!2sin';

  constructor(private fb: FormBuilder) {
    // Initialize the form
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  // Getter methods for form controls (for easy template access)
  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  // Submit form data
  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form submitted!', formData);
      alert('Message sent successfully!');

      // Reset the form
      this.contactForm.reset();
    } else {
      alert('Please fill in all required fields correctly.');
      this.contactForm.markAllAsTouched();
    }
  }
}
