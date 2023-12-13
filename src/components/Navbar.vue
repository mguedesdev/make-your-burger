
<template>
  <div>
    <nav>
      <div class="logoAndUser"> 
        <router-link to="/" id="logo-url"> <img :src="logo" :alt="alt" ></router-link> 
        <p>Olá {{nameUser}}</p>
      </div>
      <router-link class="optionsNav" to="/">Home</router-link> 
      <router-link class="optionsNav" to="/pedidos">Pedidos</router-link>
      <button class="btn-sair optionsNav">Sair</button>
    </nav>
  </div>
  
</template>

<script>
  export default {
    name: 'Navbar',
    props:  ['logo', 'alt'],
    
    data() {
      return {
        nameUser : 'Matheus'
      }
    }
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

  .logoAndUser {
    display: flex;
    align-items: center;
    justify-content: center; 
    margin: auto;
    margin-left: 0;
  }

  .logoAndUser p {
    color: #FCBA03;
    font-weight: bold;
    margin-left: 10px;
  }
  .optionsNav{
    color: #FCBA03;
    background-color: transparent;
    border: none;
    font-size: 16px;
    margin-left: 10px;
    cursor: pointer;
    text-decoration: none;
    margin: 0 10px;
    transition: 0.3s;
  }
  .optionsNav:hover {
    color: #fff;
  }

  #logo-url > img {
    width: 40px;
    height: 40px;
  }


</style>