import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showMenu: boolean = false;

  constructor() {
   }

  ngOnInit() {
    $(function(){
      $('.button-collapse').sideNav();

      let items: any = $('#nav-mobile li a');
      $('#nav-mobile li a:first').addClass('bordering');

      items.click(function(){
        items.removeClass('bordering');
        $(this).addClass('bordering');
      })

      items.hover(function(){
        items.removeClass('back-animate');
        $(this).addClass('back-animate');
      })

      items.mouseleave(function(){
        items.removeClass('back-animate');
      })

    })

  }

  showmenu(){
    this.showMenu = this.showMenu ? false:true;
    console.log(this.showMenu);
  }

}
