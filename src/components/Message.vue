<template>
  <div class="message-container">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    props: {
      msg: {
        type: String,
        required: true
      }
    },
    methods: {
      closeMessage() {
        this.$emit('update:msg', '');
      }
    },
    watch: {
      msg(newMsg) {
        if (newMsg) {
          setTimeout(() => {
            this.closeMessage();
          }, 3000);
        }
      }
    }
  }
</script>

<style scoped>
  .message-container {
    color: #004085;
    background-color: #cce5ff;
    border: 2px solid #b8daff;
    border-radius: 5px;
    padding: 10px;
    max-width: 400px;
    margin: 30px auto;
  }
</style>