import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {
  @Input()
  catId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
