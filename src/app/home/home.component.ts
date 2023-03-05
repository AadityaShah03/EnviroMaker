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
<div class="container has-text-centered" >
    <section class="sec">
		<ng-container *ngIf= "show">
			<div class="container" id="loadingGif">
				<div class="hero-subtitle has-text-centered">
					<div class="container ">
						<p class="subtitle has-text-dark">
							Rolling the die!
						</p>
					</div>
				</div>
				<img class="gif" src="/assets/img/DiceRolling.gif">
			</div>
		</ng-container>
        <section class="hero is-bold">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <p class="subtitle is-bold has-text-dark">
                        Roll a 6 sided die <br>
                        Roll a 3,4,5, or 6 to gain a Decision Card<br>
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
                Roll the die!
                </button>
            </div>
        </section>
    </section>
    <section class="sec">
        <section class="section">
            <div class="container has-text-centered" id="cardContainer">
                <img class="image" src= {{src}} alt="Card" id="cardPic">
            </div>
        </section>
    </section>
</div>
  `,
  styles: [`
	.gif{
		max-height: 100px;
	}
    .image{
      max-height: 500px;
      height: 100%;
      width: auto;
      margin: auto;
      display: inline-block;
    }
    .sec{
      display:inline-block;
    }
  `]
})
export class HomeComponent {
  getResource(a: number){
    const r = (Math.floor(Math.random() * 12) + 1); //6 cards per token(3 ones, 2 twos, 1 three)
	if( Number(r) == 9 || Number(r) == 1|| Number(r) == 7  ){
		this.number= "You rolled a "+a.toString()+" and got 1 Wellbeing!";
	}else if( Number(r) == 2 || Number(r) == 8  ){
		this.number= "You rolled a "+a.toString()+" and got 2 Wellbeing!";
	}else if( Number(r) == 3){
		this.number= "You rolled a "+a.toString()+" and got 3 Wellbeing!";
	}else if( Number(r) == 4 || Number(r) == 11|| Number(r) == 10|| Number(r) == 13 || Number(r) == 14|| Number(r) == 18){
		this.number= "You rolled a "+a.toString()+" and got 1 Capital!";
	}else if( Number(r) == 5 || Number(r) == 12 || Number(r) == 17 || Number(r) == 15){
		this.number= "You rolled a "+a.toString()+" and got 2 Capital!";
	}else{
		this.number= "You rolled a "+a.toString()+" and got 3 Capital!";
	}
    this.src = "/assets/img/resource/"+r.toString()+".png" ;
  }

  getChoice(){
    const r = (Math.floor(Math.random() * 20) + 1);//20 cards rn
    this.src = "/assets/img/choice/"+r.toString()+".png" ;
  }

  async RollDice() {
	this.show=true;
    const r = (Math.floor(Math.random() * 6) + 1);
	await new Promise(f => setTimeout(f, 1000));
    if( r==1 || r==2 ){

		this.getResource(r);
   }
   else {
      this.number= "You rolled a "+r.toString()+" and got a Decision card!";
      this.getChoice();
   }
   this.show=false
  }
  show = false;
  number = "Click the button to roll the die";
  src= "/assets/img/back_of_card.png" ;
}
