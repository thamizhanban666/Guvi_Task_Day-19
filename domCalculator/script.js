// h1 tag with id "title"
let h1 = document.createElement("h1"); 
h1.classList.add("mb-5")  
h1.setAttribute("id", "title");
h1.innerText = "Dom Calculator";
document.body.appendChild(h1);

// div tag for the outer structure of the calculator
let outerDiv = document.createElement("div");   
outerDiv.classList.add("outer-div", "position-relative", "d-flex", "flex-column", "align-items-center", "border", "border-1", "border-dark");
document.body.appendChild(outerDiv);

// div tag for the display of the calculator inside the outerDiv
let displayDiv = document.createElement("div");   
displayDiv.classList.add("display", "w-100", "m-2");
outerDiv.appendChild(displayDiv);

// div tag to display the history inside the displayDiv
let historyDiv = document.createElement("div");  
historyDiv.setAttribute("id", "history");
historyDiv.classList.add("w-100", "h-50", "border", "border-0", "rounded-top");
displayDiv.appendChild(historyDiv);

// div tag to display the result with id "result" inside the displayDiv
let resultInput = document.createElement("input");
resultInput.setAttribute("type", "text");
resultInput.setAttribute("id", "result");
resultInput.setAttribute("placeholder", "0");
resultInput.setAttribute("onkeypress", "keyPress()");
resultInput.classList.add("w-100", "h-75", "position-relative", "border", "border-0", "rounded-bottom");
displayDiv.appendChild(resultInput);

// div tag for all the buttons inside the outerDiv of the calculator named as innerDiv
let innerDiv = document.createElement("div");
innerDiv.classList.add("inner-div", "border", "border-1", "border-dark", "px-1", "m-2", "mt-4");
outerDiv.appendChild(innerDiv);

// div tag as div1 for the buttons[C, (), %, /]
let div1 = document.createElement("div");
div1.classList.add("buttons");
innerDiv.appendChild(div1);

// button tag for clear(C)
let btnClear = document.createElement("button");
btnClear.setAttribute("id", "clear");
btnClear.innerText = "C";
div1.appendChild(btnClear);
//button tag for braces( () )
let btnBraces = document.createElement("button");
btnBraces.setAttribute("id", "braces");
btnBraces.setAttribute("name", "generalBtn");
btnBraces.innerText = "()";
div1.appendChild(btnBraces);
//button tag for modulus(%)
let btnModulus = document.createElement("button");
btnModulus.setAttribute("id", "modulus");
btnModulus.setAttribute("name", "generalBtn");
btnModulus.value = "%";
btnModulus.innerText = "%";
div1.appendChild(btnModulus);
//button tag for division(/)
let btnDivide = document.createElement("button");
btnDivide.setAttribute("id", "divide");
btnDivide.setAttribute("name", "generalBtn");
btnDivide.value = "/";
btnDivide.innerHTML= `<i class="fa-solid fa-divide"></i>`
div1.appendChild(btnDivide);

// div tag as div1 for the buttons[7, 8, 9, *]
let div2 = document.createElement("div");
div2.classList.add("buttons");
innerDiv.appendChild(div2);

//button tag for 7
let btn7 = document.createElement("button");
btn7.setAttribute("id", "7");
btn7.setAttribute("name", "generalBtn");
btn7.value = "7";
btn7.innerText = "7";
div2.appendChild(btn7);
//button tag for 8
let btn8 = document.createElement("button");
btn8.setAttribute("id", "8");
btn8.setAttribute("name", "generalBtn");
btn8.value = "8";
btn8.innerText = "8";
div2.appendChild(btn8);
//button tag for 9
let btn9 = document.createElement("button");
btn9.setAttribute("id", "9");
btn9.setAttribute("name", "generalBtn");
btn9.value = "9";
btn9.innerText = "9";
div2.appendChild(btn9);
//button tag for multiply(*)
let btnMultiply = document.createElement("button");
btnMultiply.setAttribute("id", "multiply");
btnMultiply.setAttribute("name", "generalBtn");
btnMultiply.value = "*";
btnMultiply.innerHTML= `<i class="fa-solid fa-xmark"></i>`
div2.appendChild(btnMultiply);

// div tag as div1 for the buttons[4, 5, 6, -]
let div3 = document.createElement("div");
div3.classList.add("buttons");
innerDiv.appendChild(div3);

//button tag for 4
let btn4 = document.createElement("button");
btn4.setAttribute("id", "4");
btn4.setAttribute("name", "generalBtn");
btn4.value = "4";
btn4.innerText = "4";
div3.appendChild(btn4);
//button tag for 5
let btn5 = document.createElement("button");
btn5.setAttribute("id", "5");
btn5.setAttribute("name", "generalBtn");
btn5.value = "5";
btn5.innerText = "5";
div3.appendChild(btn5);
//button tag for 6
let btn6 = document.createElement("button");
btn6.setAttribute("id", "6");
btn6.setAttribute("name", "generalBtn");
btn6.value = "6";
btn6.innerText = "6";
div3.appendChild(btn6);
//button tag to subtract(-)
let btnSubtract = document.createElement("button");
btnSubtract.setAttribute("id", "subtract");
btnSubtract.setAttribute("name", "generalBtn");
btnSubtract.value = "-";
btnSubtract.innerText="-"
div3.appendChild(btnSubtract);

// div tag as div1 for the buttons[1, 2, 3, +]
let div4 = document.createElement("div");
div4.classList.add("buttons");
innerDiv.appendChild(div4);

//button tag for 1
let btn1 = document.createElement("button");
btn1.setAttribute("id", "1");
btn1.setAttribute("name", "generalBtn");
btn1.value = "1";
btn1.innerText = "1";
div4.appendChild(btn1);

//button tag for 2
let btn2 = document.createElement("button");
btn2.setAttribute("id", "2");
btn2.setAttribute("name", "generalBtn");
btn2.value = "2";
btn2.innerText = "2";
div4.appendChild(btn2);

//button tag for 3
let btn3 = document.createElement("button");
btn3.setAttribute("id", "3");
btn3.setAttribute("name", "generalBtn");
btn3.value = "3";
btn3.innerText = "3";
div4.appendChild(btn3);

//button tag to Add(+)
let btnAdd = document.createElement("button");
btnAdd.setAttribute("id", "add");
btnAdd.setAttribute("name", "generalBtn");
btnAdd.value = "+";
btnAdd.innerText="+"
div4.appendChild(btnAdd);

// div tag as div1 for the buttons[0, dot, back, equal]
let div5 = document.createElement("div");
div5.classList.add("buttons");
innerDiv.appendChild(div5);

//button tag for 0
let btn0 = document.createElement("button");
btn0.setAttribute("id", "0");
btn0.setAttribute("name", "generalBtn");
btn0.value = "0";
btn0.innerText = "0";
div5.appendChild(btn0);
//button tag for dot(.)
let btnDot = document.createElement("button");
btnDot.setAttribute("id", "dot");
btnDot.setAttribute("name", "generalBtn");
btnDot.value = ".";
btnDot.innerText = ".";
div5.appendChild(btnDot);
//button tag for back
let btnBack = document.createElement("button");
btnBack.setAttribute("id", "back");
btnBack.innerHTML = `<i class="fa-solid fa-delete-left"></i>`
div5.appendChild(btnBack);
//button tag to equal(=) with id "equal"
let btnEqual = document.createElement("button");
btnEqual.setAttribute("id", "equal");
btnEqual.classList.add("rounded-pill");
btnEqual.innerText = "=";
div5.appendChild(btnEqual);

// p tag with id "description" for the short description of the calculator
let p = document.createElement("p");
p.classList.add("m-5", "p-5", "border", "border-2", "border-primary")
p.setAttribute("id", "description");
p.innerText = "This is a calculator with all basic arithmetic operations like add, subtract, multiplication, division and other extra features like braces and modulus. Use the Clear (C) button or Back button to clear or edit the operations. Use only numbers or operations given in calculator other than that will not work properly. Braces button is designed dynamically to open or close the brace automatically according to the input you are given. ";
document.body.appendChild(p);


// Functions and click events for the calculor :

let generalBtn = document.getElementsByName("generalBtn");

let resultText = "";

// click event for all the number and arithmetic symbols
generalBtn.forEach((btn) => {
   btn.addEventListener("click", () => {
      let text = btn.value;
      resultText += text;
      resultInput.value = resultText;
   })
})

// click event for the button equal(=)
btnEqual.addEventListener("click", () => {
   historyDiv.innerText = resultInput.value;
   resultInput.value = eval(resultInput.value);
   resultText = eval(resultInput.value);
})

// click event for the button Clear(C)
btnClear.addEventListener("click", () => {
   historyDiv.innerText = "";
   resultInput.value = "";
   resultText = "";
})

// click event for the button Back
btnBack.addEventListener("click", () => {
   let change = resultInput.value.slice(0, resultInput.value.length - 1);
   resultText = change;
   resultInput.value = change;
})

// click event for the button Braces( () )
btnBraces.addEventListener("click", () => {
   function openClose() {
      // for loop to find whether to open or close the brace, if b >=1 then the braces need to be closed else it should be opened
      let b = 0;
      for (let i = 0; i < resultText.length; i++){
         if (resultText[i] == "(") {
            b += 1;
         }
         if (resultText[i] == ")") {
            b -= 1;
         }
      }   
      // if the display is void then braces houl be open
      if (resultText.length == 0) {
         return "(";
      }

      let l = resultText[resultText.length - 1];

      // if the last character is "(" then open the brace again
      if (l == "(") {
         return "(";
      }
      // if b=0 & last character is ")" then open the brace by multiply "*("  
      if (b == 0 && l == ")" ) {
         return "*(";
      }
      // if b=0 & last character is "+" or "*" or "/" or "-" or "%" then simply open the brace
      if (b == 0 && l == "+" || b == 0 && l == "*" || b == 0 && l == "/" || b == 0 && l == "-" || b == 0 && l == "%") {
         return "(";
      }
      // if b=0 then open the brace by multiply "*("  
      if (b == 0) {
         return "*(";
      }
      // b>=1 then already brace(s) are opened so, close the brace
      if(b>=1) {
         return ")";
      }
   }
   resultText = resultText + openClose();
   resultInput.value = resultText;   
})

// function for key board keys click event
let keyPress = () => {
   if (event.charCode >= 48 && event.charCode <= 57 || event.charCode === 46 || event.charCode === 47 || event.charCode >= 40 && event.charCode <= 43 || event.charCode === 45) {
      resultInput.value += key;
   }
   else if (event.key === "Enter") {
      btnEqual.click();
   }
   else {
      alert("Only numbers are allowed");
      event.preventDefault();
   }
}
