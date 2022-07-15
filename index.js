/*const dropdown = document.querySelector('.dropdown-toggle');
dropdown.addEventListener('mouseover', () => {
    dropdown.classList.remove('dropdown-toggle');
});
dropdown.addEventListener('mouseout', () => {
    dropdown.classList.add('dropdown-toggle');
});*/

const dropdown = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown-menu');

dropdown.addEventListener('click', () => {
    setTimeout(() => {
        dropdownList.classList.toggle('dropdown-active');
    }, 50);
    
});