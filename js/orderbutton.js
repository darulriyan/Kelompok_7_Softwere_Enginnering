document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => {
          btn.classList.remove('active');
          btn.style.backgroundColor = '#193D64';
        });
        button.classList.add('active');
        button.style.backgroundColor = '#00244B';
      });
    });
  });