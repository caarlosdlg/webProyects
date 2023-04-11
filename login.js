form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = form.elements.username.value;
    const password = form.elements.password.value;

    // Validar credenciales
    if (username === 'admin' && password === 'admin') {
        redirectToIndex(); // Redireccionar al usuario a la página index.html
    } else {
        // Mostrar mensaje de error de autenticación
    }

    // Activar el efecto de desenfoque del fondo
    bgOverlay.classList.add('active');
});


function updateBackground() {
    const time = new Date().getTime();
    const x = Math.sin(time / 10000) * 10;
    const y = Math.cos(time / 15000) * 10;
    document.body.style.backgroundPosition = `${x}px ${y}px`;
}

setInterval(updateBackground, 50);
