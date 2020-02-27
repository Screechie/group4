//Convert HTML collection of all the masonry items into an array
const items = Array.from(document.getElementsByClassName('masonry-item'));

//Create div that will contain lightbox
const lightbox = document.createElement('div');

//Give the lightbox div an id
lightbox.id = 'lightbox';
lightbox.tabIndex = -1;//Sets tabindex for focus

//Create Arrows
// Left arrow
let leftArrDiv = document.createElement('div'); 
leftArrDiv.innerHTML = "<span>&lt;</span>";
leftArrDiv.classList.add('left-arrow');

// Right arrow
let rightArrDiv = document.createElement('div');
rightArrDiv.innerHTML = "</span>&gt;</span>";
rightArrDiv.classList.add('right-arrow');

//Appends the lightbox div to the body element(removed and attached to container instead)
// document.body.appendChild(lightbox);

let container = document.getElementById('container'); 
container.insertAdjacentElement('beforeend', lightbox);

//Iterate through each of the masonry items in the array
items.forEach((item) => {

  //Grab the firstElementChild property for each item and store in the img constant
  const img = item.firstElementChild;

  //Attach click event to each masonry item
  item.addEventListener('click', (event) => {

    console.log(event);

    //Add the active class defined in the CSS to the lightbox div
    lightbox.classList.add('active');
    const image = document.createElement('img');    
    image.src = img.src;
    image.classList.add('lightbox-image');
    image.tabIndex = -1;

    //Remove existing image if present before appending new image
    while(lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(image);

    //Append exit message above images (This will be changed to a close icon in future releases)
    let msgDiv = document.createElement('div');
    let msg = document.createTextNode("CLICK OUTSIDE THE IMAGE TO EXIT!");
    msgDiv.appendChild(msg);
    msgDiv.classList.add('msg-container');
    
    // Left arrow
    // let leftArrDiv = document.createElement('div'); 
    // leftArrDiv.innerHTML = "<span>&lt;</span>";
    // leftArrDiv.classList.add('left-arrow');
    
    // Right arrow
    // let rightArrDiv = document.createElement('div');
    // rightArrDiv.innerHTML = "</span>&gt;</span>";
    // rightArrDiv.classList.add('right-arrow');

    // Insert new elements into the DOM
    lightbox.insertBefore(leftArrDiv, image);
    lightbox.insertBefore(msgDiv, leftArrDiv);
    lightbox.appendChild(rightArrDiv);
  });

  console.log(img.src);
  
});

// This code will close the lightbox
lightbox.addEventListener('click', (event) => {
  if(event.target !== event.currentTarget)
    return;

    lightbox.classList.remove('active');
});


// Code for scrolling with keypress
lightbox.addEventListener('keydown', (event) => {
  console.log(items);
  let currentImgSrc = String(event.target.currentSrc);
  let sources = [];

  //Initialize Sources array to get all image sources
  for(let i = 0; i < items.length; i++) {
    sources.push(items[i].children[0].src);
  }

  // If ESC key is pressed window closes
  if(event.keyCode === 27) {
    lightbox.classList.remove('active');
  }

  //left arrow pressed
  else if(event.keyCode === 37){

    let currentSrcIndex = sources.indexOf(currentImgSrc);
    let newSrcIndex = currentSrcIndex - 1;

    //new image with a source one index less than current
    const newImage = document.createElement('img');
    newImage.classList.add('lightbox-image');
    newImage.src = sources[currentSrcIndex - 1];
    

    console.log("Original Image Src: " + currentImgSrc);
    console.log("New Image Src: " + sources[currentSrcIndex - 1]);
    console.log("Source Index: " + currentSrcIndex);
    console.log("New Source Index: " + (currentSrcIndex - 1));

    
    //Ensure the sources array does not go below 0th index
    if(newSrcIndex >= 0) {
      //Update Dom with newImage
      lightbox.replaceChild(newImage, lightbox.childNodes[2]);
      newImage.tabIndex = -1;//Sets tabindex for focus on new images
    }
    else{
      //remove left arrow when at start of array
      let arrow = document.getElementsByClassName('left-arrow');
      lightbox.removeChild(arrow);
      
      if(arrow)
      newSrcIndex = currentSrcIndex;

      //Update DOM with same image
    }
  }
  else if(event.keyCode === 39) {
    console.log(lightbox.childNodes);
    console.log("right arrow pressed");
  }  
});

// Code for clicking on arrows
leftArrDiv.addEventListener('click', (event) => {
  let sources = [];

  //Initialize Sources array to get all image sources
  for(let i = 0; i < items.length; i++) {
    sources.push(items[i].children[0].src);
  }

  let currentImgSrc = String(lightbox.childNodes[2].src);
  console.log("CIS");
  console.log(currentImgSrc);
  let currentSrcIndex = sources.indexOf(currentImgSrc);
  let newSrcIndex = currentSrcIndex - 1;
  

  //new image with a source one index less than current
  const newImage = document.createElement('img');
  newImage.classList.add('lightbox-image');
  newImage.src = sources[currentSrcIndex - 1];

  if(newSrcIndex >= 0) {
    //Update Dom with newImage
    lightbox.replaceChild(newImage, lightbox.childNodes[2]);
    newImage.tabIndex = -1;//Sets tabindex for focus on new images
  }
});

rightArrDiv.addEventListener('click', (event) => {
  let sources = [];

  //Initialize Sources array to get all image sources
  for(let i = 0; i < items.length; i++) {
    sources.push(items[i].children[0].src);
  }

  let currentImgSrc = String(lightbox.childNodes[2].src);
  let currentSrcIndex = sources.indexOf(currentImgSrc);
  let newSrcIndex = currentSrcIndex + 1;
  
  console.log("Original Image Src: " + currentImgSrc);
  console.log("New Image Src: " + sources[currentSrcIndex + 1]);
  console.log("Source Index: " + currentSrcIndex);
  console.log("New Source Index: " + (currentSrcIndex + 1));


  //new image with a source one index less than current
  const newImage = document.createElement('img');
  newImage.classList.add('lightbox-image');
  newImage.src = sources[currentSrcIndex + 1];

  if(newSrcIndex < sources.length) {
    //Update Dom with newImage
    lightbox.replaceChild(newImage, lightbox.childNodes[2]);
    newImage.tabIndex = -1;//Sets tabindex for focus on new images
  }
  
});