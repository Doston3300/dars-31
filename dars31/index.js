 const form = document.getElementById("form")
 const input_num = document.getElementById("num");
 const outputEl = document.getElementById("output")

 form.addEventListener("submit", (e) => {
     e.preventDefault();
     const num = Number(input_num.value)

     switch (num) {
         case 1:
             outputEl.textContent = "Dushanba"
             console.log()
             break;

         case 2:
             outputEl.textContent = "Seshanba"
             console.log()
             break;
         case 3:
             outputEl.textContent = "Chorshanba"
             console.log()
             break;

         case 4:
             outputEl.textContent = "Payshanba"
             console.log()
             break;

         case 5:
             outputEl.textContent = "Juma"
             console.log()
             break;

         case 6:
             outputEl.textContent = "Shanba"
             console.log()
             break;

         case 7:
             outputEl.textContent = "Yakshanba"
             console.log()
             break;

         default:
             console.log("1 va 7 oraligi'da son kiriting!")
             break;
     }
 })