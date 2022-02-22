import { Component, OnInit } from '@angular/core';
import { images } from './config/gallery.config';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images: String[] = images;
  constructor() { }

  ngOnInit(): void {
  }

}
