const hamburger = document.getElementById("myLinks");
const icon = document.getElementsByClassName("fa-bars")[0];

icon.addEventListener("click", function() {
    if (hamburger.style.display === "none") {
        hamburger.style.display = "block"
    } else {
        hamburger.style.display = "none"
    }   
})