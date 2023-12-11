<template>
  <div class="app-container">
    <Navbar v-if="showNavbarAndFooter" :logo="logo_src" :alt="app_name"/>
    <router-view/>
    <Footer v-if="showNavbarAndFooter"/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  import { watch, ref } from 'vue';
  import { useRoute } from 'vue-router';

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
    },
    setup() {
      const route = useRoute();
      const showNavbarAndFooter = ref(true);

      watch(() => route.path, (newPath) => {
        showNavbarAndFooter.value = newPath !== '/login';
      }, { immediate: true });

      return { showNavbarAndFooter };
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

  .app-container {
    min-height: 100vh;
  }

  .main-container {
    margin: 50px;
    margin-top: 0px;
    min-height: 78vh;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 15px;
    color: #222;
  }

</style>
