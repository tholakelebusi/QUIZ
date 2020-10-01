import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [`
    .form-container{
      max-width: 500px;
      margin: 0 auto;
    }
  `]
})
export class HomePage {
  user = {};
  constructor(public navCtrl: NavController) {
  }

}
