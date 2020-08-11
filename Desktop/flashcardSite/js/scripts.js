$(document).ready(function() {
  $(".clickable").click(function() {
    $("#jsShow").toggle();
    $("#jsHidden").toggle();
  });
  $(".clickable1").click(function() {
    $("#germany-showing").slideToggle();
    $("#germany-hidden").slideToggle();
  });
  $(".clickable2").click(function() {
    $("#netherlands-showing").slideToggle();
    $("#netherlands-hidden").slideToggle();
  });
});