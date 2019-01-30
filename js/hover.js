  /* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
$(document).ready(function() {
  $("#cf_onclick").click(function() {
  $("#cf2 img.top").toggleClass("transparent");
});
});
$(document).ready(function() {
  $("#cf_onclick").click(function() {
  $("#cf2 div.overlay1").toggleClass("transparent");
});
});