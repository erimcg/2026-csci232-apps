<script setup>
  const props = defineProps({
    getFirstName: Function,
    setFirstName: Function
  })

  if (props.setFirstName) {
    setTimeout(()=> props.setFirstName('Bobo'), 5000)
  }
</script>

<template>
  <section>
    <span>{{ getFirstName() }}</span>
  </section>
</template>

<style scoped>
  section {
    margin-bottom: 10px;

    background-color: rgb(242, 241, 241) !important;
  }
</style>