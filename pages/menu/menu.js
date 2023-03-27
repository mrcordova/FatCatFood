const dropdown = document.querySelector('.dropdown');

const options = dropdown.querySelectorAll('.menu-types li');


  
// Add click event listener to all options
options.forEach(option => {
  option.addEventListener('click', e => {
    options.forEach((option) => {
        option.classList.remove("active");
      })
    
    option.classList.add('active');
    // Prevent default action of link tag
    e.preventDefault(); 
  
  });
});

