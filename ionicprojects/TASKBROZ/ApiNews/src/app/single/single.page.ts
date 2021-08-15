import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articles } from '../articles';

@Component({
  selector: 'app-single',
  templateUrl: './single.page.html',
  styleUrls: ['./single.page.scss'],
})
export class SinglePage implements OnInit {
  article: any;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.article = this.router.getCurrentNavigation().extras.state.stored;
    } else {
      this.router.navigate(['/home']);
    }
  }
}
