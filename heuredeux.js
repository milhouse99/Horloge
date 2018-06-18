setInterval(function(){
    var date = new Date();
    updateTemps(date);
    // updateMontre(date);
  }, 1000);
  
  function updateTemps(date){
    var seconde = document.getElementById("seconde").style;
    var minute = document.getElementById("minute").style;
    var heure = document.getElementById("heure").style;
    
    seconde.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
    minute.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
    heure.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
  }
  
  function updateTime(date){
    var tempsDiv = document.getElementById("temps");
    var temps = "Time for Reference --- " + date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
    tempsDiv.innerHTML = temps;
  }