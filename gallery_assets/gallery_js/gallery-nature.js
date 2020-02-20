//Convert HTML collection of all the masonry items into an array
const items = Array.from(document.getElementsByClassName('masonry-item'));

//Create div that will contain lightbox
const lightbox = document.createElement('div');

//Give the lightbox div an id
lightbox.id = 'lightbox';
lightbox.tabIndex = -1;

//Appends the lightbox div to the body element 
document.body.appendChild(lightbox);


//Iterate through each of the masonry items in the array
items.forEach((item) => {

  //Grab the firstElementChild property for each item and store in the img constant
  const img = item.firstElementChild;

  //Attach click event to each masonry item
  item.addEventListener('click', (event) => {

    //Add the active class defined in the CSS to the lightbox div
    lightbox.classList.add('active');
    const image = document.createElement('img');    
    image.src = img.src;
    image.tabIndex = -1;

    //Remove existing image if present before appending new image
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

lightbox.addEventListener('keydown', (event) => {
  console.log(event.keyCode);

  // If ESC key is pressed window closes
  if(event.keyCode === 27) {
    lightbox.classList.remove('active');
  }

  //left arrow pressed
  else if(event.keyCode === 37){
    console.log("left arrow pressed!");

  }

  else if(event.keyCode === 39) {
    console.log("right arrow pressed");
  }
});







console.log(items);