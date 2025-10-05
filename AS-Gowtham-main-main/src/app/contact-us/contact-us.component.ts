import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var UIkit: any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  fullName!: string;
  email!: string;
  mobile!: string;
  message!: string;
  error!: string;

  contactUsForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)],),
    message: new FormControl('', [Validators.required, Validators.minLength(20),]),
  });

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    // logEvent(this.analytics, 'Contactus_Page');
  }

  sendMessage() {
    if (this.contactUsForm.invalid) {
      this.contactUsForm.markAllAsTouched(); // Trigger validation messages in the UI

      // Collect specific error messages for invalid fields
      const errorMessages: string[] = [];
      const fieldNameMap: { [key: string]: string } = {
        name: 'Name',
        email: 'Email Address',
        message: 'Message',
      };
      // Check each form control for errors
      Object.keys(this.contactUsForm.controls).forEach(field => {
        const control = this.contactUsForm.get(field);
        if (control?.invalid && control?.touched) {
          // Use mapped name if available, otherwise capitalize the field name
          const displayName = fieldNameMap[field] || (field.charAt(0).toUpperCase() + field.slice(1));

          if (control.errors?.['required']) {
            errorMessages.push(`${displayName} is required.`);
          }
          if (control.errors?.['email']) {
            errorMessages.push(`${displayName} must be a valid email address.`);
          }
          if (control.errors?.['minlength']) {
            errorMessages.push(
              `${displayName} must be at least ${control.errors['minlength'].requiredLength} characters.`
            );
          }
        }
      });
      // Show specific error messages in a notification
      if (errorMessages.length > 0) {
        this.error = errorMessages[0];

        setTimeout(() => {
          this.error = ""; // or '' depending on your default state
        }, 2000); // hide after 5 seconds

        // UIkit.notification(errorMessages[0], {
        //   pos: 'top-center',
        //   status: 'danger',
        // });
      } else {
        // Fallback for generic error if no specific messages are found
        UIkit.notification('Please fill out all required fields correctly.', {
          pos: 'top-center',
          status: 'danger',
        });
      }

      return;
    }

    // logEvent(this.analytics, 'ContactUs_Submit');

    const params = {
      fullName: this.contactUsForm.get('fullName')?.value,
      email: this.contactUsForm.get('email')?.value,
      mobile: this.contactUsForm.get('mobile')?.value,
      message: this.contactUsForm.get('message')?.value,
    };

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const options = {
      headers: headers
    }

    this.httpClient.post('/mail.php', params, options).subscribe((res) => {
      console.log(res);
      this.contactUsForm.reset();
      UIkit.notification('Mail Sent Successfully', {
        pos: 'bottom-center',
        status: 'primary',
      });
    });
  }
}
