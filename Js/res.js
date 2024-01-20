const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-container');
const dropdowns = document.querySelectorAll('.dropdown > div');
const subDropdowns = document.querySelectorAll('.sub-dropdown > div');

//toggle variable.
let menuOpen = false;

//set click event to menu button
menuBtn.addEventListener('click', () => {
  //toggle mega menu show class
  menu.classList.toggle('mega-menu-show');
  //if the menu open variable is false
  if(menuOpen === false){
    //set the close icon to the menu button
    menuBtn.innerHTML = `
    <span class="material-symbols-outlined">
      close
    </span>`
    ;
    //set mneu open to true
    menuOpen = true;
  }else{
    menuBtn.innerHTML = `
    <span class="material-symbols-outlined">
      menu
    </span>
    `;
    //set menu open to false
    menuOpen = false;
  }
});

//select all dropdowns 
dropdowns.forEach(dropdown => {
  //add click event 
  dropdown.addEventListener('click', (e) => {
    //toggle dropdown menu show class
   dropdown.nextElementSibling.classList.toggle('menu-show');
  });
});

//select all sub dropdowns
subDropdowns.forEach(subDropdown => {
  //add click event
  subDropdown.addEventListener('click', (e) =>{
    //toggle subdropdown menu show
    subDropdown.nextElementSibling.classList.toggle('sub-menu show');
  });
});