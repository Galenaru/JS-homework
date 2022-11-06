// Цель на будущее: Разобраться с калькулятором, доработать, чтоб все работало +сделать скобки
const calc = document.querySelector(".calc1");
const result = document.querySelector("#result");

calc.addEventListener("click", function (event) {
  if (!e.target.classList.contains("calc1__btn")) return;

  let value = event.target.innerText;

  switch (value) {
    case "C":
      result.innerText = "";
      break;

    case ".calc1__btn_cat":
      result.innerText = "";
      break;

    case "=":
      result.innerText = eval(result.innerText);
      break;

    default:
      result.innerText += value;
  }
});
