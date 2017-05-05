function getInput(input){
return(input);
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
