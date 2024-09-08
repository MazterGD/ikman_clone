var closeButton2 = document.getElementById("close-btn2");
var allSriLankaButton = document.getElementById("all-sri-lanka-btn");
var postAdFreeButton = document.getElementById("post-ad-free-btn");
var popup2 = document.getElementById("city");


allSriLankaButton.addEventListener("click", function () {
    popup2.classList.add("show");
});

postAdFreeButton.addEventListener("click", function () {
    popup.classList.add("show");
});

closeButton2.addEventListener("click", function () {
    popup2.classList.remove("show");
});


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
