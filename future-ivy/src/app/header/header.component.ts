import {Component, OnInit, ɵmarkDirty} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'AngularUP 2020';

  changeTitle() {
    this.title = 'magic happens';
    ɵmarkDirty(this);
  }
}


/*
  Take on of these: ɵmarkDirty(this)
 */
