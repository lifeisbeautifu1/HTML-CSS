const imgDiv = document.querySelector('.profile-pic');
const uploadBtn = document.querySelector('#uploadBtn');
const photo = document.querySelector('#photo');
const file = document.querySelector('#file');

imgDiv.addEventListener('mouseenter', () => {
  uploadBtn.style.display = 'block';
});

imgDiv.addEventListener('mouseleave', () => {
  uploadBtn.style.display = 'none';
});

file.addEventListener('change', () => {
  const choosedFile = file.files[0];

  console.log(choosedFile);

  if (choosedFile) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      photo.setAttribute('src', reader.result);
    });

    reader.readAsDataURL(choosedFile);
  }
});
