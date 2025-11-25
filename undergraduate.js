
$(".e-list").slideUp(function() {
	$(".e-button").removeClass("open");
});

$(".e-button").on("click", function() {
  const $button = $(this);            // the clicked button
  const $list = $button.siblings(".e-list"); // its corresponding list

  if ($button.hasClass("open")) {
    $list.slideUp(200);
    $button.removeClass("open");
  } else {
    $list.slideDown(200);
    $button.addClass("open");
  }
});