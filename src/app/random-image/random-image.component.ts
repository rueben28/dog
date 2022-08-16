import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.scss']
})
export class RandomImageComponent implements OnInit {
  @Output() breedNameData = new EventEmitter();
  randomImgSrc: any[] = [];
  constructor(private _service: AppService) { }

  ngOnInit(): void {
    this._service.getRandomImage().subscribe(resp => {
      if(resp) {
        this.randomImgSrc = resp['message'];
      }
    })
  }

  getBreedName(src) {
    let name = src.split('/')[4]; 
    let breedName: string;
    if(name.indexOf('-') > -1) {
      breedName = name.split('-')[0]
    } else {
      breedName = name;
    }
    return breedName;
  }

  passBreedName(src) {
    let name = this.getBreedName(src);
    this.breedNameData.emit(name);
  }

}
