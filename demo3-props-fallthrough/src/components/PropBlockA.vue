<script setup>
  const props = defineProps({
    firstName: {
      type: String,
      required: true
    },
    getLastName: {
      type: Function
    },
    address: {
      type: Object
    }
  })
</script>

<template>
  <section>
    <span>{{ firstName }}</span>

    <div v-if="getLastName">
      <span> {{ getLastName() }}</span>
    </div>

    <div v-if="address">
      <span> {{ address.street }}</span>
    </div>
  </section>
</template>

<style scoped>
  section {
    margin-bottom: 10px;

    background-color: rgb(242, 241, 241) !important;
  }
</style>
