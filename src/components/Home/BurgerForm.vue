<template>
  <div class="main-form">
    <Messagem v-model:msg.sync="msg" v-show="msg" />
    <form id="burger-form" @submit="createBurger">

      <div class="input-container">
        <label for="nome">Nome do cliente:</label>
        <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
      </div>
      <div class="input-container">
        <label for="pao">Escolha o pão:</label>
        <select name="pao" id="pao" v-model="pao">
          <option value="">Selecione o seu pão</option>
          <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
        </select>
      </div>
      <div class="input-container">
        <label for="carne">Escolha a carne do seu Burger:</label>
        <select name="carne" id="carne" v-model="carne">
          <option value="">Selecione o tipo de carne</option>
          <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
        </select>
      </div>
      <div id="opcionais-container" class="input-container">
        <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
        <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
          <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
          <span>{{ opcional.tipo }}</span>
        </div>
      </div>
      <div class="input-container">
        <input class="submit-btn" type="submit" value="Criar meu Burger!">
      </div>

    </form>
  </div>  
</template>

<script>
  import Messagem from '../Message.vue';

  import { db } from '@/firebase'; // Ajuste o caminho para a sua instância do Firestore
  import { collection, getDocs, addDoc } from 'firebase/firestore';

  export default {
    name: 'BurgerForm',
    data() {
      return {
        paes: null,
        carnes: null,
        opcionaisdata: null,
        nome: '',
        pao: '',
        carne: '',
        opcionais: [],
        msg: ''
      }
    },
    components: {
      Messagem,
    },  
    methods: {

      async buscarTodosOsIngredientes() {
        const categorias = ['carnes', 'paes', 'opcionais'];

        for (const categoria of categorias) {
          const tiposRef = collection(db, `ingredientes/${categoria}/tipos`);
          const tiposSnapshot = await getDocs(tiposRef);

          const tipos = tiposSnapshot.docs.map(doc => (doc.data()));

          if (categoria === 'carnes') {
            this.carnes = tipos;
          } else if (categoria === 'paes') {
            this.paes = tipos;
          } else if (categoria === 'opcionais') {
            this.opcionaisdata = tipos;
          }
        }
      },

      async createBurger(e) {
        e.preventDefault();
        const burgersCollectionRef = collection(db, "burgers"); // Referência à coleção de burgers no Firestore
        const burgersList = await getDocs(burgersCollectionRef); // Busca todos os documentos da coleção burgers
        const burgers = burgersList.docs.map(doc => doc.data()); // Mapeia os documentos para um array de objetos
        console.log(burgers);

        const burgerData = {
          id: burgers.length + 1,
          nome: this.nome,
          pao: this.pao,
          carne: this.carne,
          opcionais: this.opcionais,
          status: 'solicitado'
        };
        console.log(burgerData);

        try {
          const docRef = await addDoc(burgersCollectionRef, burgerData);
          this.msg = `Pedido realizado com sucesso!`;
          this.nome = '';
          this.pao = '';
          this.carne = '';
          this.opcionais = [];

        } catch (error) {
          console.error("Erro ao criar o pedido: ", error);
          this.msg = "Erro ao realizar pedido. Tente novamente.";
        }
      },
    },
    mounted() {
      this.buscarTodosOsIngredientes();
    }
  }
</script>

<style scoped>
  #burger-form {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 15px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;;
    padding: 5px 10px;
    border-left: 4px solid #fcba03;
  }

  input, select {
    padding: 5px 10px;
    width: 100%;
  }

  #opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  #opcionais-title {
    width: 100%;
  }

  .checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
  }

  .checkbox-container span,
  .checkbox-container input {
    width: auto;
  }

  .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
  }

  .submit-btn {
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
    width: 100%;
  }

  .submit-btn:hover {
    background-color: transparent;
    color: #222;
  }
</style>