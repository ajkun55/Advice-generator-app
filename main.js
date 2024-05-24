
const idDisplay = document.getElementById("advice-id");
const adviceDisplay = document.getElementById("advice-content");
const dice = document.getElementById("dice");

fetch('https://api.adviceslip.com/advice/117')
.then((res) => res.json()).then((data) => {
    const id = data.slip.id;
    idDisplay.textContent = id;
    adviceDisplay.textContent ="It is easy to sit up and take notice, what's difficult is getting up and getting action.";
  })

dice.addEventListener("click", ()=>{
    fetch('https://api.adviceslip.com/advice')
.then((res) => res.json()).then((data) => {
    const id = data.slip.id;
    const advice = data.slip.advice;
    idDisplay.textContent = id;
    adviceDisplay.textContent =advice;
  })
})
