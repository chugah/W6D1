$(document).ready(function(){
  $('#submit').on('click', gameStart);
});

$(document).ready(function(){
  update_bank();
})

var game = {
  bet: null,
  bank: 100,
  randNumber: null,
  numberGuess: null,
  
  getBetAmount: function() {
    return this.bet = parseInt($('#bet').val());
  },
  
  getRandomNumber: function(min, max) {
    return this.randNumber = Math.floor(Math.random()*(max-min+1)+min);
  },
  
  getNumberGuess: function() {
    return this.numberGuess = parseInt($('#guess').val());
  },
};

function update_bank(){
  document.querySelector('#balance').innerHTML = game.bank;
};

function reset_fields(){
	$('#bet').val("");
    $('#guess').val("");
};


function gameStart() {
  game.getBetAmount();
  game.getRandomNumber(1,10);
  game.getNumberGuess();

  console.log("randNum:" + game.randNumber + " - guess: " + game.numberGuess);

  if(game.bet > game.bank) {
    alert("Bet amount cannot be larger than your bank!")
    game.getBetAmount();
    reset_fields();
    
  }else{
    game.bank -= game.bet;
    update_bank();
    reset_fields;
    if(game.randNumber === game.numberGuess) {
      alert("You got it! you won " + (game.bet * 2) + " !" );
      game.bank += (game.bet * 2);
      update_bank();
      reset_fields();
    }else if((game.numberGuess + 1 || game.numberGuess -1) === game.randNumber){
      alert("You were close.... Here's your bet back!");
      game.bank += game.bet
      update_bank();
      reset_fields();
    }else{
      alert("Sorry you lost!");
      update_bank();
      reset_fields();
    };
  };
};

