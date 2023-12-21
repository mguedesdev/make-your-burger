<template>

  <div id="burger-table" v-if="burgers.length > 0">
    <Message v-model:msg.sync="msg" v-show="msg" />
    <h2>Pedidos:</h2>
    <div>
      <div id="burger-table-heading">
        <div class="order-id">#:</div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações:</div>
      </div>
    </div>
    <div id="burger-table-rows">
      <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
        <div class="order-number">{{ burger.id }}</div>
        <div>{{ burger.nome }}</div>
        <div>{{ burger.pao }}</div>
        <div>{{ burger.carne }}</div>
        <div>
          <ul>
            <li v-for="(opcional, index) in burger.opcionais" :key="index">
              {{ opcional }}
            </li>
          </ul>
        </div>
        <div>
          <select name="status" class="status" @change="updateBurger($event, burger.firestoreId)">
            <option v-for="s in status" :key="s.id" :value="s.Tipo" :selected="burger.status == s.Tipo">
              {{ s.Tipo }}
            </option>
          </select>
          <button class="delete-btn" @click="deleteBurger(burger.firestoreId)">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Não há pedidos no momento!</h2>
  </div>
</template>

<script>
  import Message from '../Message.vue';
  import { mapState, mapActions } from 'vuex';

  export default {
  name: 'Dashboard',
  computed: {
    ...mapState({
      burgers: state => state.pedidos,
      status: state => state.status,

    })
  },
  data() {
    return {
      burger_id: null,
      msg: ''
    }
  },
  components: {
    Message,
  },
  methods: {
    ...mapActions(['buscarPedidos', 'buscarStatus', 'atualizarStatus', 'deletarPedido']),
    async getPedidos() {
      await this.buscarPedidos();
    },

    async getStatus() {
      await this.buscarStatus();
    },

    async updateBurger(event, firestoreId) {
      const newStatus = event.target.value;

      try {
        this.getPedidos(); 
        await this.atualizarStatus({firestoreId, newStatus});

        this.msg = `Pedido está ${newStatus}`; 
      } catch (error) {
        this.msg = "Erro ao atualizar pedido. Tente novamente.";
      }
    },

    async deleteBurger(firestoreId) {
      try {
        await this.deletarPedido(firestoreId);
        this.getPedidos(); 
        this.msg = `Pedido cancelado com sucesso!`; 
      } catch (error) {
        console.error("Erro ao deletar o pedido: ", error);
        this.msg = "Erro ao cancelar pedido. Tente novamente.";
      }
    }
    
  },
  mounted() {
    this.getStatus();
    this.getPedidos();
  }

  
}
</script>

<style scoped>
  #burger-table {
    max-width: 1200px;
    margin: 0 auto;
  }

  #burger-table-heading,
  #burger-table-rows,
  .burger-table-row {
    display: flex;
    flex-wrap: wrap;
  }

  #burger-table-heading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
  }

  .burger-table-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #CCC;
  }

  #burger-table-heading div,
  .burger-table-row div {
    width: 19%;
  }

  #burger-table-heading .order-id,
  .burger-table-row .order-number {
    width: 5%;
  }

  select {
    padding: 12px 6px;
    margin-right: 12px;
  }

  .delete-btn {
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }
  
  .delete-btn:hover {
    background-color: transparent;
    color: #222;
  }
  
</style>