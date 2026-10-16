const btn = document.getElementById("btn");
const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");

async function getJoke() {
  setup.textContent = "Loading...";
  punchline.textContent = "";

  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();

    setup.textContent = data.setup;
    
    // delay punchline for effect
    setTimeout(() => {
      punchline.textContent = data.punchline;
    }, 1000);

  } catch (error) {
    setup.textContent = "Failed to fetch joke 😢";
  }
}

btn.addEventListener("click", getJoke);