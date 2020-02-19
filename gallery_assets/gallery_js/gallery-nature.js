const items = Array.from(document.getElementsByClassName('masonry-item')); //convert HTML collection to an array
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

items.forEach((item) => {

  const img = item.firstElementChild;

  item.addEventListener('click', (event) => {
    
    lightbox.classList.add('active');
    const image = document.createElement('img');
    image.src = img.src;
    while(lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(image);
  });
  console.log(img.src);
});

// This code will close the lightbox
lightbox.addEventListener('click', (event) => {
  if(event.target !== event.currentTarget)
    return;

    lightbox.classList.remove('active');
});



console.log(items);