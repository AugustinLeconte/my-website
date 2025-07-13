import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DownloadVideoService } from '../download-video.service';
import { DurationPipe } from '../../../duration.pipe';

type DownloadOption = 'audio' | 'video' | 'both';

@Component({
  selector: 'app-download-page',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DurationPipe],
  templateUrl: './download-page.component.html',
  styleUrl: './download-page.component.scss',
})
export class DownloadPageComponent {
  form!: FormGroup;
  statusMessage: string = '';
  isDownloading: boolean = false;
  infos = {
    title: '',
    thumbnail: '',
    duration: '',
    filesize_approx: '',
    uploader: '',
  };
  options = [
    { label: 'Audio seulement', value: 'audio' },
    { label: 'Video seulement', value: 'video' },
    { label: 'Audio & vidéo', value: 'both' },
  ];

  formats: Record<DownloadOption, string[]> = {
    audio: ['mp3', 'aac', 'ogg', 'wav', 'flac'],
    video: ['mp4', 'webm', 'mov', 'mkv'],
    both: ['mp4', 'webm', 'mkv'],
  };

  constructor(
    private fb: FormBuilder,
    private ytDownloadService: DownloadVideoService
  ) {
    this.form = this.fb.group({
      url: ['', Validators.required],
      option: ['both', Validators.required],
      format: ['mp4', Validators.required],
    });
  }

  ngOnInit() {
    this.form.get('option')?.valueChanges.subscribe((opt: DownloadOption) => {
      const newDefault = this.formats[opt][0];
      this.form.get('format')?.setValue(newDefault);
    });
  }

  async onSubmit() {
    if (this.form.valid) {
      this.statusMessage = 'Téléchargement en cours...';
      this.isDownloading = true;
      await this.ytDownloadService.downloadVideo(
        this.form.value.url,
        this.form.value.option,
        this.form.value.format
      );
    }
  }

  get availableFormats(): string[] {
    const opt = this.form.get('option')?.value as DownloadOption;
    return this.formats[opt] || [];
  }

  async getVideoInfos() {
    const res = await this.ytDownloadService.getVideoInfo(this.form.value.url);
    this.infos = {
      title: res.title,
      thumbnail: res.thumbnail,
      duration: res.duration,
      filesize_approx: res.filesize_approx,
      uploader: res.uploader,
    };
  }
}
