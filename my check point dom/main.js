/*const whiteHeart = '\u2661';
const RedHeart = '\u2764';
const button = document.getElementById('favoris');
button.addEventListener('click', toggle);
function toggle() {
  const like = button.textContent;
  if (like == whiteHeart) {
    button.textContent = RedHeart;
    
  } else {
    button.textContent = whiteHeart;
  }
}*/

const whiteHeart = '\u2661';
const RedHeart = '\u2764';


const buttons = document.querySelectorAll('.favoris');
 
for (let i = 0; i < buttons.length; i++) {
  const element = buttons[i];
  buttons[i].addEventListener('click',() => {
    const like = buttons[i].textContent;
    if (like == whiteHeart) {
      buttons[i].textContent = RedHeart;
      
    } else {
      buttons[i].textContent = whiteHeart;
    }

  });
}













// Deelete Item 

const deleteItembutton = document.getElementsByClassName('delete');
console.log(deleteItembutton)

for (let i = 0; i < deleteItembutton.length; i++) {


 deleteItembutton[i].addEventListener('click', function (event) {
  var  clickedbutt= event.target
clickedbutt.parentElement.remove()

 })


}






/*const calculateSumbutton = document.getElementById('totale');


function calculateSum() {

  const userQuantiyElement = document.getElementsByClassName('user-number');
  const enteredNumber = userQuantiyElement.value;
  const productPrice = document.getElementsByClassName('price');
  const productPricef = productPrice.innerHTML;


  let Sum = 0;

  Sum = (enteredNumber * productPricef);

  document.getElementById('calculated-Sum').textContent = Sum + '   dinars sans reduction ';
  if (Sum > 200) {
    Sum2 = (Sum - 50);



    document.getElementById('calculated-Sum').textContent = Sum2 + "    dinars apres reduction de 50DT ";

  }
}



calculateSumbutton.addEventListener('click', calculateSum); */


//const calculateSumbutton = document.getElementById('totale');
//console.log(calculateSumbutton)
//const userQuantiyElement=document.querySelectorAll

const calculateSumbutton = document.getElementById('totale');


function updateTotal() {
  
  const prices = document.getElementsByClassName("price");
  const entredNumber = document.getElementsByClassName("user-number");

  let total = 0;
  for (i = 0; i < prices.length; i++)   {
   
    
    total+= (prices[i].innerHTML) * (entredNumber[i].value);
  }
  document.getElementById('calculated-Sum').textContent = "the sum is " + total ; 
  
  console.log(total);
}

calculateSumbutton.addEventListener('click', updateTotal); 
 
