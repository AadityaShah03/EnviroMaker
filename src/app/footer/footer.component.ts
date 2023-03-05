import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container content has-text-centered">
        <p>Play the hit game today!</p>
      </div>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent {
  openGithub(){
    window.open("https://github.com/AadityaShah03")
  }
}
