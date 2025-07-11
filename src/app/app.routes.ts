import { Routes } from '@angular/router';
import { CvComponent } from './curriculum/cv/cv.component';
import { HomeComponent } from './home/home/home.component';
import { DownloadPageComponent } from './yt-download/download-page/download-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: 'yt-download',
    component: DownloadPageComponent,
  },
];
