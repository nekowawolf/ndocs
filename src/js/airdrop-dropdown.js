const dropdownButton = document.getElementById('hs-dropdown-default');
const dropdownMenu = document.querySelector('.hs-dropdown-menu');
const arrow = document.getElementById('dropdown-arrow');
const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('hidden');
    dropdownMenu.classList.toggle('opacity-0');
    dropdownMenu.classList.toggle('hs-dropdown-open:opacity-100');
    
    arrow.classList.toggle('rotate-180');
});


dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
        dropdownMenu.classList.add('hidden');
        dropdownMenu.classList.add('opacity-0');
        dropdownMenu.classList.remove('hs-dropdown-open:opacity-100');
        
        arrow.classList.remove('rotate-180');
    });
});


window.addEventListener('click', function(event) {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
        dropdownMenu.classList.add('opacity-0');
        dropdownMenu.classList.remove('hs-dropdown-open:opacity-100');
        
        arrow.classList.remove('rotate-180');
    }
});
