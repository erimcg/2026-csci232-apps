<script setup>

const props = defineProps(['direction'])

console.log(props.direction)

</script>

<template>
    <div class="home-main" :class="props.direction">
      <RouterView class="main-left" name="main-left"></RouterView>
      <RouterView class="main-right" name="main-right"></RouterView>
    </div>
</template>

<style scoped>
.home-main {
  padding: 20px;

  display: flex;
  gap: 20px;
}

.column {
  flex-direction: column;
}
</style>