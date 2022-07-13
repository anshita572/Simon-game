var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level=0;
var highscore=0;
var score=0;
// var green=false;
// $(document).keydown(function(e)
// {
//     if(e.key==='g')
//     {$(".btn").trigger("click", function () {
//       var userChosenColor = $(this).attr("id");
//       userClickedPattern.push(userChosenColor);
//       // console.log(userClickedPattern);
//       playButtonSound(userChosenColor);
//       animatePress(userChosenColor);
//       checkAnswer(userClickedPattern.length-1);
//     });
//         var greenSound = new Audio("./sounds/green.mp3");
//      greenSound.play();
//      green=true;
   // clickOrKeypress();
  //  $(".g").addClass("pressed");
  // userClickedPattern.push(e.key);
  // var userChosenColor = $(e.key).attr("id");
  // console.log(userChosenColor);
  // userClickedPattern.push(userChosenColor);
  // checkAnswer(userClickedPattern.length-1);
  //animatePress(e.key);
  // animatePress(userChosenColor);
    
//   }   
// }
// );
// function clickOrKeypress()
// { 
//   var userChosenColor = $("e.key"+id);
// userClickedPattern.push(userChosenColor);
// // console.log(userClickedPattern);
// playButtonSound(userChosenColor);
// animatePress(userChosenColor);
// checkAnswer(userClickedPattern.length-1);}

$(".btn").on("click", function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  // console.log(userClickedPattern);
  playButtonSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});
function playButtonSound(name) {
  var playSound = new Audio("./sounds/" + name + ".mp3");
  playSound.play();
}
function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(function () {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}
$(document).keypress(function (event) {
  // console.log(event.key);
  if (event.keyCode===13 && started === false) {
    // $("h1").html("Level "+level);
    nextSequence();
    $(".score-class").html("Score : "+score);
    started = true;
   
  }
});
function restart()
{
    level=0;
    $(".score-class").html("Score : "+score);
    score=0;
    
    gamePattern=[];
    started=false;
   
}
function checkAnswer(currentLevel)
{if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
{
    //console.log("right");
if(userClickedPattern.length===gamePattern.length)
{
    setTimeout(function()
    {nextSequence();},100);
    score++;
    $(".score-class").html("Score : "+score);
    if(level > highscore)
    {
      highscore=level;
    $(".highscore-class").html("Highscore : "+highscore);}
}}
else
{
   // console.log("wrong");
   var wrongSound = new Audio("./sounds/wrong.mp3");
  wrongSound.play();
  $("body").addClass("game-over");
  setTimeout(function()
  {$("body").removeClass("game-over");},200);
  $("h1").text("Game Over,Press Enter key to restart");
  restart();
  
}}

//randomly a color is chosen,it animates and plays its sound automatically randomly for the next level
function nextSequence() {
    userClickedPattern=[];
   
    level++;
    //highscore++;
  $("h1").html("Level "+level);
  //$("h2").html("Highscore = "+highscore);
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playButtonSound(randomChosenColor);
  

}
