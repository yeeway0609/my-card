const shareButton = document.querySelector('.share');

shareButton.addEventListener('click', () => {
  if (navigator.share) {
   navigator.share({
      title: 'Share the website',
      url: 'https://yeeway0609.github.io/my-card/'
    })
    .then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    const URL = window.location.href;
    navigator.clipboard.writeText(URL);
    console.log('Copied the URL!');
    alert('Copied the URL!');
  }
});

const qrcode = document.querySelector('.qrcode');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
qrcode.addEventListener('click', () => {
  modal.showModal();
})
closeModal.addEventListener('click', () => {
  modal.close();
})


