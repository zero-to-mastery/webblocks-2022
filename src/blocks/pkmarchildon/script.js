const images = [
  './images/image1.jpeg',
  './images/image2.jpeg',
  './images/image3.jpeg',
  './images/image4.jpeg',
  './images/image5.jpeg',
  './images/image6.jpeg'
];
let focusedIndex = 0;
let leftImage = document.getElementById('left-img');
let centerImage = document.getElementById('center-img');
let rightImage = document.getElementById('right-img');
let previousButton = document.getElementById('previous-button');
let nextButton = document.getElementById('next-button');

function previousImage() {
  if (focusedIndex > 0) {
    focusedIndex--;
    displayImages();
  }
}

function nextImage() {
  if (focusedIndex < images.length - 1) {
    focusedIndex++;
    displayImages();
  }
}

function displayImages() {
  if (focusedIndex === 0) {
    // Displaying first image.
    centerImage.setAttribute('src', images[0]);
    rightImage.setAttribute('src', images[1]);
    leftImage.setAttribute('src', '');

    previousButton.setAttribute('disabled', 'true');
  } else if (focusedIndex === images.length - 1) {
    // Displaying last image.
    leftImage.setAttribute('src', images[focusedIndex - 1]);
    centerImage.setAttribute('src', images[focusedIndex]);
    rightImage.setAttribute('src', '');

    nextButton.setAttribute('disabled', 'true');
  } else {
    leftImage.setAttribute('src', images[focusedIndex - 1]);
    centerImage.setAttribute('src', images[focusedIndex]);
    rightImage.setAttribute('src', images[focusedIndex + 1]);

    previousButton.removeAttribute('disabled');
    nextButton.removeAttribute('disabled');
  }
}

displayImages();
