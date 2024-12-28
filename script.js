document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const headerText = document.querySelector('.header h1');
    
    logo.style.opacity = 0;
    headerText.style.opacity = 0;
    
    setTimeout(() => {
        logo.style.transition = 'opacity 2s';
        logo.style.opacity = 1;
    }, 100);
    
    setTimeout(() => {
        headerText.style.transition = 'opacity 2s';
        headerText.style.opacity = 1;
    }, 500);
    
    logo.addEventListener('click', () => {
        logo.classList.toggle('active');
    });
});