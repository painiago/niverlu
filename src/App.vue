<script>
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

</script>

<template>
   
  <contador msg="Parabéns"/>
</template>
>

<style scoped lang="scss"> 
.image{
  position: absolute;
  margin-top: 100em;
}

.logo {
  height: 6em;
  padding: 1em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

div{
    /* border: 2px solid blue; */
  }
  /* body{
    background-image: url('/assets/backgroundcerta.svg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    
  }
   */
</style>


