const dropdownButton = document.getElementById('hs-dropdown-default');
const dropdownMenu = document.querySelector('.hs-dropdown-menu');
const arrow = document.getElementById('dropdown-arrow');

dropdownButton.addEventListener('click', function() {
    // Toggle visibility of dropdown
    dropdownMenu.classList.toggle('hidden');
    dropdownMenu.classList.toggle('opacity-0');
    dropdownMenu.classList.toggle('hs-dropdown-open:opacity-100');
    
    // Toggle rotation of arrow
    arrow.classList.toggle('rotate-180');
});

// Optional: Close the dropdown when clicking outside of it
window.addEventListener('click', function(event) {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
        dropdownMenu.classList.add('opacity-0');
        dropdownMenu.classList.remove('hs-dropdown-open:opacity-100');
        
        // Reset arrow rotation
        arrow.classList.remove('rotate-180');
    }
});
