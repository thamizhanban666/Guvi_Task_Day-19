function CheckBoxCount() {
   let inputList = document.getElementsByName("food");
   let numChecked = 0;

   for (let i = 0; i < inputList.length; i++) {
      if (inputList[i].checked) {
            numChecked = numChecked + 1;
      }
   }
   if (numChecked < 2) {
      alert("Select atleast two foods");
      return false;
   }  
   return true;
}

let form = document.getElementById("form")
let btn = document.getElementById("submit");

btn.addEventListener("click", () => {

   if (CheckBoxCount()) {

      let tbody = document.getElementById("tbody")
      let tr = document.createElement("tr");
      tbody.appendChild(tr);
   
      let td1 = document.createElement("td");
      tr.appendChild(td1)
      let fName = document.getElementById("first-name");
      td1.innerText = fName.value;

      let td2 = document.createElement("td");
      tr.appendChild(td2)
      let lName = document.getElementById("last-name");
      td2.innerText = lName.value;

      let td3 = document.createElement("td");
      tr.appendChild(td3)
      let address = document.getElementById("address");
      td3.innerText = address.value;

      let td4 = document.createElement("td");
      tr.appendChild(td4)
      let pincode = document.getElementById("pincode");
      td4.innerText = pincode.value;

      let td5 = document.createElement("td");
      tr.appendChild(td5)
      let state = document.getElementById("state");
      td5.innerText = state.value;

      let td6 = document.createElement("td");
      tr.appendChild(td6)
      let country = document.getElementById("country");
      td6.innerText = country.value;

      let td7 = document.createElement("td");
      tr.appendChild(td7)
      let gender = document.getElementsByName("gender");
      for (let i = 0; i <= 1; i++) {
         if (gender[i].checked) {
            td7.innerText = gender[i].value;
         }
      }

      let foodArray = [];
      let td8 = document.createElement("td");
      tr.appendChild(td8)
      let food = document.getElementsByName("food");
      for (let i = 0; i <= 4; i++) {
         if (food[i].checked) {
            foodArray.push(food[i].value)
         }
      }
      td8.innerHTML = foodArray.join("<br>");
 
      form.reset();
   }      
})