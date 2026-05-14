function checkPassword() {
    const inputDegeri = document.getElementById('password-input').value;
    const dogruSifre = "1550";

    if (inputDegeri.trim() === dogruSifre) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        
        // Müzik başlatma
        const music = document.getElementById('bg-music');
        if (music) music.play();
        
        // Slaytı başlatma
        changeBackground(); 
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

// 2. FOTOĞRAF VE SLAYT KODLARIN (Burası olduğu gibi kalsın)
const images = [
    'foto1.png',
    'foto2.png',
    'foto3.png',
    'foto4.png'
];

let currentIndex = 0;
const slider = document.getElementById('background-slider');

function changeBackground() {
    if(slider) {
        slider.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }
}

// Fotoğrafların 5 saniyede bir dönmesi için
setInterval(changeBackground, 5000);
