const button = document.getElementById("sillyBtn");
const message = document.getElementById("message");

const sillyMessages = [
    "You tried to charge your phone with a spoon. 😂",
    "You looked for your glasses while wearing them. 🤣",
    "You opened the fridge and forgot why. 😆",
    "You waved back at someone who wasn't waving at you. 😭",
    "You said 'you too' when the waiter said enjoy your meal. 🍕",
    "You searched for your phone while holding it. 📱",
    "You are officially 97% silly today. 🤪",
    "Congratulations! You unlocked Ultimate Silly Mode. 😂"
];

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * sillyMessages.length);
    message.textContent = sillyMessages[randomIndex];

    createEmoji();
});

function createEmoji(){
    const emojis = ["😂","🤣","😆","🤪","😜","😹"];

    for(let i = 0; i < 20; i++){
        const emoji = document.createElement("div");

        emoji.classList.add("emoji");
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.top = "-50px";

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 4000);
    }
}