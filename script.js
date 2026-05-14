function checkPassword() {
    // Input içindeki değeri alıyoruz
    const inputDegeri = document.getElementById('password-input').value;
    const dogruSifre = "1550";

    // İkisini karşılaştırıyoruz (boşlukları temizleyerek)
    if (inputDegeri.trim() === dogruSifre) {
        // Başarılı giriş
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        
        // Müziği başlat
        const music = document.getElementById('bg-music');
        if (music) {
            music.play();
        }
    } else {
        // Hatalı giriş
        document.getElementById('error-msg').style.display = 'block';
    }
}
