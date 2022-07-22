var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0

function increment() {
    
    if (currentNumber<10) {
        currentNumber++
        currentNumberWrapper.innerHTML = currentNumber;
        if (currentNumber < 0) {
            document.querySelectorAll('span')[0].style.color = 'red';
        } else {
            document.querySelectorAll('span')[0].style.color = ''
        }
    }
    
}

function decrement() {


    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        document.querySelectorAll('span')[0].style.color = 'red';
    } else {
        document.querySelectorAll('span')[0].style.color = ''
    }
    
}



// >>>> DARK THEME <<<<

//changes Icon To Sun
function switchToSun() {
let icon = document.getElementById('theme');
    icon.innerHTML = '<i class="fas fa-moon dark" onclick="switchToMoon()"></i>';
    document.body.style.color = 'rgb(26, 58, 75)' 
    document.body.style.backgroundColor = 'white';
    document.querySelectorAll('button')[0].style.backgroundColor = 'white';
    document.querySelectorAll('button')[1].style.backgroundColor = 'white';
}

//changes Icon To Moon
function switchToMoon() {
    let icon = document.getElementById('theme');
        icon.innerHTML = '<i class="fas fa-sun light" onclick="switchToSun()"></i>';
        document.body.style.backgroundColor = '';
        document.body.style.color = '' 
        document.querySelectorAll('button')[0].style.backgroundColor = '';
        document.querySelectorAll('button')[1].style.backgroundColor = '';
}
