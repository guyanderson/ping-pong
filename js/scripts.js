$(document).ready(function(){
  $("form#userInput").submit(function(event) {
  event.preventDefault();

  var userNumber = parseInt($("#userNumberInput").val());
  // alert(userNumber);

  });
});
