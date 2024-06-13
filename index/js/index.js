$(document).ready(function () {
  $(
    ".header-top, .header-logo a, .header-nav ul li, .visual-title h2, .visual-text"
  ).addClass("slide-up");

  setTimeout(function () {
    $(".slide-up").each(function (index) {
      $(this)
        .delay(300 * index)
        .queue(function (next) {
          $(this).addClass("visible");
          next();
        });
    });
  }, 500);
});
