const display = document.querySelector("#display");
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
     if (item.id == "clear") {
         display.innerText = "";
     }else if (item.amid == "backspace") {
         let string = display.innerText.toString();
        display.innerText = string.subtr(0, string.lenght -1);
     }else if (display.innerText != '' && item.id == "igual") {
         display.innerText = eval(display.innerText);
     }else if (display.innerText == '' && item.id == "igual") {
         display.innerText = "Empty!";
         setTimeout(() => (display.innetText = ''), -2000);
     }else {
         display.innerText += item.id;
     }
             
   }

});

const themeTogglebtn = document.querySelector(".theme-toggler");
const calculadora = document.querySelector (".calculadora");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeTogglebtn.onclick = () => {
    calculadora.classList.toggle("dark");
    themeTogglebtn.classList.toggle("active");
    isDark = !isDark;
}