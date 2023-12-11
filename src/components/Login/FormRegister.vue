<template>
  <div class="formRegister-container">
    <Messagem v-model:msg.sync="msg" v-show="msg" />
    <div class="register-title">
        <h2>Cadastrar</h2>
        <p>Informe seus dados para cadastrar sua conta.</p>
    </div>

    <form class="register-form" v-on:submit.prevent="createUser()">
      <div class="input-form">
        <label for="name">Nome</label>
        <input type="text" id="name" name="name" v-model="name" placeholder="Digite o seu Nome"/>
      </div>
      <div class="input-form">
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" v-model="email" placeholder="Digite o seu email"/>
      </div>
      <div>
        <label for="password">Senha</label>
        <input type="password" id="password" name="password" v-model="password" placeholder="Digite a sua senha"/>
      </div>
      <div>
        <label for="password-repeat">Repetir Senha</label>
        <input type="password" id="password-repeat" name="password-repeat" v-model="passwordRepeat" placeholder="Repita a senha" />
      </div>
      <button type="submit">Cadastrar</button>
      </form>
  </div>
  
</template>

<script>
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import Messagem from '../Message.vue';
  import { getFirestore, doc, setDoc } from "firebase/firestore";

  export default {
  name: 'FormRegister',
  components: {
   Messagem,
  },
  data() {
    return { 
      name: '',
      email: '',
      password: '',
      passwordRepeat: '',
      msg: ''
    }
  },
  methods: {
    async createUser(e) {
      if (this.password !== this.passwordRepeat) {
        this.msg = 'As senhas não coincidem.';
        return;
      }

      const auth = getAuth();
      const db = getFirestore();

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          name: this.name,
          email: this.email
        });

        this.msg = `Usuário criado com sucesso!`;
        this.email = '';
        this.password = '';
        this.passwordRepeat = '';
        this.name = '';

      } catch (error) {
        console.error("Erro ao criar o usuário: ", error);
        this.msg = "Erro ao criar usuário. Tente novamente.";
      }
    },

  },

}
</script>

<style>  

  .formRegister-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .register-title {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 10px;

  }

  .register-title h2 {
    color: #111;
    margin-bottom: 5px;
  }

  .register-title p {
  color: #111;
    font-size: 14px;
  }

  .register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }

  .register-form div {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin-bottom: 25px;
  }

  .register-form div label {
    color: #111;
    margin-bottom: 5px;
  }

  .register-form div input {
    border: none;
    border-bottom: #111 solid 1px;
    padding: 5px;
    outline: none;
  }

  .register-form button {
    background-color: #fcba03;
    border: none;
    padding: 10px;
    color: #111;
    cursor: pointer;
    margin-top: 10px;
    width: 75%;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 40px;
  }

  .register-form button:hover {
    background-color: #111;
    color: #fcba03;
  }
</style>