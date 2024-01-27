
const body = document.querySelector("body")
const switchMode = document.querySelector('.switchmode');

function myFunction(){
      switchMode.addEventListener("click",() =>{
          body.classList.toggle("dark");
      })
    }