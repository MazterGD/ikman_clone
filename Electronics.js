var currentSlide = 0;
var slides = document.getElementsByClassName("slideshow-image");


function showSlide() {
    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[currentSlide].style.display = "block";

    // Increment the slide counter
    currentSlide++;

    // If the end of the slideshow is reached, go back to the beginning
    if (currentSlide === slides.length) {
        currentSlide = 0;
    }

    // Repeat the process every 3 seconds
    setTimeout(showSlide, 3000);
}

// Start the slideshow
showSlide();

function showMore() {
    var moreText = document.getElementById("more");
    var moreText2 = document.getElementById("more2");
    var btnText = document.getElementById("show-more-btn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Show more";
        moreText.style.display = "none";
        moreText2.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Show less";
        moreText.style.display = "inline";
        moreText2.style.display = "inline";
    }
}
