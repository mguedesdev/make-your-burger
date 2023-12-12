import { createStore } from 'vuex';
import { db } from '@/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const store = createStore({
  state: {
    ingredientes: {
      carnes: [],
      paes: [],
      opcionais: []
    },
    pedidos: [],
  },
  mutations: {
    SET_INGREDIENTES(state, payload) {
      state.ingredientes[payload.categoria] = payload.tipos;
    },
    SET_PEDIDOS(state, pedidos) {
      state.pedidos = pedidos;
    }
  },
  actions: {
    async buscarIngredientes({ commit }) {
      const categorias = ['carnes', 'paes', 'opcionais'];

      for (const categoria of categorias) {
        const tiposRef = collection(db, `ingredientes/${categoria}/tipos`);
        const tiposSnapshot = await getDocs(tiposRef);
        
        commit('SET_INGREDIENTES', { categoria, tipos: tiposSnapshot.docs.map(doc => doc.data()) });

      }
      console.log(this.state.ingredientes)
    },
    async criarPedido(_, pedido) {
      const burgersCollectionRef = collection(db, "burgers");
      try {
        await addDoc(burgersCollectionRef, pedido);
      } catch (error) {
        console.error("Erro ao criar o pedido: ", error);
      }
    },
    async buscarPedidos({ commit }) {
      const burgersCollectionRef = collection(db, "burgers");
      const burgersList = await getDocs(burgersCollectionRef);
      commit('SET_PEDIDOS', burgersList.docs.map(doc => doc.data()));
    },
  },
  getters: {
    ingredientes: state => state.ingredientes,
    pedidos: state => state.pedidos,
  },

});

export default store;