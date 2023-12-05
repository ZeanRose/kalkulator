const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "empty";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});
const thematoggleBtn = document.querySelector(".thema-toggler");
const calculator = document.querySelector(".dark");
const toggleicon = document.querySelector(".toggler-icon");
let isDark = true;
thematoggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  thematoggleBtn.classList.toggle("active");
  isDark = !isDark;
};