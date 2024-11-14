const avanca = document.querySelectorAll('.btn-page');

avanca.forEach(button => {
    button.addEventListener('click', function(){

        const atual = document.querySelector('.ativo');
        const proximoPasso = 'page-' + this.getAttribute('data-page');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');

    })
})