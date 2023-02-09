function alertValue(elementParametr){
    console.log(elementParametr.value);
    console.log(elementParametr.className);
    
}




        var firstNameId = 'first-name';
        var lastNameId = 'last-name';
        var addressNameId = 'address';
        var citiesId = 'cities';
        var hobbieId = 'hobbie';
        var avatarWrapperId = 'avatar-wrapper';
        var avatarId = 'avatar';

        
        var firstNameEl = document.getElementById(firstNameId);
        var lastNameEl = document.getElementById(lastNameId);
        var addressNameEl = document.getElementById(addressNameId);
        var citiesEL = document.getElementById(citiesId);
        var hobbieEl = document.getElementById(hobbieId);
        var avatarWrapperEl = document.getElementById(avatarWrapperId);
        var avatarEl = document.getElementById(avatarId);

        firstNameEl.value = 'Danarbek';

        alertValue(firstNameEl);
        alertValue(hobbieEl);