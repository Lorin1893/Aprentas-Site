document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('modeToggle');
    
    modeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        localStorage.setItem('darkMode', isDarkMode);
    });

    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
    }
});
