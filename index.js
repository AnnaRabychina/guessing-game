const GuessingGame = require('./src/guessing-game.js');

class GuessingGame {
    constructor(){
     
    }

    setRange(min, max){
        this.min = min;
        this.max = max;
    }

    guess(){
        this.number = Math.round((this.min + this.max) / 2)
        return this.number
    }
    
    lower(){
          this.max = this.number - 1;
    }

    greater(){
      this.min = this.number + 1;
    }
}

window.game = new GuessingGame();