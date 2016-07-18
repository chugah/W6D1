$(document).ready(function(){
  $('#submit').on('click', gameStart);
});

$(document).ready(function(){

	var user_dollar_amount = 100;

	/*
	@return: responds with user's answer
	*/
	function promptUser(question){
		prompt_response = prompt(question);
		return prompt_response;
	}
	
	/*
	@return: returns a random int between min and max
	*/
	function generateRandomInt(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	/*
	@description: changes bankroll depending on guess correctness
	*/
	function compareNumbers(user_guess, bet_amount){
		var delta = Math.abs(user_guess - random)
		if (delta === 0) {
		  return bet_amount;
		} else if (delta > 1) {
		  return bet_amount * -1;
		} else {
		  return 0;
		}		
	}
	
	/*
	@description: starts the game loop
	*/
	function startGame(){
		var user_guess = promptUser('Please enter a number between 1 and 10');
		var bet_amount = promptUser('How much would you like to bet? [between $5 and $10]');
		random = generateRandomInt(1, 10);
		var results = compareNumbers(user_guess, bet_amount);
		user_dollar_amount += result;
	}
	
	startGame();

});