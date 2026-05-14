function checkPassword() {
    const password = document.getElementById('password-input').value;
    const correctPassword = "şifre buraya"; // Buraya istediğin şifreyi yaz!

    if (password === correctPassword) {
        // Şifre doğruysa: Giriş ekranını sil, ana içeriği göster ve müziği başlat
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        
        // Müzik çalma komutunu buraya da ekleyebiliriz (tıklama yerine girişle başlar)
        const music = document.getElementById('bg-music');
        if(music) music.play();
        
        // Slaytı başlat (eğer otomatik başlamıyorsa)
        changeBackground(); 
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

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
