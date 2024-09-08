var loginButton = document.getElementById("login-btn");
var chatButton = document.getElementById("chat-btn");
var postAdButton = document.getElementById("post-ad-btn");
var closeButton = document.getElementById("close-btn");
var popup = document.getElementById("login");



loginButton.addEventListener("click", function () {
    popup.classList.add("show");
});

chatButton.addEventListener("click", function () {
    popup.classList.add("show");
});

postAdButton.addEventListener("click", function () {
    popup.classList.add("show");
});

closeButton.addEventListener("click", function () {
    popup.classList.remove("show");
});

