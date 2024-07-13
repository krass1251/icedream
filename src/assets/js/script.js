const burgerMenuToggler = document.querySelector("header .hiding-content-btn-toggler");
const header = document.querySelector("header");

burgerMenuToggler.addEventListener("click", (e) => {
  header.classList.toggle("opened");
});


document.addEventListener('DOMContentLoaded', function() {
  const copyButton = document.querySelector('.btn-copy');
  const referalText = document.querySelector('.referal').textContent;

  copyButton.addEventListener('click', function() {
    navigator.clipboard.writeText(referalText)
        .then(() => {
          const originalText = copyButton.textContent;
          copyButton.textContent = 'Copied ✔';
          setTimeout(() => {
            copyButton.textContent = originalText;
          }, 1000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
  });

    const progressBarLine = document.querySelector('.progress-bar__line');
    const startValue = parseFloat(document.querySelector('.progress-start-val').textContent);
    const finishValue = parseFloat(document.querySelector('.progress-finish-val').textContent);

    let percentage = (startValue / finishValue) * 100;
    if (percentage < 2) {
      percentage = 2;
    }

    if (percentage > 100) {
      percentage = 100;
    }

    progressBarLine.style.width = `${percentage}%`;

});