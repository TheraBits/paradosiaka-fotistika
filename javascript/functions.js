// Move lantern on right side of menu down on scroll in Home page

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 1290) {
      $(".nav-bar").css("background-color", "rgb(216, 150, 166)");
      $(".logo-fanari3").css({ top: "40px" });
    } else if ($(document).scrollTop() > 850) {
      $(".nav-bar").css("background-color", "rgb(29, 20, 23, 1)");
      $(".logo-fanari3").css({ top: "40px" });
    } else if ($(document).scrollTop() > 350) {
      $(".nav-bar").css("background-color", "rgba(47, 73, 158, 0.514)");
      $(".logo-fanari3").css({ top: "40px" });
    } else {
      $(".nav-bar").css("background-color", "transparent");
      $(".logo-fanari3").css({ top: "0px" });
    }
  });
});

const toggleButton = document.getElementById("langToggle");
let currentLang = document.getElementById("langToggleButton").className;

toggleButton.addEventListener("click", function () {
  // Toggle the language
  // console.log("initial", currentLang);
  if (currentLang === "gr") {
    currentLang = "en";
  } else {
    currentLang = "gr";
  }

  // Change the text of the page
  const elements = document.querySelectorAll(`[data-lang-${currentLang}]`);
  elements.forEach((element) => {
    // Toggle the visibility of the flags
    document.querySelector(".gr").style.display =
      currentLang === "en" ? "none" : "inline";
    document.querySelector(".en").style.display =
      currentLang === "gr" ? "none" : "inline";
    const text = element.getAttribute(`data-lang-${currentLang}`);
    element.textContent = text;
  });
  console.log("elements", elements);
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
