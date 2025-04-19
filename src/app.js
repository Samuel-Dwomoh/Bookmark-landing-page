//Loading html elements
const pbrowser = document.getElementById("browser");
const below = document.getElementById("first");

// Create paragraph once and append it
const ptag = document.createElement("p");
ptag.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";
ptag.classList.add("font-medium", "text-black", "mt-3", "w-full", "hidden");
pbrowser.appendChild(ptag);

// Toggle visibility on click
below.addEventListener("click", () => {
  ptag.classList.toggle("hidden");
});
