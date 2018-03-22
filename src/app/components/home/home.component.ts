import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/animations';
import { fallIn, moveIn } from '../../app.animations';
import { NgProgress } from 'ngx-progressbar';
import { WOW } from 'wowjs/dist/wow.min';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fallIn(), moveIn()],
  host: { '[@fallIn],[@moveIn]': '' }
})
export class HomeComponent implements OnInit {

  someElements_1: any;
  someElements_2: any;
  entrees_f: any;

  constructor(public progressService: NgProgress) {

    this.someElements_1 = [
      { 'titre': 'Salade verte', 'price': '2000' },
      { 'titre': 'Avocat vinaigrette', 'price': '2000' },
      { 'titre': 'Avocat au thon', 'price': '3000' },
      { 'titre': 'Crêpe forestière', 'price': '3500' },
      { 'titre': 'Omelette au jambon', 'price': '3000' }
    ]

    this.someElements_2 = [
      { 'titre': 'Sandwich au jambon', 'price': '3000' },
      { 'titre': 'Sandwich au poulet', 'price': '2000' },
      { 'titre': 'Sandwich au filet de boeuf', 'price': '3000' },
      { 'titre': 'Sandwich au saucisson', 'price': '4000' },
      { 'titre': 'Sandwich au pâté de campagne', 'price': '4500' }
    ]

  }

  ngOnInit() {

    new WOW().init();

    this.progressService.start();
    this.progressService.set(0.1);
    this.progressService.inc(0.2);

    setTimeout(() => {
      this.progressService.done();
    }, 1000); this.progressService.start();
    this.progressService.set(0.1);
    this.progressService.inc(0.2);

    setTimeout(() => {
      this.progressService.done();
    }, 1000);

    $(function () {
      $(window).scrollTop(0);
      $('.parallax').parallax();

    })

  }

}
