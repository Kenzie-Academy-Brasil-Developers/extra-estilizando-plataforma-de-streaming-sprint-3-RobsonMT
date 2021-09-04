// trocar a imagem principal
function trocarImagem(filename){
    let $imagemPrincipal = document.querySelector('#imagemPrincipal');

    $imagemPrincipal.setAttribute('style', 'background-image: url("./assets/img/movies/' +filename)
}

// trocar o titulo da imgem principal
function trocarTitulo(title){
    let $trocarTitulo = document.querySelector('.titulo');

    $trocarTitulo.innerHTML = title;
}

// trocar o descrição da imgem principal
function trocarDescricao(description){
    let $trocarDescricao = document.querySelector('.descricao');

    $trocarDescricao.innerHTML = description;
}

// trocar o logo da imagem principal 
function trocarLogo(url){
    let $trocarURLdoLogo = document.querySelector('.logo-bg');

    $trocarURLdoLogo.setAttribute('src', './assets/img/movies/' +url)
}

// abrir menu navegar na versão mobile
function menuOpen(){
    let $menuArea = document.querySelector('#menu--open');
    
    if($menuArea.classList.contains('menu--close')){
        $menuArea.classList.remove('menu--close')
    }else{
        $menuArea.classList.add('menu--close')
    }       
    
}
