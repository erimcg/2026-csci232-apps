<script setup>
  import { ref } from 'vue'
  import SlottedBlock from '@/components/SlottedBlock.vue';

  const title = ref('Global Hacking Network')
  const date = ref(new Date().toLocaleTimeString())

  setInterval(() => date.value = new Date().toLocaleTimeString(), 1000)

  const contentLocation = ref({
    dateSlot: "end",
    titleSlot: "default",
    imageSlot: "center"
  })

</script>

<template>
  <main>
    <SlottedBlock >
      <!-- named slots -->
      <template v-slot:default>
        <span>{{ date }}</span>
      </template>

      <template #center>
        <h3>{{ title }}</h3>  
      </template>

      <template #end>
        <img src="/bird.gif">
      </template>
    </SlottedBlock>

    <SlottedBlock>
      <!-- dynamic slot names -->
      <template v-slot:[contentLocation.dateSlot]>
        <span>{{ date }}</span>
      </template>

      <template v-slot:[contentLocation.titleSlot]>
        <h3>{{ title }}</h3>  
      </template>

      <template v-slot:[contentLocation.imageSlot]>
        <img src="/bird.gif">
      </template>
    </SlottedBlock>

    <SlottedBlock>
      <!-- Define prop in child and use (or not) in parent -->
      <template #center="props">
        <span :style="props.defaultStyle">{{ date }}</span>
      </template>

      <template #end>
        <h3>{{ title }}</h3>  
      </template>

      <template #default>
        <img src="/bird.gif">
      </template>
    </SlottedBlock>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

span {
  font-size: 32px;;
}

</style>
