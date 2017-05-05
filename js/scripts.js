var array = [];
function getInput(input){
  for(var i = 1; i <= input; i++) {
    if(i % 15 === 0) {
      i = "Ping-Pong!"
    }
    array.push(i)

  }
  return array;
};




$(document).ready(function(){
  $("form#userInput").submit(function(event) {
  event.preventDefault();

  var userNumber = parseInt($("#userNumberInput").val());
  var result = getInput(userNumber);
  $("ul").append("<li>"+result+"</li>");
  // alert(result);

  });
});
