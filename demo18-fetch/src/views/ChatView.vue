<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const displayName = computed(() => {
    if (route.params.username) {
        return route.params.username.charAt(0).toUpperCase() + route.params.username.slice(1)
    }
    else {
        return 'Friends'
    }
})

</script>

<template>
    <div class="chat-view">
        <h1>Chat With {{ displayName }}</h1>

        <!-- <div class="links">
            <RouterLink to="/chat/mo" class="link">Mo</RouterLink>
            <RouterLink to="/chat/bo" class="link">Bo</RouterLink>
        </div> -->
    </div>
</template>

<style scoped>
.chat-view {
    box-sizing: border-box;
    padding: 20px;
    background-color: rgb(239, 237, 237);
    opacity: 97%;

    display: flex;
    flex-direction: column;

    flex: 1;
}

.links {
    display: flex;
    flex-direction: column;
}

.link {
    padding: 5px 10px;
    border-radius: 999px;
    color: black;
    background-color: rgb(194, 193, 193);
    text-decoration: none;
    margin-bottom: 5px;

    width: 30px;
    text-align: center;
}

.link:hover {
    transform: scale(0.95);
}
</style>
