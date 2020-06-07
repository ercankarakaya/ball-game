//music
$(document).ready(function () {
   $("#start").click(function () {
       var audio = document.getElementById("music");
       audio.play();
    
   })
   $("#pause").click(function () {
       var audio = document.getElementById("music");
       audio.pause();
   })
 })
