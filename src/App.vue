
<script setup>
// import cotador from '.components/contador.vue'
</script>

<template>
  <!-- <div :style="image"></div> -->
  <contador msg="Parabéns" />
</template>

<!-- <script>
  export default {
    data(){
      return{
        image: {backgroundImage: "url(/src/img/imgsl/backgroundcerta.png)"}
      };
    }
  };
</script> -->

<style scoped>
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
</style>
<style lang="scss">
  div{
    /* border: 2px solid blue; */
  }
  /* body{
    background-image: url('./img/imgsl/backgroundcerta.png');
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    
  } */
  
</style>
