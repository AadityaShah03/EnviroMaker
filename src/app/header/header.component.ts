import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-dark is-spaced $navbar-item-img-max-height">
      <!--LOGO-->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="/assets/img/logo-no-background.png" routerLink="/">
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" routerLink="/">Home</a>
        </div>
      </div>

    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
