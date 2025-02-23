/* Gallery slider */

let photos = document.querySelectorAll('.gallery__photo');
let photoActive = document.querySelector('.gallery__photo_active');

for (let i = 0; i < photos.length; i++) {
    photos[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        photoActive.src = photos[i].src;});
};
