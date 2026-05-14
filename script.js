// Eğer fotoğrafların uzantısı .png veya .jpeg ise burayı ona göre güncellemelisin.
const images = [
    'foto1.png',
    'foto2.png',
    'foto3.png',
    'foto4.png'
];

let currentIndex = 0;
const slider = document.getElementById('background-slider');

function changeBackground() {
    slider.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Sayfa ilk açıldığında birinci fotoğrafı hemen yükle
changeBackground();

// 5000 milisaniye (5 saniye) aralıklarla fotoğrafı değiştir
setInterval(changeBackground, 5000);

document.addEventListener('click', function() {
    const music = document.getElementById('bg-music');
    music.play();
}, { once: true });
