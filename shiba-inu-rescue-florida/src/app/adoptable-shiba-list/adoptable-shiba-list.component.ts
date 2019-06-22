import { Component, OnInit } from '@angular/core';
import { Shiba } from '../shared/shiba.model';

@Component({
  selector: 'app-adoptable-shiba-list',
  templateUrl: './adoptable-shiba-list.component.html',
  styleUrls: ['./adoptable-shiba-list.component.css']
})
export class AdoptableShibaListComponent implements OnInit {
  adoptableShibas: Shiba[] = [
    new Shiba('Haru', 1, 24, "Female", 'Red', true, 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/shiba-inu-detail.jpg?bust=1535566568&width=355'),
    new Shiba('Kenshin', 2, 27, "Male", 'Red', true, 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/shiba-inu-detail.jpg?bust=1535566568&width=355')
  ];

  constructor() { }

  ngOnInit() {
  }

}
