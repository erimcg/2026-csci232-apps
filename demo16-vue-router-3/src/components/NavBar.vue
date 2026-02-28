<script setup>

</script>

<template>
    <nav class="nav-bar">

    </nav>
</template>

<style scoped>
.nav-bar {
    padding: 20px;
    background-color: rgb(194, 194, 194);
}

.links {
    margin: 10px;
}

.link {
    margin-right: 10px;
    padding: 5px 10px;
    border-radius: 999px;
}

.route {
    padding: 5px 10px;
    background-color: rgb(238, 238, 238);
    border-radius: 999px;
}

.router-link-active {
    background-color: gray;
    color: white;
    transition: background-color 0.25s ease-in, color 0s ease-in 0.25s;
}
</style>