var currentNumberwrapper = document.getElementById("currentNumber")
var currentNumber= 0;

function aumentar() {
currentNumber = currentNumber + 1;
currentNumberwrapper.innerHTML = currentNumber;

if (currentNumber > 0){
    currentNumberwrapper.style.color = 'black'
}
}

function diminuir() {
    currentNumber = currentNumber - 1;
    currentNumberwrapper.innerHTML = currentNumber;
  
    if (currentNumber < 0){
        currentNumberwrapper.style.color = 'red'
    }
    }
  