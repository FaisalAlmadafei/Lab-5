//done
const addPhoto = document.getElementById('add-photo') ; 
addPhoto.addEventListener('click' , addThePhoto) ; 

// done
function addThePhoto(){
    const photoURL = prompt("Enter the URL of the photo");
    const imgElement = createImgElement(photoURL) ; 
    addPhotoToGallery(imgElement);
    addDeleteButoon(imgElement);





}
//done
function createImgElement(photoURL){
    const imgElement = document.createElement('img') ; 
    imgElement.src = photoURL ; 
    return imgElement ; 

}

function addPhotoToGallery(imgElement){
    const photoGalleryDiv = document.getElementById('photo-gallery');
    photoGalleryDiv.appendChild(imgElement);

}

//delete image element 
function addDeleteButoon(imgElement){
    const deleteButton = document.createElement('button') ; 
    deleteButton.innerText = 'x' ; 
    deleteButton.addEventListener('click' ,  function(){
        imgElement.remove() ; 
        deleteButton.remove() ; 
    });

    const photoGalleryDiv = document.getElementById('photo-gallery');
  photoGalleryDiv.appendChild(deleteButton) ; 

   
}
