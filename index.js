const discription = document.getElementById("discription")
const numberInput = document.getElementById("namba")
const satartButton = document.getElementById("satart-button")
const resetButton = document.getElementById("reset-button")
const attempt = document.getElementById("attempt")

let attempts = 3

satartButton.addEventListener("click", function(){
  
  
    if(numberInput.value===""){
         return false
      }
    
     
 let randomVariable = Math.floor(Math.random()*20)+1
   let numberFunctio =  Number(numberInput.value)
        numberInput.value = ""
 
      if(isNaN(numberFunctio)){
         discription.innerHTML= "andika namba"
          discription.style.fontSize ="30px"
         return false
      }
   
  
      
   if(randomVariable===numberFunctio){
      discription.innerHTML=   "you won"
      return false;
   }else if(numberFunctio > randomVariable){
      discription.innerHTML = "to haigh"
   }else{
      discription.innerHTML ="to lower" 
   }
     discription.style.color = "red"
   discription.style.fontSize ="30px"
    
   attempts--
   attempt.textContent = `attemps remening:${attempts}`
   if(attempts <= 0){
      discription.innerHTML ="geme is over  reset game"
         return false
      }

      
})

resetButton.addEventListener("click", function(){

    
    discription.innerHTML =
    `do you want to play again?:<br>
   <div id="btn">
      <button id="yes-button">yes</button>
      <button id="no-button">no</button><br>
    </div>`
   discription.style.color = "red"
   discription.style.fontSize ="30px"
  
   const yesButton = document.getElementById("yes-button")
   const noButton = document.getElementById("no-button")

   yesButton.addEventListener("click", function(){
   discription.innerHTML =`
   welcome to LUCK game.`
   
   
    
   
})
   
   noButton.addEventListener("click", function(){
   discription.innerHTML=`
   ok thanks for comming💨
     `
     
})
  numberInput.value = "";
  attempt.textContent = `attemps remening:${attempts}`
 
})







