var started=false;
var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red", "blue", "green", "yellow"];
var level=0;

// function start() {
// 	// body...
// 	if(!started){
// 		$("#level-title").text("Level   "+level);
// 		nextSequence();
// 		started=true;
// }

$(document).keypress(function () {
	// body...
	if(!started){
		$("#level-title").text("Level   "+level);
		nextSequence();
		started=true;
	}
});

document.getElementById('start').onclick = function function_name(argument) {
	// body...
	if(!started){
		$("#level-title").text("Level   "+level);
		nextSequence();
		started=true;
	}
};


function nextSequence() {
	userClickedPattern=[];
	level++;
	$("#level-title").text("Level "+level);
	var randomNumber= Math.floor(Math.random()*4);
	var randomChosenColour=buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomChosenColour);
}
$(".btn").click(function () {
	var userChosenColour = $(this).attr("id");
	userClickedPattern.push(userChosenColour);
	playSound(userChosenColour);
	animatePress(userChosenColour);
	checkAnswer((userClickedPattern.length)-1);
	//console.log(userClickedPattern);
});
function playSound(name) {
	var aud= new Audio("sounds/"+name+".mp3");
	aud.play();
}
function animatePress(currentColour) {
	$("#"+currentColour).addClass("pressed");
	setTimeout(function() {$("#"+currentColour).removeClass("pressed");}, 100);
}

function checkAnswer(currentLevel) {
	if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
		console.log("Success");
		if(gamePattern.length===userClickedPattern.length){
			setTimeout(function() {nextSequence();}, 1000);
		}
	}
	else{
		var audio= new Audio("sounds/wrong.mp3");
		audio.play();
		$("body").addClass("game-over");
		setTimeout(function() {$("body").removeClass("game-over");}, 200);
		$("#level-title").text("Game Over, Press Any Key Or Click On Start To Restart");
		startOver();
		//console.log("Failure");
	}

}

function startOver() {
	// body...
	level=0;
	gamePattern=[];
	started=false;
}