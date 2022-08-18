import jpg from './IMG_9660.JPG';

export default function addImage() {
    const img = document.createElement('img');
    img.src = jpg;
    img.height = 300;
    img.width = 300;
    img.alt = 'Ankit Chadokar';
    const body = document.querySelector('body');
    body.appendChild(img);
}