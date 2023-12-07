<template>
  <div class="main-container">
    <DashboardVue />

  </div>
</template>

<script>
  import DashboardVue from "@/components/Pedidos/Dashboard.vue";
  export default {
    name: 'PedidosView',
    components: {
      DashboardVue
    }
  }
</script>

<style scoped>

</style>
