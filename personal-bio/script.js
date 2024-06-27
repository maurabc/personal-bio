// button html element
let themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {
    // toggle light theme class when button is clicked
    document.body.classList.toggle("light-theme");
    // if light theme is in class list (light theme is active) set the button text to dark mode
    if (document.body.classList.contains("light-theme")) {
        themeButton.textContent = "Dark Mode";
    // else, set the button text to light mode
    } else {
        themeButton.textContent = "Light Mode";
    }
});
