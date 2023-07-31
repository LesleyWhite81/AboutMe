//let button = document.getElementByTagName("button");

//turnButtonBlue = () => {
   // button.style.color = 'blue'
//}

//button.mouseover = turnButtonBlue;






//THIS CODE ONLY WILL FIND THE FIRST BUTTON ELEMENT IN THE DOCUMENT


//event handlers ( they do things when something is triggered)


// DOM elements (to gain access to the DOM)
let button = document.querySelector('button');

//Define function (input is the event listener, output is the turning element a different colour) with event handler
turnButtonGrey = () => {
  button.style.backgroundColor = 'grey';
}

  turnButtonLilac = () => {
    button.style.backgroundColor = 'rgb(219, 219, 230)';
  }



//Event listeners (they listen for certain things like button clicks)
button.onmouseover = turnButtonGrey;
button.onmouseout = turnButtonLilac;

