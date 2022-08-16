import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-breed-image',
  templateUrl: './breed-image.component.html',
  styleUrls: ['./breed-image.component.scss']
})
export class BreedImageComponent implements OnInit {
  @Input('breedName') breedName: string;
  breedImgSrc: any[] = [];
  constructor(private _service: AppService) { }

  ngOnInit(): void {
    this.getBreedImageRandom();
  }

  ngOnChanges(changes: SimpleChange) {
    if(changes) {
      this.getBreedImageRandom()
    }
  }

  getBreedImageRandom() {
    this._service.getBreedImage(this.breedName).subscribe(resp => {
      if(resp) {
        this.breedImgSrc = resp['message'];
      }
    })
  }

}
