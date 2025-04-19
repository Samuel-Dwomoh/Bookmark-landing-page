//Loading html elements
const pbrowser = document.getElementById("browser");
const below = document.getElementById("first");
const maindiv = document.getElementById("maindiv");
// Create paragraph once and append it
const ptag = document.createElement("p");
ptag.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsim sun de tak likye shjoos woru roiya otoe oao sdsd edssaeg wyouew w orw rw rouworuwuoruworw wouw owuo wo w oowpw woere wouryw owryuoey wowsyov sov osyoustsyts ssi";
ptag.classList.add("font-medium", "text-black", "mt-3", "w-full", "hidden", "mb-3");
maindiv.appendChild(ptag);

// Toggle visibility on click
below.addEventListener("click", () => {
  ptag.classList.toggle("hidden");
});
