document.addEventListener('DOMContentLoaded', function(){

    const btn = document.getElementById('open');
    const akun = document.querySelector('.akun');

    btn.addEventListener('click', function(){
        sidebar.classList.toggle('active');

    })
})