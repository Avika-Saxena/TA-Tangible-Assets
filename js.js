// Add the "fixed" class to the header when scrolling past a certain point
window.addEventListener("scroll", function() {
    var header = document.querySelector(".header1");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});

function dashboard() { window.open("https://app.rwa.xyz/") }

function blog() { window.open("https://www.rwa.xyz/blog") }

function data_and_dev() { window.open("https://app.rwa.xyz/downloads") }

function login() { window.open("") }

function career() { window.open("https://jobs.ashbyhq.com/RWA.xyz") }

function latest() { window.open("https://www.rwa.xyz/blog/tokenized-treasuries-report") }

function home() { window.open("http://127.0.0.1:5500/index.html") }

function directory() { window.open("https://app.rwa.xyz/directory") }

function terms() { window.open("https://policies.google.com/terms?hl=en") }

function privacy() { window.open("https://policies.google.com/privacy?hl=en") }

function twitter() { window.open("https://twitter.com/rwa_xyz") }

function register() { window.open("https://app.rwa.xyz/login") }

function API() { window.open("https://www.rwa.xyz/blog") }