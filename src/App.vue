<template>
  <div>
    <Navbar :logo="logo_src" :alt="app_name"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        logo_src : "img/logo.png",
        app_name : 'Make Your Burger'
      }
    }
  }
  
</script>


<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica;
  }

  .main-container {
    margin: 50px;
    margin-top: 0px;
    min-height: 78vh;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }

</style>
