
document.addEventListener("DOMContentLoaded", () => {
    const jokeButtons = document.querySelectorAll(".joke-card");

    jokeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.setAttribute("aria-busy", "true");
        });
    });
});
