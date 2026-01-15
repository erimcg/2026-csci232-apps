<script setup>

</script>

<template>
    <footer>
       <slot></slot>
    </footer>
</template>

<style scoped>
    footer {
        background-color: rgb(243, 238, 238);

        margin-top: 10px;
        padding-inline: 5px;
        padding-block: 20px;
        border-radius: 0 0 10px 10px;
        
        text-align: center;
    }
</style>