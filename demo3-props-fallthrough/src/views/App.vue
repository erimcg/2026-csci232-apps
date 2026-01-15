<script setup>
import { ref } from 'vue'
import PropBlockA from '@/components/PropBlockA.vue';
import PropBlockB from '@/components/PropBlockB.vue';
import PropBlockC from '@/components/PropBlockC.vue';
import FallthroughBlockA from '@/components/FallthroughBlockA.vue';
import FallthroughBlockB from '@/components/FallthroughBlockB.vue';
import ClassBlockA from '@/components/ClassBlockA.vue';
import ClassBlockB from '@/components/ClassBlockB.vue';
import ClassBlockC from '@/components/ClassBlockC.vue';
import StyleBlockA from '@/components/StyleBlockA.vue';

const name = 'Shelby'

const getFirstName = () => {
  return 'Briana'
}

const firstName = ref('Kai')

const addr = {
  street: '123 Main Street'
}

const props = ref({
  firstName: 'Cecil',
  getLastName: () => {
    return "Jones"
  },
  address: {
    street: '789 Willow Ave'
  },
})

const props2 = ref({
  getFirstName: () => {
    return firstName.value
  },
  setFirstName: (name) => {   // bad use of prop!!
    firstName.value = name
  }
})

const props3 = {
  name: "Micky",
  age: 23,
  //status: null
  status: 'unknown'
}

const animal = "Koala"
</script>

<template>
  <div class="view">
    <section>
      <h3>Props</h3>

      <PropBlockA first-name="Mustafa" />
      <PropBlockA v-bind:first-name="firstName" />
      <PropBlockA :first-name="getFirstName()" />
      <PropBlockA :first-name="'Betty' + ' Sue'" />
      <PropBlockA :first-name="`${name}`" />

      <PropBlockA first-name="Sam" :address="{ street: '456 Maple Way' }" />
      <PropBlockA first-name="Kyle" :address="addr" />

      <PropBlockA v-bind="props" />
    </section>

    <section>
      <h3> Bad props</h3>

      <PropBlockB v-bind="props2" /> <!-- bad!! passing function-->
    </section>

    <section>
      <h3>v-bind Props</h3>

      <PropBlockC v-bind="props3" />
    </section>

    <section>
      <h3> Fallthrough Attr</h3>

      <FallthroughBlockA class="fallthrough" data-adjective="Furry" :data-noun="animal" />

      <FallthroughBlockB class="fallthrough" data-adjective="Furry" :data-noun="animal" />

      <FallthroughBlockB class="fallthrough" data-adjective="Furry" :data-noun="animal" />
    </section>

    <section>
      <h3>Class Bindings</h3>

      <ClassBlockA />
      <ClassBlockB />
      <ClassBlockC />
    </section>

    <section>
      <h3>Style Bindings</h3>

      <StyleBlockA />
    </section>

  </div>
</template>

<style scoped>
.view {
  margin: 20px;

  display: flex;
  gap: 10px;
}

section {
  background-color: gainsboro;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;
}

.fallthrough {
  background-color: #e2cccc;
  margin-block: 20px;
  padding: 5px;
}
</style>
