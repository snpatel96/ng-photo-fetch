import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface unsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class FetchPhotoService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<unsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID dJkTRbJ9NGNM9EYBOPkz9uOrDp3riHvUiEoF_oOWbok',
        },
      }
    );
  }
}
