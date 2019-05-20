import { Component } from '@angular/core';
import {Image} from '../model/Image';
import {PseudoImageService} from '../api/pseudo-image.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  images: any = [];

  constructor(private imageService: PseudoImageService) {
  }

  ionViewWillEnter() {
    //console.log(this.imageService.getImage());
    this.imageService.getImage().subscribe(images => {
      this.images = images;
    });

    this.images = this.imageService.getImage();
    console.log(this.images);
  }

}
