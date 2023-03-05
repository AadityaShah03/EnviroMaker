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
          Even Number: Choice Card, Odd Number: Resource Card
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
    const r = (Math.floor(Math.random() * 6) + 1);
    this.src = "/assets/img/resource/"+r.toString()+".png" ;
  }

  getChoice(){
    const r = (Math.floor(Math.random() * 6) + 1);
    this.src = "/assets/img/choice/"+r.toString()+".png" ;
  }

  RollDice() {
    const r = (Math.floor(Math.random() * 6) + 1);

    if(r % 2==0){
      this.even=true;
      this.number= r.toString() + " is Even";
      //The number is even
   }
   else {
    this.even=false;
    this.number= r.toString() + " is Odd";
    this.getResource();
    //The number is odd
   }
  }

  even = true;
  number = "Click roll to roll the dice";
  src= "/assets/img/back_of_card.png" ;



  /*getRandomPic() {
    this.dogService.getRandomPics().subscribe(
      data=>{
        let values = JSON.parse(JSON.stringify(data.message));
        //select.innerHTML= "<img src="+values+" alt='dog' >";
        this.src = values;
        this.show=true;
      },
      error =>{
        console.log("error")
      }
    )
  }

  saveRating(){
    let ratingInput =Number((<HTMLInputElement> document.getElementById("rateNum")).value);
    if(!(ratingInput>10 || ratingInput<0) && this.src!="/assets/img/dog.jpg" && (<HTMLInputElement> document.getElementById("rateNum")).value!=""){
      this.cookies.set(this.src,ratingInput.toString());
      (<HTMLInputElement> document.getElementById("rateNum")).value="";
      this.getRandomPic();
      this.getHistory();
      if(this.i){
        this.sortAcc();
      }
      else{
        this.sortDec();
      }

    }
  }

  saveRatingEnter(e: { preventDefault: () => void; }):void{
    e.preventDefault();
    let ratingInput =Number((<HTMLInputElement> document.getElementById("rateNum")).value);
    if(!(ratingInput>10 || ratingInput<0) && this.src!="/assets/img/dog.jpg" && (<HTMLInputElement> document.getElementById("rateNum")).value!=""){
      this.cookies.set(this.src,ratingInput.toString());
      (<HTMLInputElement> document.getElementById("rateNum")).value="";
      this.getRandomPic();
      this.getHistory();
      if(this.i){
        this.sortAcc();
      }
      else{
        this.sortDec();
      }

    }
  }

  getHistory(){
    let temp:{} =this.cookies.getAll();
    const info: any[] = [];
    this.ratings=Object.entries(temp).map( entry =>({key:entry[0],value:entry[1]}));
    console.log(this.ratings);
  }

  sortDec(){
    this.ratings.sort(function(a,b) {
      return b.value - a.value
    });
  }

  sortAcc(){
    this.ratings.sort(function(a,b) {
      return a.value -b.value
    });
  }

  toggleOrder(){
    if(this.i){
      this.i=false;
      this.getHistory();
      this.sortDec();
    }else{
      this.i=true;
      this.getHistory();
      this.sortAcc();
    }
  }
*/


}
