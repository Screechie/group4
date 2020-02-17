let lightbox = document.createElement('div');

lightbox.id = 'lightbox';

// Append lightbox to body of html document
document.body.appendChild(lightbox);

// collect all nature images
const lightboxImages = document.getElementsByClassName('nature-image');

//Lopp t
lightboxImages.forEaach( (img) => {
  img.addEventListener('click', (event) => {
    lightbox.classList.add('active');
    const image =document.createElement('img');
    image.src = img.src;
    lightbox.appendChild(image);
  });
});

console.log(lightboxImages);