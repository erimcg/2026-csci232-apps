<script setup>
import { defineComponent } from 'vue';


</script>

<template>
    <nav>
        <div class="links">
            <div class="arrow-buttons">
                <button @click="$router.go(-1)">
                    <span class="material-symbols-outlined">arrow_back</span>
                </button>
                <button @click="$router.go(1)">
                    <span class="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
        </div>

        <div class="links">
            <div>
                <RouterLink to="/home" class="link">Home</RouterLink>
                <RouterLink to="/home/messages" class="link">Messages</RouterLink>
                <!-- Use of named route -->
                <RouterLink :to="{ name: 'profile' }" class="link">Profile</RouterLink>
            </div>
            <div class="align-right">
                <RouterLink to="/shop/search" class="link">Shop</RouterLink>
                <RouterLink to="/shop/cart" class="link">My Cart</RouterLink>
            </div>
        </div>

        <span class="route">{{ $route.path }}</span>
    </nav>
</template>

<style scoped>
nav {
    box-sizing: border-box;
    padding: 20px;

    background-color: rgb(201, 201, 201);

    display: flex;
    flex-direction: column;
    gap: 10px;
}

.links {
    display: flex;
    justify-content: space-between;
}

.link {
    margin-right: 10px;
}

.route {
    display: block;
    margin-top: 5px;
    padding: 5px 10px;
    border-radius: 999px;
    background-color: rgb(211, 210, 210);
}

.arrow-buttons button {
    margin-right: 10px;
}
</style>