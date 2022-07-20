var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0

function increment() {
    currentNumber++
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber;
}


// >>>> DARK THEME <<<<

//changes Icon To Sun
function switchToSun() {
let icon = document.getElementById('theme');
    icon.innerHTML = '<i class="fas fa-moon dark" onclick="switchToMoon()"></i>';
    document.body.style.color = 'rgb(26, 58, 75)' 
    document.body.style.backgroundColor = 'white';
}

//changes Icon To Moon
function switchToMoon() {
    let icon = document.getElementById('theme');
        icon.innerHTML = '<i class="fas fa-sun light" onclick="switchToSun()"></i>';
        document.body.style.backgroundColor = '';
        document.body.style.color = '' 

    }
