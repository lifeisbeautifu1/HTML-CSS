const menuBtn = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  showcase.classList.toggle('active');
});
