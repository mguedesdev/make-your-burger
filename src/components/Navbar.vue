
<template>
  <div>
    <nav>
      <router-link to="/" id="logo-url"> <img :src="logo" :alt="alt" ></router-link> 
      <router-link to="/">Home</router-link> 
      <router-link to="/pedidos">Pedidos</router-link>
    </nav>
  </div>
  
</template>

<script>
  export default {
    name: 'Navbar',
    props:  ['logo', 'alt']
  }
</script>

<style scoped>
  nav {
    background-color: #222;
    padding: 15px 50px;
    margin-bottom: 20px;
    border-bottom: 4px solid #111;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  #logo-url {
    margin: auto;
    margin-left: 0;
  }

  #logo-url > img {
    width: 40px;
    height: 40px;
  }

  nav a {
    color: #FCBA03;
    text-decoration: none;
    margin: 0 10px;
    transition: 0.3s;
  }

  nav a:hover {
    color: #fff;
  }

</style>