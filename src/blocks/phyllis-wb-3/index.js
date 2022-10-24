const photoContainer = document.getElementById('img-container');
const photo = document.getElementById('img-1');

const carousel = () => {
  const photos = [
    {
      author: 'Melanie Dretvic on Unsplash',
      location: 'Unsplash',
      src: './assets/melanie-dretvic-wblqwJnjepI-unsplash.jpg',
      alt: 'Mount Cook at sunset',
      id: 'img-1',
      class: 'photo',
    },
    {
      author: 'David Billings on Unsplash',
      location: 'Unsplash',
      src: './assets/david-billings-85rGc_g6b4E-unsplash.jpg',
      alt: 'Mount Cook in snow',
      id: 'img-2',
      class: 'photo',
    },
    {
      author: 'Peter Burdon',
      location: 'Unsplash',
      src: './assets/peter-burdon-jGfZSSnoOHU-unsplash.jpg',
      alt: 'Mount Cook in the distance',
      id: 'img-3',
      class: 'photo',
    },
  ];

  const addAttributes = (index) => {
    img.setAttribute('src', photos[index].src);
    img.setAttribute('alt', photos[index].alt);
    img.setAttribute('id', photos[index].id);
    img.setAttribute('class', photos[index].class);
  };

  const img = document.createElement('img');
  let currImgIndex = 0;

  const changePhoto = () => {
    const photoCollection = document.getElementsByClassName('photo');

    if (currImgIndex < photos.length-1) {
      currImgIndex += 1;
    } else currImgIndex = 0;

    addAttributes(currImgIndex);
    photoContainer.removeChild(photoCollection[0]);
    photoContainer.prepend(img);
  }

  photo.addEventListener('click', function() {
    changePhoto();
  });

  img.addEventListener('click', function() {
    changePhoto();
  })

};

window.onload = carousel;
