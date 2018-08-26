$(document).ready(function() {
  // when the mouse enters an element with the target class, add the grayscale
  // class to the previous element
  $(".target").mouseenter(function() {
    $(this).prev().addClass("grayscale");
  });

  // remove grayscale class from previous element
  $(".target").mouseleave(function() {
    $(this).prev().removeClass("grayscale");
  });

  // add to previous element of previous element
  $(".target").mouseenter(function() {
    $(this).prev().prev().addClass("grayscale");
  });

  // remove from previos element of previous element
  $(".target").mouseleave(function() {
    $(this).prev().prev().removeClass("grayscale");
  });

  // Redirects
  $(".web").click(function() {
    window.location.href = "web/index.php";
  });

  $(".py").click(function() {
    window.location.href = "py/index.php";
  });

  $(".game").click(function() {
    window.location.href = "games/index.php";
  });
});
