let count = 0;

function increment() {
  count += 1;
  let countEl = document.getElementById("count-el");
  countEl.textContent = count;
}
function save() {
  let countEl = document.getElementById("count-el");
  let saveEl = document.getElementById("save-el");
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
