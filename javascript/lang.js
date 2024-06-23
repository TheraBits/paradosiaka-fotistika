const toggleButton = document.getElementById("langToggle");
let currentLang = localStorage.getItem("lang") || "gr";

// Update UI based on current language
updateLanguage(currentLang);

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  // Update menu items
  const links = document.querySelectorAll(".dropdown-menu a");
  links.forEach((link) => {
    const text = link.getAttribute(`data-lang-${lang}`);
    link.textContent = text;
  });

  // Change the text of the page
  const elements = document.querySelectorAll(`[data-lang-${lang}]`);
  elements.forEach((element) => {
    const text = element.getAttribute(`data-lang-${lang}`);
    element.textContent = text;
  });

  // Update flag visibility
  document.querySelector(".gr").style.display =
    lang === "en" ? "none" : "inline";
  document.querySelector(".en").style.display =
    lang === "gr" ? "none" : "inline";
}

// Handle navigation link click
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    // Don't change language on menu items click
    if (link !== toggleButton) {
      updateLanguage(currentLang);
    }
  });
});

// Handle toggle button click
toggleButton.addEventListener("click", function () {
  currentLang = currentLang === "gr" ? "en" : "gr";
  updateLanguage(currentLang);
});
