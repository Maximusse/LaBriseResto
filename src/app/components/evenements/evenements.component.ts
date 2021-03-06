import { Component, OnInit, keyframes } from '@angular/core';
import { trigger, state, animate, style, transition, query } from '@angular/animations';
import { fallIn, moveIn } from '../../app.animations';
import { NgProgress } from 'ngx-progressbar';
import { WOW } from 'wowjs/dist/wow.min';

import { EventsService } from '../../services/events.service';

declare var $: any;

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css'],
  animations: [fallIn(), moveIn()],
  host: { '[@fallIn],[@moveIn]': '' }
})
export class EvenementsComponent implements OnInit {

  toggleView: boolean = false;
  evenements: any;
  eventDetails: any = [];

  constructor(public progressService: NgProgress, private eventService: EventsService) { }

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
      $('.materialboxed').materialbox();
      
      var a = $('.event-right-bloc .erb-content-left a');
      var c = $('.erb-content-left');

      c.hover(function(){
        $(this).find('a').animate({'top':'0'},400);
      });

      c.mouseleave(function(){
        $(this).find('a').animate({'top':'-202px'},400);
      })

    })

    this.evenements = this.eventService.getEvent();

  }

  showEventDetail(){
    // this.eventDetails = this.evenements[event];
    this.toggleView = true;
  }

  closePanel(){
    this.toggleView = false;
    // this.eventDetails = [];
  }

}
