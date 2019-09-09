import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-auth-footer',
  templateUrl: './auth-footer.component.html',
  styleUrls: ['./auth-footer.component.scss']
})
export class AuthFooterComponent implements OnInit {

  currentYear: string;

  constructor() { }

  ngOnInit() {
    this.currentYear = moment().format('YYYY');
  }

}
