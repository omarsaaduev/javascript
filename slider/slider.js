var sliderFactory = {
    
    createNewSlider: function (){
        var newSlider = {
        imageUrls:[],
        currentImgIndex: 0,
    
        prevBtn: null,
        nextBtn: null,
        showImg: null,
        start: function(elId){
            var that = this;
            
            var elSelector = '#' + elId;
            var el = document.querySelector(elSelector);
            this.prevBtn = el.querySelector('.slider-prev');
            this.nextBtn = el.querySelector('.slider-next');
            this.showImg = el.querySelector('.show-img');
    
            this.prevBtn.addEventListener('click', function (e){
                that.onPrevBtnClick(e);
            });
            this.nextBtn.addEventListener('click', function (e){
                that.onNextBtnClick(e);
            });
    
    
            
    
            this.imageUrls.push('https://avatars.mds.yandex.net/i?id=31e9c3198879380e162d9c64d7fbc2e01df3eb73-8360281-images-thumbs&n=13');
            this.imageUrls.push('https://avatars.mds.yandex.net/i?id=6b710167c3376c77b58c46888bd2a3ca72212c57-7998976-images-thumbs&n=13');
            this.imageUrls.push('https://avatars.mds.yandex.net/i?id=8cbb949a760c667642218e516d47599bf81816ed-8310482-images-thumbs&n=13');
            this.imageUrls.push('https://avatars.mds.yandex.net/i?id=5f9f7de449ab8ec34d0ce25ab43e57c392eb61c5-8185042-images-thumbs&n=13');
    
            this.showImg.src = this.imageUrls[this.currentImgIndex];
            this.prevBtn.disabled =true;
        },
        onPrevBtnClick: function (e) {
            this.currentImgIndex--;
            this.showImg.src = this.imageUrls[this.currentImgIndex];
            this.nextBtn.disabled = false;
        
            if(this.currentImgIndex === 0){
                this.prevBtn.disabled =true;
            }
        },
    
        onNextBtnClick: function (){
            this.currentImgIndex++;
            this.showImg.src = this.imageUrls[this.currentImgIndex];
            this.prevBtn.disabled = false;
        
            if(this.currentImgIndex === (this.imageUrls.length - 1) ){
                this.nextBtn.disabled = true;
            }
            
        }
    }
        return newSlider;
    }
};




