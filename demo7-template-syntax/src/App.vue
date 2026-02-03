<script setup>
import { ref, computed } from 'vue'

const language = "French"
const classes = ["red", "blue"]
const attr = { key: "class", value: 'bold' }

const index = ref(0)

function toggleIndex() {
  index.value = (index.value == 0) ? 1 : 0;
}

const eventName = 'click'

function getEventName() { return 'click' }

function logEvent(event) {
  console.log(event.target.tagName)
}

function logData(data) {
  console.log(data)
}

function logDataAndEvent(data, event) {
  console.log(event.target.tagName)
  console.log(data)
}

function onSubmit() {
  console.log('submitting...')
}

/*** List Rendering ***/

const arr = ref([
  { color: 'red' },
  { color: 'blue' }
])

const obj = {
  one: 'red',
  two: 'blue'
}

function swapItems() {
  let item = arr.value.shift()
  arr.value.push(item)
}

const list = ref([3, 2, 5, 1, 4])

const sortedList = computed(() => {
  // computed refs should not modify the reactive elm
  // Array.sort() modifies in place - so we make a copy first
  return [...list.value].sort()
})

function pushRandomOnList() {
  list.value.push(Math.floor(Math.random() * 9) + 1)
}

/*** Forms ***/

const formData = ref({
  firstName: "",
  lastName: "",
  age: 0,
  isHappy: false,
  color: "",
  size: "",
  fruits: []
})

</script>

<template>
  <main>
    <section>
      <h3>Template Syntax</h3>

      <span>{{ language }}</span><br>
      <span>{{ language.toUpperCase() }}</span><br>
      <span>{{ language.toLowerCase() === "french" ? "Bonjour" : "Hola" }}</span><br><br>

      <span class="blue">Blue</span><br>
      <span v-bind:class="classes[0]">Red</span><br>
      <span :class="classes[1]">Blue</span><br><br>

      <span :[attr.key]="attr.value">bold</span><br><br>
    </section>

    <section>
      <h3>Event Handling</h3>

      <button v-on:click="toggleIndex" class="big" :class="classes[index]">Color</button><br>
      <button @click="toggleIndex" class="big" :class="classes[index]">Color</button><br>
      <button @[eventName]="toggleIndex" class="big" :class="classes[index]">Color</button><br>
      <button @['cl'+'ick']="toggleIndex" class="big" :class="classes[index]">Color</button><br>
      <button @[getEventName()]="toggleIndex" class="big" :class="classes[index]">Color</button><br><br>

      <button @click="logEvent">Log Event</button><br>
      <button @click="logData('hello')">Log data</button><br>
      <button @click="logDataAndEvent('hello', $event)">Log data and event</button><br><br>

      <button @click.prevent="onSubmit">Call event.preventDefault()</button><br>
      <button @click.stop="onSubmit">Call event.stopPropagation()</button><br>
      <button @click.self="onSubmit">Limit handler to self</button><br><br>
    </section>

    <section>
      <h3> List Rendering </h3>
      <li v-for="item in arr">
        <span :class="item.color">{{ item.color }}</span>
      </li>
      <br>

      <div v-for="(item, index) in arr">
        <span :class="item.color">{{ index }}) {{ item.color }}</span>
      </div>
      <br>

      <!-- destructuring item -->
      <li v-for="{ color } in arr">
        <span :class="color">{{ color }}</span>
      </li>
      <br>

      <!-- can also use for-of -->
      <li v-for="item of arr">
        <span :class="item.color">{{ item.color }}</span>
      </li>
      <br>

      <h4> Objects</h4>
      <!-- Iterating over props of an object -->
      <li v-for="value of obj">
        <span :class="value">{{ value }}</span>
      </li>
      <br>

      <li v-for="(value, key) of obj">
        <span :class="value">{{ key }} - {{ value }}</span>
      </li>
      <br>

      <li v-for="(value, key, index) of obj">
        <span :class="value">{{ index }} - {{ key }} - {{ value }}</span>
      </li>
      <br>

      <h4>Ranges</h4>

      <div class="sub-section">
        <div v-for="n in 5">
          {{ n }}
        </div>
      </div>

      <h4>Keys</h4>
      <li v-for="item in arr" :key="item.color">
        <span :class="item.color">{{ item.color }}</span>
      </li>

      <button @click="swapItems">Swap Items</button>
      <br><br>

      <div class="sub-section">
        <div v-for="n in sortedList">
          {{ n }}
        </div>
      </div>
      <button @click="pushRandomOnList">Add Random</button>
    </section>

    <section>
      <h3>Forms</h3>

      <form>
        <label for="firstName">First name</label><br>
        <input
          id="firstName"
          :value="formData.firstName"
          @input="event => formData.firstName = event.target.value"><br>

        <label for="lastName">Last name</label><br>
        <input v-model="formData.lastName"><br>

        <label for="age">Age</label><br>
        <input id="age" v-model.number="formData.age"><br>

        <label for="mood">Happy</label><br>
        <input id="mood" type="checkbox" v-model="formData.isHappy"
            true-value="yes"
            false-value="no"><br>

        <label for="red">Red</label>
        <input id="red" type="radio" v-model="formData.color" value="red">
        
        <label for="blue">Blue</label>
        <input id="blue" type="radio" v-model="formData.color" value="blue"><br>

        <label for="size">Size</label><br>
        <select id="size" v-model="formData.size">
          <option disabled value="">Select one</option>
          <option>Small</option>
          <option>Large</option>
        </select><br>

        <label for="fruits">Fruits</label><br>
        <select id="fruits" v-model="formData.fruits" multiple>
          <option disabled value="">Select many</option>
          <option>Apple</option>
          <option>Pear</option>
        </select>
      </form>

      <h3>Data</h3>
      <ul>
        <li>First name: {{  formData.firstName }}</li>
        <li>Last name: {{ formData.lastName }}</li>
        <li>Age: {{  formData.age }}</li>
        <li>Happy: {{  formData.isHappy }}</li>
        <li>Color: {{  formData.color }}</li>
        <li>Size: {{  formData.size }}</li>
        <li>Fruit: {{ formData.fruits }}</li>
      </ul>
    </section>

  </main>

</template>

<style scoped>
main {
  display: flex;
  gap: 20px;
}

section {
  padding: 20px;
}

label {
  display: inline-block;
  margin-top: 10px;
}

input[type="radio"] {
  margin-right: 20px;
}

.sub-section {
  display: flex;
  gap: 5px;
}

.sub-section > div {
    background-color: gainsboro;
    padding: 3px;
}

.red {
  color: red;
}

.blue {
  color: blue;
}

.bold {
  font-weight: bold;
}

.big {
  font-size: 16px;
  padding: 5px;
}
</style>
