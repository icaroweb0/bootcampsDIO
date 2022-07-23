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
        document.body.style.color = ''; 
        document.querySelectorAll('button')[0].style.backgroundColor = '';
        document.querySelectorAll('button')[1].style.backgroundColor = '';
}

//get Text value and submited action
document.getElementById('addBtn').onclick = function addItems (atividade) {
    var atividade = document.getElementById('myText').value
    return atividade
}

//add text value to a new html element

document.getElementById('addBtn').onclick = function addActivityi() {
    let atividadeAtual = document.querySelector('.checklist').innerHTML;
    let inputText = document.querySelector('.checklist').innerHTML = '<div class="checkItem">'+'<input type="checkbox" id="atividade1">' + '<label for="atividade1">Atividade 2</label>'+'</div>'
    let atividadeNova = atividadeAtual + inputText
    document.querySelector('.checklist').innerHTML = atividadeNova
}
/* document.querySelector('.checklist').innerHTML = '<input type="checkbox" id="atividade1">' + '<label for="atividade1">Atividade 1</label>' */

//checked overline
document.getElementById('atividade1').onclick = function check() {
    if (document.getElementById('atividade1').checked){
        var textDecoration = document.querySelector('.checkItem label');
            textDecoration.style.textDecoration = 'line-through'
    } else {
        var textDecoration = document.querySelector('.checkItem label')
            textDecoration.style.textDecoration = ''
    }
}