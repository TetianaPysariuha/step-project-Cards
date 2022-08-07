import Card from "./classes/card.js";
import createCard from "./classes/createcard.js";
import Login from "./classes/login.js";
import createLogin from "./functions/createLogin.js";



const loginBtn = document.querySelector('.login_btn')
/*function createCards(){
new createCard().render('.container')
    
}

function createLogin(){


   const login = new Login()

 // loginBtn.removeEventListener('click',createLogin)
login.render('.container')

login.submitLogin() 

//loginBtn.addEventListener('click',createCards)
}
*/
loginBtn.addEventListener('click', createLogin)



const urgencySelect = document.querySelector('.visit_select')




if(localStorage.getItem('token')){

  const logOutBtn = document.createElement('button')
  logOutBtn.innerHTML = 'Выйти'
  logOutBtn.classList.add('logout_btn')
  const header = document.querySelector('header')
  header.append(logOutBtn)
logOutBtn.addEventListener('click',() =>{

  localStorage.clear()
  document.location.reload()
 
})
    renderCardsAfterReload()
}



 
//const logOutBtn = document.querySelector('.logout_btn')

