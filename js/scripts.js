var array = [];
function getInput(input){
  for(var i = 1; i <= input; i++) {
    array.push(i)
  }
 return(array);
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
