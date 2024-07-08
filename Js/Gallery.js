document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = lightbox.querySelector('img');

    gallery.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            lightboxImage.src = event.target.src;
            lightbox.classList.remove('hidden');
        }
    });

    lightbox.addEventListener('click', function() {
        lightbox.classList.add('hidden');
    });
});
