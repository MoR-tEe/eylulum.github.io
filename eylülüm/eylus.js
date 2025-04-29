window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 4000); // 4 saniye sonra intro kaybolur
});

function createBackgroundHeart() {
    const container = document.querySelector('.background-heart-container');
    const heart = document.createElement('div');
    heart.classList.add('bg-heart');
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = "100%";
    heart.style.fontSize = Math.random() * 10 + 20 + "px";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createBackgroundHeart, 1000);


