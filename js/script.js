/* Gallery slider */

/* Var 1 - with loop 

let photos = document.querySelectorAll('.gallery__photo');
let photoActive = document.querySelector('.gallery__photo_active');

for (let i = 0; i < photos.length; i++) {
    photos[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        photoActive.src = photos[i].src;});
};

*/

/* Var 2 - with delegation */

let photos = document.getElementById('photos');

photos.onclick = function(event) {
    let photo = event.target.closest('img');

    if (!photo) return;
    showPhoto(photo.src, photo.alt);
    event.preventDefault();
}

function showPhoto(src, alt) {
    largePhoto.src = src;
        largePhoto.alt = alt;
}