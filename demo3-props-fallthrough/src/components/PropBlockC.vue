<script setup>
  const props = defineProps({
    name: {
      type: [String, null],
      required: true
    },
    age: {
      type: Number,
      default: 0,
      validator(value, props) {
        return value < 0 ? 0 : value
      }
    },
    status: {
      type: String,
      default: 'active',
      validator(value, props) {
        console.log('hello')
        return ['active', 'inactive'].includes(value)
      }
    }
  })
</script>

<template>
  <section>
    {{ name }}, {{ age }}, {{ status }}
  </section>
</template>

<style scoped>
    section {
    margin-bottom: 10px;

    background-color: rgb(242, 241, 241) !important;
  }
</style>
