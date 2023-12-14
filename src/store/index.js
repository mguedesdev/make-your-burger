import { createStore } from 'vuex';
import { db } from '@/firebase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, getFirestore, setDoc, getDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const store = createStore({
  state: {
    ingredientes: {
      carnes: [],
      paes: [],
      opcionais: []
    },
    pedidos: [],
    status: [],
    user: null,
  },
  mutations: {
    SET_INGREDIENTES(state, payload) {
      state.ingredientes[payload.categoria] = payload.tipos;
    },
    SET_PEDIDOS(state, pedidos) {
      state.pedidos = pedidos;
    },
    SET_STATUS(state, status) {
      state.status = status;
    },  
    SET_USER(state, userData) {
      state.user = userData;
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
    },

    async criarPedido(_, pedido) {
      const burgersCollectionRef = collection(db, "burgers");
      const burgersList = await getDocs(burgersCollectionRef);
      try {
        await addDoc(burgersCollectionRef, {
          ...pedido, 
          id: burgersList.docs.map(doc => doc.data()).length + 1
        });
      } catch (error) {
        console.error("Erro ao criar o pedido: ", error);
      }
    },

    async buscarPedidos({ commit }) {
      const burgersCollectionRef = collection(db, "burgers");
      const burgersList = await getDocs(burgersCollectionRef);
      commit('SET_PEDIDOS', burgersList.docs.map(doc => {
        return {
          firestoreId: doc.id, 
          ...doc.data() 
        };
      }));
      console.log(this.state.pedidos);
      
    },

    async buscarStatus({ commit }) {
      const statusCollectionRef = collection(db, "status");
      const statuslist = await getDocs(statusCollectionRef);
      commit('SET_STATUS', statuslist.docs.map(doc => doc.data()));
    },

    async atualizarStatus(_, {firestoreId, newStatus}) {
      console.log(firestoreId, newStatus);
      const burgerRef = doc(db, "burgers", firestoreId);

      console.log(burgerRef)
      try {
        await updateDoc(burgerRef,{
          status: newStatus
        });
      } catch (error) {
        console.error("Erro ao atualizar o status: ", error);
      }
    },

    async deletarPedido(_, firestoreId) {
      const burgerRef = doc(db, "burgers", firestoreId);
      try {
        await deleteDoc(burgerRef);
      }
      catch (error) {
        console.error("Erro ao deletar o pedido: ", error);
      }
    },

    async createUser (_, {email, password, name}) {
      const auth = getAuth();
      const db = getFirestore();

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          name: name,
          email: email
        });
      } catch (error) {
        console.error("Erro ao criar usuário: ", error);
      }
    },

    async loginUser ({commit}, {email, password}) {
      const auth = getAuth();
      const db = getFirestore();
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
       // Busca as informações adicionais do usuário no Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        console.log(userDoc);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          localStorage.setItem('user', JSON.stringify(userData));
          commit('SET_USER', { name: userData.name, email: user.email, uid: user.uid });
        } else {
          console.log("Nenhum documento encontrado para o usuário.");
        }
        console.log(this.state.user);
      } catch (error) {
        console.error("Erro ao logar usuário: ", error);
      }
    },
    async logoutUser ({commit}) {
      const auth = getAuth();
      try {
        await signOut(auth);
        localStorage.removeItem('user');
        console.log(localStorage.getItem('user'));
        commit('SET_USER', null);
      } catch (error) {
        console.error("Erro ao deslogar usuário: ", error);
      }
    },
    
  },

});

export default store;