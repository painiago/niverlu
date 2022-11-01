function typeWriter (elemento){
  const textArray = elemento.innerHTML.split('');  //.split para separar as letras
  elemento.innerHTML = '';
  textArray.forEach((letra, i)  =>{    //i parâmetro
  setTimeout(() => {   // setTimeout adiciona o elemento a cada X milissegundos
    elemento.innerHTML += letra;      //+=  a cada letra adiciona depois de 75 * i (i = X valor de index) 
  }, 75 * i) ;
  });
  
}
const titulo = document.querySelector('#feliz');
typeWriter(titulo);

// var vid = document.getElementById('#videoLu').play();

var autoPlayVideo = document.getElementById("#videoLu");
    autoPlayVideo.oncanplaythrough = function() {
        autoPlayVideo.muted = true;
        autoPlayVideo.play();
        autoPlayVideo.pause();
        autoPlayVideo.play();
    }

