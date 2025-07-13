import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DownloadVideoService {
  constructor(private http: HttpClient) {}

  public async downloadVideo(url: string, option: string, format: string) {
    const finalUrl = `http://localhost:3000/yt-download/download?url=${encodeURIComponent(
      url
    )}&option=${option}&format=${format}`;
    window.open(finalUrl, '_blank');
  }

  public async getVideoInfo(url: string) {
    try {
      const res: any = await firstValueFrom(
        this.http.get(`http://localhost:3000/yt-download/info?url=${url}`)
      );
      return res;
    } catch (error: any) {
      return error || 500;
    }
  }
}
