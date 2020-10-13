var images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function loadImages() {
    var container = document.getElementById('imageContainer');
    for (let i = 0; i < images.length; i++) {
        const element = images[i];
        const elRef = container.children[i].children[0].children[0].children[0];
        elRef.setAttribute('style', 'transition: opacity 2s ease;opacity : 0;');
        setTimeout(() => {
            elRef.setAttribute('style', 'transition: opacity 2s ease-in; opacity : 1;');
            elRef.setAttribute('src', 'images/image' + (element) + '.jpg')
        }, 1000);
    }
}

loadImages();

function shuffleImages() {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    loadImages();
}