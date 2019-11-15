var start = new Date();

function stopTime(){
  var stop = new Date ();
  var timepassed = (stop.getTime() - start.getTime())/600
  alert(timepassed);
}
