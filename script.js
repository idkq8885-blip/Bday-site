// Login

document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", () => {

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if(username === "Sayma" && password === "10/07/2010"){

            document.getElementById("loginScreen").style.display = "none";

        }else{

            document.getElementById("error").textContent =
            "Wrong name or password ❤️";

        }

    });

});

// ===========================
// Background Music
// ===========================

const music = document.getElementById("birthdaySong");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {

    music.play();

    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

    document.querySelector(".childhood").scrollIntoView({
        behavior: "smooth"
    });

});

// ===========================
// Celebrate Button
// ===========================

const celebrateButton = document.getElementById("confettiButton");

celebrateButton.addEventListener("click", () => {

    confetti({
        particleCount: 400,
        spread: 180,
        origin: { y: 0.6 }
    });

});

// ===========================
// Floating Hearts
// ===========================

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "absolute";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heart.style.animation = `float ${6 + Math.random() * 6}s linear`;

    heart.style.opacity = Math.random();

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);

}

setInterval(createHeart, 600);

// ===========================
// Floating Sparkles
// ===========================

const sparklesContainer = document.querySelector(".sparkles");

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "absolute";

    sparkle.style.left = Math.random() * 100 + "vw";

    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.fontSize = (10 + Math.random() * 12) + "px";

    sparkle.style.opacity = Math.random();

    sparkle.style.transition = "opacity 1s";

    sparklesContainer.appendChild(sparkle);

    setTimeout(() => {

        sparkle.style.opacity = "0";

    }, 1500);

    setTimeout(() => {

        sparkle.remove();

    }, 2500);

}

setInterval(createSparkle, 400);

// ===========================
// Floating Balloons
// ===========================

const balloonsContainer = document.querySelector(".balloons");

const balloonColors = [
    "#ff6b81",
    "#ff9ff3",
    "#feca57",
    "#54a0ff",
    "#5f27cd"
];

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.style.position = "absolute";

    balloon.style.width = "35px";

    balloon.style.height = "45px";

    balloon.style.borderRadius = "50%";

    balloon.style.background =
        balloonColors[Math.floor(Math.random() * balloonColors.length)];

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.top = "100vh";

    balloon.style.opacity = "0.8";

    balloon.style.animation = `float ${8 + Math.random() * 6}s linear`;

    balloonsContainer.appendChild(balloon);

    const string = document.createElement("div");

    string.style.position = "absolute";

    string.style.width = "2px";

    string.style.height = "35px";

    string.style.background = "#888";

    string.style.left = "16px";

    string.style.top = "45px";

    balloon.appendChild(string);

    setTimeout(() => {

        balloon.remove();

    }, 15000);

}

setInterval(createBalloon, 1800);

// ===========================
// Fade-in on Scroll
// ===========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = "all 1s ease";

    observer.observe(section);

});

// ===========================
// Typewriter Effect
// ===========================

const letter = document.getElementById("typewriter");

const originalText = letter.innerHTML;

letter.innerHTML = "";

let index = 0;

function typeWriter() {

    if (index < originalText.length) {

        letter.innerHTML += originalText.charAt(index);

        index++;

        setTimeout(typeWriter, 25);

    }

}

const endingSection = document.querySelector(".ending");

const endingObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            if (letter.innerHTML === "") {

                typeWriter();

            }

        }

    });

}, {
    threshold: 0.5
});

endingObserver.observe(endingSection);