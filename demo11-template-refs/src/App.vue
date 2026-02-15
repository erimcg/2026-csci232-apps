<script setup>
import { useTemplateRef, ref, onMounted, watchEffect, watch, nextTick } from 'vue';
import PillButton from './components/PillButton.vue';

const input = useTemplateRef('input')

const data = ref({
  email: ""
})

/** 
*   You can only access a template ref after the element is mounted in the DOM
***/
//input.value.focus()     // bad!  not mounted yet

onMounted(() => {
  input.value.focus()     // ok
})

/*** 
 *   You cannot watch the value property of an input template ref.
 *   The template ref is shallow and only the input element itself is reactive 
 ***/

const isGmail = ref(false)

watchEffect(() => {
  //isGmail.value = input.value?.value.toLowerCase().includes("@gmail.com")   // bad!
  isGmail.value = data.value.email.toLowerCase().includes("@gmail.com")   // ok
})

/** Using template ref on child component 
 * count is exposed via the child - and is reactive ***/

const button = useTemplateRef('button')
const label = ref('Lock in')

watchEffect(() => {
  if (button.value) {
    label.value = button.value.count.toString()
  }
})

/** 
*  When you use a template ref in v-for 
*  the template ref holds an array of elements 
***/

const numBoxes = ref(5)
const boxes = useTemplateRef("boxes")

onMounted(() => {

  boxes.value.forEach((box, index) => {
    box.innerHTML = index
  })

})

//watchEffect(() => {         // can not watch the array - the array does not change - the contents do
watch(numBoxes, async () => {

  //await nextTick()    // wait for DOM to finish rendering previous changes

  if (boxes.value) {
    boxes.value.forEach((box, index) => {
      box.innerHTML = index
    })
  }

}, { flush: 'post'})   // or wait for DOM to finish rendering previous changes
//})

function insertBox() {
  numBoxes.value++
}

</script>

<template>
  <main>
    <h1>Template Refs</h1>

    <div>
      <section>
        <label for="email">Email</label><br>
        <input id="email" type="email" v-model="data.email" ref="input"><br>
        <span v-if="isGmail == true" class="warning">Using Gmail account</span><br><br>
      </section>

      <section class="button-section">
        <PillButton ref="button" :label /><br>

        <div class="pill">
          <span>{{ button?.count.toString(16) }}</span>
        </div>
      </section>

      <section class="box-section" @click="insertBox">
        <div v-for="item of numBoxes" class="red-box" ref="boxes">
          &ZeroWidthSpace;
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 20px;
}

main>div {
  display: flex;
  gap: 50px;
}

main>div>section {
  flex: 1 0 0;

  border: 1px gainsboro solid;
  padding: 10px;
}

.warning {
  display: inline-block;
  margin-block: 5px;
  color: red;
  font-size: small;
}

.button-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pill {
  background-color: gainsboro;

  padding: 8px 32px;
  border: none;
  cursor: pointer;
  border-radius: 999px;
}

.text-block {
  display: flex;
}

.box-section {
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
}

.red-box {
  width: 30px;
  aspect-ratio: 1 / 1;

  background-color: red;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
}
</style>
