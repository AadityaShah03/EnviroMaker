import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-primary is-bold">
    <div class="hero-body has-text-centered">
      <div class="container ">
        <p class="title has-text-dark">
          The EnviroMaker Game
        </p>
      </div>
    </div>
  </section>

  <section class="hero is-bold">
    <div class="hero-body has-text-centered">
    <div class="container ">
        <p class="subtitle is-bold has-text-dark">
        Roll a 6 sided die <br>
        Roll a 3,4,5, or 6 to gain a Choice Card<br>
        Roll a 1 or 2 to gain a Resource Card
        </p>
      </div>
    </div>
  </section>

  <section class="hero is-bold">
    <div class="hero-subtitle has-text-centered">
  <div class="container ">
        <p class="subtitle has-text-dark">
          {{number}}
        </p>
      </div>
      </div>
  </section>

    <section class="section">
      <div class="container has-text-centered p-auto">
        <button class="button is-primary is-medium  is-outlined" (click)= "RollDice()">
          Roll the dice!
        </button>
      </div>
    </section>

    <section class="section">
      <div class="container has-text-centered" id="cardContainer">
        <img class="image" src= {{src}} alt="Card" id="cardPic">
      </div>
    </section>
  `,
  styles: [`
    .image{
      max-height: 500px;
      height: 70%;
      width: auto;
      margin: auto;
      display: block;
    }
  `]
})
export class HomeComponent {

  getResource(){
    const r = (Math.floor(Math.random() * 6) + 1); //3 cards per token
    this.src = "/assets/img/resource/"+r.toString()+".png" ;
  }

  getChoice(){
    const r = (Math.floor(Math.random() * 7) + 1);//7 cards rn
    this.src = "/assets/img/choice/"+r.toString()+".png" ;
  }

  RollDice() {
    const r = (Math.floor(Math.random() * 6) + 1);

    if(r==1 || r==2){
     this.number= r.toString() ;
      this.getResource();
      //The number is odd
   }
   else {
      this.number= r.toString();
      this.getChoice();
      //The number is even
   }
  }
  number = "Click the button to roll the dice";
  src= "/assets/img/back_of_card.png" ;
}
