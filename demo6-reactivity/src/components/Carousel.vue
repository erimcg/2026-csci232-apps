<script setup>
import { onMounted, computed } from 'vue';
import { images } from '../images'

const emit = defineEmits(['image-count'])
const { index } = defineProps(['index'])

const currentImage = computed(() => {
        return (index >= 0 && index < images.length) ?
            images[index] : null
})

onMounted(() => {
    emit('image-count', images.length)
})

</script>

<template>
    <section>
        <img :src="currentImage.src" :style="currentImage.style"/>
    </section>
</template>

<style scoped>
    
</style>