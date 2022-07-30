function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    Button.classList.toggle(DarkModeClass);
    H1.classList.toggle(DarkModeClass);
    Body.classList.toggle(DarkModeClass);
    Footer.classList.toggle(DarkModeClass);
}

function changeText(){
    const LightMode = "Light Mode";
    const DarkMode = 'Dark Mode';
    if (Body.classList.contains(DarkModeClass)){
        Button.innerHTML = LightMode;
        H1.innerHTML = `${DarkMode} ON`;
        return;
    }
    Button.innerHTML = DarkMode;
    H1.innerHTML = `${LightMode} ON`;
}

const DarkModeClass = 'dark-mode';
const Button = document.getElementById('mode-selector');
const H1 = document.getElementById('page-title');
const Body = document.getElementsByTagName('body')[0];
const Footer = document.getElementsByTagName('footer')[0];

Button.addEventListener('click', changeMode);

