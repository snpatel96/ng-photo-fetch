import { Component } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent {
  photoUrl = '';
  constructor(private photo: FetchPhotoService) {}

  onClick() {
    this.photo
      .getPhoto()
      .subscribe((response) => (this.photoUrl = response.urls.regular));
  }
}
