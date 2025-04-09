const lampEl = document.getElementById("lamp");
const lamponEl = document.getElementById("lampon");
const buttonEl = document.getElementById("button");

// dobbiamo creare una funzione sul bottone al click cambia immagine

buttonEl.addEventListener("click", () => {
  //   console.log("sono stato cliccato");
  buttonEl.classList.toggle("bg-warning");
  if (lampEl.classList.toggle("d-none")) {
    lamponEl.classList.remove("d-none");

    lamponEl.classList.add("d-block");
  } else {
    lamponEl.classList.add("d-none");
  }
});
