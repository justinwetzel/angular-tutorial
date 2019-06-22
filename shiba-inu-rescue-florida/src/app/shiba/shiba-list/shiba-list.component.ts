import { Component, OnInit } from '@angular/core';
import { Shiba } from '../../shared/shiba.model'

@Component({
  selector: 'app-shiba-list',
  templateUrl: './shiba-list.component.html',
  styleUrls: ['./shiba-list.component.css']
})
export class ShibaListComponent implements OnInit {
  shibas: Shiba[] = [
    new Shiba('Haru', 1, 24, "Female", 'Red', true, 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/shiba-inu-detail.jpg?bust=1535566568&width=355'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
