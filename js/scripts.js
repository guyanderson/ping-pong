var array = [];
function getInput(input){
  for(var i = 1; i <= input; i++) {
    if(i % 15 === 0) {
      j = "Ping-Pong!"
    }
      else if(i % 5 === 0) {
        j = "Pong!"
      }
      else if(i % 3 === 0) {
        j = "Ping!"
      }
      else {
        j = i
      }
      $("ul").append("<li>"+j+"</li>");
    array.push(j)

  }
  return array;
};




$(document).ready(function(){
  $("form#userInput").submit(function(event) {
  event.preventDefault();

  var userNumber = parseInt($("#userNumberInput").val());
  var result = getInput(userNumber);
  $("ul").append("<li>"+result+"<br/></li>");


  });
});
