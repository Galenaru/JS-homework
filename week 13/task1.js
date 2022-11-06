let userGreeting = "Здравствуй, странник/ца";
function showMessage() {
  alert(`${userGreeting}`);
  let nameUser = prompt("Как тебя зовут?", "Аноним");
  alert(`Привет, ${nameUser}! Рады видеть тебя на этой странице ♥
  `);
}
