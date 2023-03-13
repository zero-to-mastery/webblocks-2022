let root = document.querySelector(':root');
let button = document.querySelector('button');
let rootStyles = getComputedStyle(root);

function dark() {
    if (rootStyles.getPropertyValue('--page-bkgrd-color') == 'white') {
        root.style.setProperty('--color','white');
        root.style.setProperty('--page-bkgrd-color', 'black');
        button.innerText = "Light";
    } else {
        root.style.setProperty('--color','black');
        root.style.setProperty('--page-bkgrd-color', 'white');
        button.innerText = "Dark";
    }
}