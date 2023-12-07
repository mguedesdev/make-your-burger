<template>
  <div class="main-banner">
    <img src="/img/burger.jpg" alt="Burger" class="banner-image"/>
    <h1>Make Your Burger</h1>
  </div>
</template>

<script>
  export default {
    name: 'Banner'
  }
</script>

<style scoped>
  .main-banner {
    height: 500px;
    width: calc(100% + 100px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
    margin-left: -50px;
    margin-top: -20px;
    margin-bottom: 20px;
  }

  .main-banner:hover > .banner-image {
    filter: brightness(50%);
    transform: scale(1.1);
    transition: 0.5s;
    margin-left: -20px;

  }

  .main-banner:hover > h1 {
    background-color: rgb(255, 191, 0);
    transform: scale(1.2);
    transition: 0.3s;
    z-index: 2; 
    margin-left: 50px;
    transition: 0.5s;
  }

  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1; 
    transition: 0.5s;

  }

  .main-banner h1 {
    color: #FFF;
    font-size: 60px;
    margin: 0;
    padding: 20px 40px;
    background-color: rgba(34, 34, 34); 
    z-index: 1; 
    transition: 0.5s;

  }


</style>
