document.getElementById("logoButton").addEventListener("click", function() {
    document.querySelector(".hamburgerOverlay").style.height = "100vh";
});

function closeNav() {
    document.querySelector(".hamburgerOverlay").style.height = "0%";
}
