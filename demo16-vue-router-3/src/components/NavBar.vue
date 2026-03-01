<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const input = ref('')

function go() {
    router.push(input.value)
}

watch(route, () => {
    input.value = route.fullPath
})

</script>

<template>
    <nav class="nav-bar">
        <div class="links">
            <div>
                <RouterLink to="/" class="link left">Root</RouterLink>
                <RouterLink to="/home" class="link left">Home</RouterLink>
                <RouterLink to="/home/1x1" class="link left">1x1</RouterLink>
                <RouterLink to="/3x2" class="link left">3x2</RouterLink>
            </div>
            <div class="right">
                <RouterLink to="/props" class="link right">Props</RouterLink>
                <RouterLink to="/props/param-as-prop/cat" class="link right">Param as Prop</RouterLink>
                <RouterLink to="/props/prop-via-function?name=dog" class="link right"
                    activeClass="my-active-class" exactActiveClass="my-exact-active-class">Prop via Function</RouterLink>
            </div>
        </div>
        <div class="route">
            <input v-model="input" @keyup.enter="go">
        </div>
    </nav>
</template>

<style scoped>
.nav-bar {
    padding: 20px;
    background-color: rgb(194, 194, 194);
}

.links {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}

.link {
    padding: 5px 10px;
    border-radius: 999px;
    background-color: gainsboro;
    color: rgb(91, 91, 91);
}

.left {
    margin-right: 10px;
}

.right {
    margin-left: 10px;
}

.route {
    padding: 5px 10px;
    background-color: rgb(238, 238, 238);
    border-radius: 999px;
}

.route > input {
    width: 25%;
}

.router-link-active {
    background-color: gray;
    color: white;
    transition: background-color 0.25s ease-in, color 0s ease-in 0.25s;
}

.router-link-exact-active {
    border: 2px solid white;
}

.my-active-class {
    background-color: gray;
    color: gold;
    transition: background-color 0.25s ease-in, color 0s ease-in 0.25s;
}

.my-exact-active-class {
        border: 2px solid gold;
}

.go {
    margin-left: 5px;
}
</style>