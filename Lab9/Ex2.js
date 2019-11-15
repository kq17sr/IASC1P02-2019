function getValue(){
  var result = prompt("What is your age?");
  var result1= Number(result);
  var todayDate = new Date();
  var year = todayDate.getFullYear();
  document.write (year - result1);
}
