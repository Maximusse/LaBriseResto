import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/animations';
import { fallIn, moveIn } from '../../app.animations';
import { NgProgress } from 'ngx-progressbar';
import { WOW } from 'wowjs/dist/wow.min';

declare var $: any;

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css'],
  animations: [fallIn(), moveIn()],
  host: { '[@fallIn],[@moveIn]': '' }
})
export class EvenementsComponent implements OnInit {

  constructor(public progressService: NgProgress) { }

  ngOnInit() {
    new WOW().init();

    this.progressService.start();
    this.progressService.set(0.1);
    this.progressService.inc(0.2);
    
    setTimeout(() => {
      this.progressService.done();
    },1000);

    $(function(){
      $(window).scrollTop(0);
    })


  }

}
