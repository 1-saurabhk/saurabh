// Change heading color on click
document.getElementById("intro-heading").addEventListener("click", function () {
    this.style.color = this.style.color === "#ff5722" ? "#002ca7" : "#ff5722";
});

// Alert on social link click
document.querySelectorAll(".social-links a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default navigation
        alert("Redirecting to: " + this.href);
        window.open(this.href, "_blank"); // Opens link in a new tab
    });
});