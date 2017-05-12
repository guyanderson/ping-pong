
function runUserInput(input){
var pongArray = [];
  for(var i = 1; i <= input; i++) {
    if (i % 15 === 0) {
      j = "Ping-Pong!"
    } else if (i % 5 === 0) {
        j = "Pong!"
    } else if (i % 3 === 0) {
        j = "Ping!"
    } else {
        j = i
    }
      pongArray.push(j);
  };
  return pongArray
};


$(document).ready(function(){
  $("form#userInput").submit(function(event) {
  event.preventDefault();
  var userNumber = parseInt($("#userNumberInput").val());
  var result = runUserInput(userNumber);
  });
});
