//Loading html elements
const pbrowser = document.getElementById("browser");
const below = document.getElementById("first");
const maindiv = document.getElementById("maindiv");
const stubborn = document.getElementById("stubborn");
// Create paragraph once and append it
const ptag = document.createElement("p");
ptag.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra scelerisque libero, at egestas mi lobortis ac. Nulla facilisi. Integer malesuada justo nec metus vulputate, ac tempor risus vestibulum. Vivamus non diam sit amet magna varius fringilla. Curabitur vel neque ut turpis aliquet tempor a sit amet lorem. Vestibulum ut ultricies lorem. Fusce auctor nisi vel ex bibendum mollis. Etiam volutpat, ipsum at ultricies viverra, felis purus placerat eros, sit amet hendrerit libero neque ut nisl. Mauris in magna sit amet.";
ptag.classList.add("font-medium", "text-black", "w-full", "hidden", "mb-3");
maindiv.appendChild(ptag);

// Toggle visibility on click
below.addEventListener("click", () => {
  ptag.classList.toggle("hidden");
  stubborn.classList.toggle("rotate-180");
});
