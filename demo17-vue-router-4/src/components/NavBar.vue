<script setup>
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/userStore.js';
import { computed } from 'vue'
import { storeToRefs } from 'pinia';

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const route = useRoute()

const links = [
    { label: 'Home', path: '/home', key: '/home', position: 'left', role: 'user' },
    { label: 'Admin', path: '/admin', key: '/admin', position: 'left', role: 'admin' },
    { label: 'Chat', path: '/chat', key: '/chat', position: 'left', role: 'user' }
]

const leftLinks = computed(() => {
    if (user.value.username) {
        return links.filter(entry => entry.position == 'left' && entry.path != route.path && user.value.roles.includes(entry.role))
    }

    return []
})

const rightLinks = computed(() => {
    const links = []

    if (user.value.username) {
        links.push({ label: 'Log out', path: '', key: '/logout', handler: userStore.logout })
    }

    return links
})

</script>

<template>
    <div class="navbar">
        <div class="links left-links">
            <RouterLink v-for="link of leftLinks" :to="link.path" :key="link.key" class="link">
                <span @click="link.handler">{{ link.label }}</span>
            </RouterLink>
        </div>
        <div class="links right-links">
            <RouterLink v-for="link of rightLinks" :to="link.path" :key="link.key" class="link">
                <span @click="link.handler">{{ link.label }}</span>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    flex: 0 0 50px;

    padding: 20px;
    box-sizing: border-box;

    background-color: gainsboro;

    display: flex;
    justify-content: space-between;
}

.links {
    display: flex;
    align-items: center;
}

.left-links > * {
    margin-right: 10px;

    display: flex;
    flex-direction: row;
}

.right-links > * {
    margin-left: 10px;

    display: flex;
    flex-direction: row;
}

.link {
    padding: 5px 15px;
    border-radius: 999px;
    color: black;
    background-color: rgb(194, 193, 193);
    text-decoration: none;
}

.link:hover {
    transform: scale(0.95);
}

.display-name {
    font-size: 1.5rem;
}

</style>