const lampEl = document.getElementById("lamp");
const lamponEl = document.getElementById("lampon");
const buttonEl = document.getElementById("button");

// dobbiamo creare una funzione sul bottone al click cambia immagine

buttonEl.addEventListener("click", () => {
  //   console.log("sono stato cliccato");
  buttonEl.classList.toggle("bg-secondary");
  buttonEl.classList.add("color-primary");
  buttonEl.innerHTML = "spegni";
  if (lampEl.classList.toggle("d-none")) {
    lamponEl.classList.remove("d-none");
    lamponEl.classList.add("d-block");
  } else {
    lamponEl.classList.add("d-none");
  }
  console.log(lampEl);
  console.log(lamponEl);
  console.log(buttonEl);
});
// la lampada si accende e spegne
console.log(lampEl);
console.log(lamponEl);
console.log(buttonEl);
