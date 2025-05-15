// Change heading color when clicked
document.querySelector("h1").addEventListener("click", function () {
    this.style.color = "#ff5722"; // Changes color to orange
});

// Show an alert when clicking a link
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents default navigation
        alert("Redirecting to: " + this.href);
        window.open(this.href, "_blank"); // Opens link in new tab
    });
});