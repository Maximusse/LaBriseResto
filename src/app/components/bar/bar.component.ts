import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/animations';
import { fallIn, moveIn } from '../../app.animations';
import { NgProgress } from 'ngx-progressbar';
import { WOW } from 'wowjs/dist/wow.min';

declare var $: any;

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  animations: [fallIn(), moveIn()],
  host: { '[@fallIn],[@moveIn]': '' }
})
export class BarComponent implements OnInit {

  apperitifs: any;
  digestifs: any;
  cognac: any;
  whisky_1: any;
  whisky_2: any;
  whisky_3: any;
  liqueurs: any;
  gins: any;
  rhums: any;

  boissons_s: any;
  cocktails_b: any;
  boissons_p: any;
  cannettes_s: any;
  cannettes_b: any;
  bieres: any;
  boissons_e: any;
  eaux_m: any;
  jus: any;
  boissons_c: any;
  sirops: any;

  constructor(public progressService: NgProgress) {

    this.apperitifs = [
      { 'name': 'Martini : Rouge/ Blanc / Rosé', 'price': '2000' },
      { 'name': 'Suze : Rouge/ Blanc / Rosé', 'price': '2000' },
      { 'name': 'Porto : rouge / blanc : Rouge/ Blanc / Rosé', 'price': '2000' },
      { 'name': 'Campari', 'price': '2000' },
      { 'name': 'Ricard', 'price': '2500' },
      { 'name': 'Pastis 51', 'price': '2500' }
    ]

    this.digestifs = [
      { 'name': 'Poire William’s', 'price': '3000' },
      { 'name': 'Mirabelle', 'price': '3000' },
      { 'name': 'Framboise', 'price': '3000' },
      { 'name': 'Vodka', 'price': '3000' }
    ]

    this.cognac = [
      { 'name': 'Calvados', 'price': '4000' },
      { 'name': 'Armagnac', 'price': '4000' },
      { 'name': 'Rémy Martin', 'price': '4000' },
      { 'name': 'Hennessy', 'price': '4000' }
    ]

    this.whisky_1 = [
      { 'name': 'J & B', 'price': '2500' },
      { 'name': 'Clan Campbell', 'price': '2000' },
      { 'name': 'Cutty Sark', 'price': '2000' },
      { 'name': 'Ballantine’s', 'price': '2500' },
    ]

    this.whisky_2 = [
      { 'name': 'VAT 69', 'price': '2000' },
      { 'name': 'White Horse', 'price': '2000' },
      { 'name': 'Johnny Walker Red label', 'price': '2500' },
      { 'name': 'Johnny Walker Black label', 'price': '4000' }
    ]

    this.whisky_3 = [
      { 'name': 'Jack Daniel’s', 'price': '4000' },
      { 'name': 'Dimple', 'price': '4000' },
      { 'name': 'Chivas', 'price': '4000' },
      { 'name': 'Blanco Tequila', 'price': '4000' }
    ]

    this.liqueurs = [
      { 'name': 'Cointreau', 'price': '4000' },
      { 'name': 'Grand Marnier', 'price': '4000' },
      { 'name': 'Marie Brizard', 'price': '4000' },
      { 'name': 'Get Pippermint', 'price': '4000' },
      { 'name': 'Crème Cassis', 'price': '4000' },
      { 'name': 'Crème de cacao', 'price': '4000' },
      { 'name': 'Baïley’s', 'price': '4000' },
      { 'name': 'Malibou', 'price': '4000' },
      { 'name': 'Eau de vie', 'price': '4000' }
    ]

    this.gins = [
      { 'name': 'Gordon’s', 'price': '2000' },
      { 'name': 'Beefeater', 'price': '2000' },
      { 'name': 'Royal', 'price': '2000' }
    ]

    this.rhums = [
      { 'name': 'Saint James rouge', 'price': '2000' },
      { 'name': 'Saint James blanc', 'price': '2000' },
      { 'name': 'Clément blanc', 'price': '7000' }
    ]

    // Rafaichissement

    this.boissons_s = [
      { 'name': 'Coca/ Fanta /Tonic / Sprite', 'price': '1000' },
      { 'name': 'Orangina', 'price': '1000' },
      { 'name': 'Soda Water', 'price': '1000' },
      { 'name': 'O.K Tip-Top', 'price': '1000' },
      { 'name': 'Malta Guinness', 'price': '1000' }
    ]

    this.cocktails_b = [
      { 'name': 'Cocktail sans alcool', 'price': '2000' },
      { 'name': 'Cocktail avec alcool', 'price': '3000' },
      { 'name': 'Kir Impérial', 'price': '5000' },
      { 'name': 'Kir Royal', 'price': '10000' },
      { 'name': 'Coupe de champagne', 'price': '10000' }
    ]

    this.boissons_p = [
      { 'name': '7 UP', 'price': '1000' },
      { 'name': 'EVERVESS TONIC', 'price': '1000' },
      { 'name': 'PEPSI', 'price': '1000' },
      { 'name': 'MIRINDA', 'price': '1000' }
    ]

    this.cannettes_s = [
      { 'name': 'COCA', 'price': '1000' },
      { 'name': 'COCA LITGH', 'price': '1000' },
      { 'name': 'COCA ZERO', 'price': '1000' },
      { 'name': 'FANTA', 'price': '1000' },
      { 'name': 'SPRITE', 'price': '1000' },
      { 'name': 'TONIC', 'price': '1000' }
    ]

    this.bieres = [
      { 'name': 'Number one « 65 cl', 'price': '1500' },
      { 'name': 'Gold 55', 'price': '1000' },
      { 'name': 'Flaguette', 'price': '1000' },
      { 'name': 'Tuborg « 33 cl »', 'price': '1000' },
      { 'name': 'Guiness « 28 »', 'price': '1000' },
      { 'name': 'Heineken', 'price': '2000' },
      { 'name': 'Flag « 65 cl » « 28 »', 'price': '1500' },
      { 'name': 'Bock « 65 cl »', 'price': '1500' }
    ]

    this.cannettes_b = [
      { 'name': 'Grande', 'price': '2000' },
      { 'name': 'Petite', 'price': '1000' }
    ]

    this.boissons_e = [
      { 'name': 'Red Bull', 'price': '2000' },
      { 'name': 'Codis', 'price': '2000' },
      { 'name': 'XXL', 'price': '2000' },
      { 'name': 'Planète', 'price': '2000' }
    ]

    this.eaux_m = [
      { 'name': 'AWA', 'price': '1000' },
      { 'name': 'Olgane', 'price': '1000' },
      { 'name': 'Céleste', 'price': '1000' },
      { 'name': 'AWA Petite bouteille', 'price': '500' },
      { 'name': 'Olgane Petite bouteille', 'price': '500' },
      { 'name': 'Céleste Petite bouteille', 'price': '500' },
      { 'name': 'Eau pétillante', 'price': '2000' },
      { 'name': '1/4 de Perrier', 'price': '1500' },
      { 'name': '½ Perrier', 'price': '2000' }
    ]

    this.jus = [
      { 'name': 'Orange', 'price': '1000' },
      { 'name': 'Pamplemousse', 'price': '1000' },
      { 'name': 'Ananas', 'price': '1000' },
      { 'name': 'Citron', 'price': '1000' }
    ]

    this.sirops = [
      { 'name': 'Menthe', 'price': '1000' },
      { 'name': 'Grenadine', 'price': '1000' },
      { 'name': 'Citron', 'price': '1000' },
      { 'name': 'Menthe au lait', 'price': '2000' },
      { 'name': 'Sam Bitter', 'price': '1000' }
    ]

    this.boissons_c = [
      { 'name': 'Café Expresso', 'price': '1000' },
      { 'name': 'Thé Lipton ordinaire', 'price': '1000' },
      { 'name': 'Infusion (verveine / menthe)', 'price': '1500' },
      { 'name': 'Citronnelle', 'price': '1500' }
    ]


  }

  ngOnInit() {

    new WOW().init();

    this.progressService.start();
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
