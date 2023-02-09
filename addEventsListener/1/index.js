function addErrorClass(elementId){
    var element = document.getElementById(elementId);
    element.className = 'error-input';
}

var firstNameId = 'first-name';
var lastNameId = 'last-name';
var addressNameId = 'address';

function addErrorClassToAllInputs(){
    addErrorClass(firstNameId);
    addErrorClass(lastNameId);
    addErrorClass(addressNameId);

}

// addErrorClassToAllInputs();

// window.setTimeout(addErrorClassToAllInputs, 2000);

var sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', onSendButtonClick);

function onSendButtonClick(){
    addErrorClass('first-name');
}

function onLastNameKeyup(){
    addErrorClass('last-name');
}

var lastNameEl = document.getElementById(lastNameId);
lastNameEl.addEventListener('keyup', onLastNameKeyup);