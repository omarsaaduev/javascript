var prevBtn = document.getElementById('slider-prev');
var nextBtn = document.getElementById('slider-next');
var showImg = document.getElementById('show-img');

prevBtn.addEventListener('click',onPrevBtnClick);
nextBtn.addEventListener('click',onNextBtnClick);

var imageUrls=[];
imageUrls.push('https://avatars.mds.yandex.net/i?id=31e9c3198879380e162d9c64d7fbc2e01df3eb73-8360281-images-thumbs&n=13');
imageUrls.push('https://avatars.mds.yandex.net/i?id=6b710167c3376c77b58c46888bd2a3ca72212c57-7998976-images-thumbs&n=13');
imageUrls.push('https://avatars.mds.yandex.net/i?id=8cbb949a760c667642218e516d47599bf81816ed-8310482-images-thumbs&n=13');
imageUrls.push('https://avatars.mds.yandex.net/i?id=5f9f7de449ab8ec34d0ce25ab43e57c392eb61c5-8185042-images-thumbs&n=13');

var currentImgIndex = 0;

showImg.src = imageUrls[currentImgIndex];
prevBtn.disabled =true;



function onPrevBtnClick(){
    currentImgIndex--;
    showImg.src = imageUrls[currentImgIndex];
    nextBtn.disabled = false;

    if(currentImgIndex === 0){
        prevBtn.disabled =true;
    }
}

function onNextBtnClick(){
    currentImgIndex++;
    showImg.src = imageUrls[currentImgIndex];
    prevBtn.disabled = false;

    if(currentImgIndex === (imageUrls.length - 1) ){
        nextBtn.disabled = true;
    }
    
}