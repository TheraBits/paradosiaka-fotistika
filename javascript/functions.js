



$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 1290) {
      $(".nav-bar").css("background-color", "rgb(216, 150, 166)");
      $(".logo-fanari3").css({ "top": "40px" });
    }
    else if ($(document).scrollTop() > 850) {
      $(".nav-bar").css("background-color", "rgb(29, 20, 23, 1)");
      $(".logo-fanari3").css({ "top": "40px" });
    }
    else if ($(document).scrollTop() > 350) {
      $(".nav-bar").css("background-color", "rgba(47, 73, 158, 0.514)");
      $(".logo-fanari3").css({ "top": "40px" });
    }
    else {
      $(".nav-bar").css("background-color", "transparent");
      $(".logo-fanari3").css({ "top": "0px" });
    }
  });
});



// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(window).scrollTop() > $(window).height()) {
//       $(".nav-bar").css({ "background-color": "rgb(231, 220, 209, 1)" });
//       $(".logo-fanari3").css({ "top": "30px" });
//     }
//     else {
//       $(".nav-bar").css({ "background-color": "transparent" });
//       $(".logo-fanari3").css({ "top": "0px" });
//     }

//   })
// })


