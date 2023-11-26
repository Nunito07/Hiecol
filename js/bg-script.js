document.addEventListener('DOMContentLoaded', function () {
    const backgroundContainer = document.getElementById('bg-container');
    const images = ['bg-1', 'bg-2', 'bg-3', 'bg-4'];
    let currentIndex = 0;

    // Establecer una imagen inicial
    backgroundContainer.style.backgroundImage = 'url("../img/bg-1.jpg")';

    // Cambiar al segundo fondo después de 3 segundos
    setTimeout(function () {
        // Iniciar el cambio de fondo cada 3 segundos
        setInterval(changeBackground, 3000);
    }, 3000);

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        backgroundContainer.style.backgroundImage = `url("../img/${images[currentIndex]}.jpg")`;
    }
});
