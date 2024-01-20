 const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
alert("hello");
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})