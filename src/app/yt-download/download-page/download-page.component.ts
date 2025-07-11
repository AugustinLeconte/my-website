import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-download-page',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './download-page.component.html',
  styleUrl: './download-page.component.scss',
})
export class DownloadPageComponent {
  form!: FormGroup;
  options = [
    { label: 'Audio seulement (.mp3)', value: 'audio' },
    { label: 'Video seulement (.mp4)', value: 'video' },
    { label: 'Les deux (.mp4)', value: 'both' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      url: ['', Validators.required],
      options: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    }
  }
}
