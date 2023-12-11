<template>
  <div class="main-container">
    <Dashboard />

  </div>
</template>

<script>
  import Dashboard from '@/components/Requests/Dashboard.vue';
  export default {
    name: 'RequestsView',
    components: {
      Dashboard,
    }
  }
</script>

<style scoped>

</style>
