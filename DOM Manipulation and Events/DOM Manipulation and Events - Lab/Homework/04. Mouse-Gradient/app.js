function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    
    gradient.addEventListener('mousemove', function() {
        console.log('mouseMove');
    });
}