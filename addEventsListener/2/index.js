var searchInput = document.getElementById('search');
var searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', search);

searchInput.addEventListener('keyup', checkPolitcorectnost);

function search(){
    alert('we want to find this: ' + searchInput.value);
}

function checkPolitcorectnost(){
    if(searchInput.value === '100'){
        // alert('Bad number');
        searchInput.className = 'error-input';
    }
    else {
        searchInput.className = 'search';
    }
}