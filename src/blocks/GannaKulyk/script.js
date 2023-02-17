window.addEventListener('load', () => {
    window.addEventListener('scroll', () => {
        let scrollValue = window.scrollY;
        let screenWidth = window.outerWidth;
        let contentHeight = document.querySelector('.content').offsetHeight;
        let parallaxHeight = document.querySelector('.parallax').offsetHeight;

        let contentScrollPercent = scrollValue / contentHeight * 100;
        let parallaxScrollPercent = scrollValue / parallaxHeight * 100;
        let opacity = 1 - 1 / 100 * parallaxScrollPercent;

        let fog = document.querySelector('.parallax__fog');
        let fogScale = 1 + (screenWidth / 10000 * parallaxScrollPercent);
        fog.style.transform = `scale(${fogScale})`;
        fog.style.opacity = `${opacity}`;

        let mountain1 = document.querySelector('.parallax__mountain_1');
        let mountain1Scale = 1 + (screenWidth / 5000000 * contentScrollPercent);
        mountain1.style.transform = `scale(${mountain1Scale})`;

        let mountain2 = document.querySelector('.parallax__mountain_2');
        let mountain2Scale = 1 + (screenWidth * 0.000005 * parallaxScrollPercent);
        let mountain2TranslateX = screenWidth / 2000 * parallaxScrollPercent;
        mountain2.style.transform = `translate3d(${mountain2TranslateX}px,0,0) scale(${mountain2Scale})`;

        let mountain3 = document.querySelector('.parallax__mountain_3');
        let mountain3Scale = 1 + (screenWidth * 0.00001 * parallaxScrollPercent);
        let mountain3TranslateX = screenWidth / 1500 * parallaxScrollPercent;
        mountain3.style.transform = `translate3d(${mountain3TranslateX}px,0,0) scale(${mountain3Scale})`;
    })
})