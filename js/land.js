$(document).ready(function() {
  $(".target").mouseenter(function() {
    $(this).prev().addClass("grayscale");
  });

  $(".target").mouseleave(function() {
    $(this).prev().removeClass("grayscale");
  });

  $(".target").mouseenter(function() {
    $(this).prev().prev().addClass("grayscale");
  });

  $(".target").mouseleave(function() {
    $(this).prev().prev().removeClass("grayscale");
  });
});
