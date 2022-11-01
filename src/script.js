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

var video = document.querySelector('#videoLu');

var promise = video.play();

// promise won’t be defined in browsers that don't support promisified play()
if (promise === undefined) {
  console.log('Promisified video play() not supported');
} else {
  promise.then(function() {
    console.log('Video playback successfully initiated, returning a promise');
  }).catch(function(error) {
    console.log('Error initiating video playback: ', error);
  });
}

video.onloadedmetadata = function() {
  var fileName = this.currentSrc.replace(/^.*[\\/]/, '');
  document.querySelector('#videoSrc').innerHTML = 'Playing video: ' + fileName;
};