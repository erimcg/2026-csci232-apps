<script setup>
import { ref, useTemplateRef } from 'vue'
import { useRouter } from 'vue-router'

const itemName = ref('')
const router = useRouter()
const itemInput = useTemplateRef('itemInput')

function searchItem() {
    console.log('click')
    router.push(`/shop/search/item/${itemName.value}`)
    itemInput.value.value = null
}

</script>

<template>
    <div class="shop-search">
        <div>
            <h1>Shop Search</h1>

            <div class="item">
                <label for="itemInput" class="label">Enter item name</label>
                <input id="itemInput" ref="itemInput" v-model="itemName">
            </div>
            <button @click="searchItem">Search</button>
        </div>

        <RouterView></RouterView>
    </div>
</template>

<style scoped>
.shop-search {
    flex: 1;

    box-sizing: border-box;
    padding: 20px;

    background-color: rgb(234, 234, 234);

    display: flex;
    flex-direction: column;

}

.shop-search label {
    display: block;
}

.shop-search input {
    margin: 2px 0 10px 0;
}

.shop-search button {
    font-size: medium;
    color: rgb(248, 248, 248);
    background-color: black;
    border-radius: 999px;
    padding: 5px 10px;
    border: 0;
    margin-bottom: 20px;
}
</style>