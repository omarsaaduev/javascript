var passwordInput = document.getElementById('password');
var showButton = document.getElementById('show-button');
var wrapperEl = document.getElementById('wrapper');
var bodyEl = document.querySelector('body');


showButton.addEventListener('mousedown', onShowText);
bodyEl.addEventListener('mouseup', onHideText);

var keyPressed = false;

function onShowText(){
        passwordInput.type = 'text';
        showButton.innerHTML = 'Hide';
        keyPressed = true;
}
function onHideText(){
    if(keyPressed = true){
        passwordInput.type = 'password';
        showButton.innerHTML = 'Show';
    }
}

