document.querySelectorAll('.carousel-progress-bars').forEach(calculateIndexValue);
document.addEventListener('click', e => {
    let handle;
    if(e.target.matches('.carousel-btn')) {
        handle = e.target;
    } else {
        handle = e.target.closest('.carousel-btn');
    }
    if(handle != null) handleFunction(handle);
});

function calculateIndexValue(progressBar) {
    progressBar.innerHTML = "";
    const carousel = progressBar.closest('.container').querySelector('.carousel-items');
    // console.log(carousel);
    const itemsPerScreen = parseInt(getComputedStyle(carousel).getPropertyValue('--items-per-screen'));
    let carouselLength = parseInt(carousel.childElementCount);
    let indexValue = parseInt(Math.ceil(carouselLength / itemsPerScreen));
    const carouselIndex = parseInt(getComputedStyle(carousel).getPropertyValue('--carousel-index'));
    for (let i = 0; i < indexValue; i++) {
        const progressBarItem = document.createElement('div');
        progressBarItem.classList.add('carousel-progress-bar');

        if(i === carouselIndex) {
            progressBarItem.classList.add('active')
        }

        progressBar.append(progressBarItem);
    }
}



const handleFunction = (handle) => {
    const carousel = handle.closest('.container').querySelector('.carousel-items');
    const carouselIndex = parseInt(getComputedStyle(carousel).getPropertyValue('--carousel-index'));
    const progressBar = handle.closest('.container').querySelectorAll('.carousel-progress-bar');
    const itemsPerScreen = parseInt(getComputedStyle(carousel).getPropertyValue('--items-per-screen'));
    let carouselLength = parseInt(carousel.childElementCount);
    let indexValue = parseInt(Math.ceil(carouselLength / itemsPerScreen));
    // console.log('Progressbar:', progressBar);
    if(handle.classList.contains('left-btn')) {
        if(carouselIndex === 0) {
            carousel.style.setProperty('--carousel-index', (indexValue - 1));
            progressBar[indexValue - 1].classList.add('active');
            progressBar[0].classList.remove('active');
        } else {
            carousel.style.setProperty('--carousel-index', carouselIndex - 1);
            progressBar[carouselIndex].classList.remove('active');
            progressBar[carouselIndex - 1].classList.add('active');
        }
        
    } 
    
    if(handle.classList.contains('right-btn')) {
        if(carouselIndex === (indexValue - 1)) {
            carousel.style.setProperty('--carousel-index', 0);
            progressBar[0].classList.add('active');
            progressBar[indexValue - 1].classList.remove('active');
        } else {
            carousel.style.setProperty('--carousel-index', carouselIndex + 1);
            progressBar[carouselIndex].classList.remove('active');
            progressBar[carouselIndex + 1].classList.add('active');
        }
    }
    // console.log(handle);
}






