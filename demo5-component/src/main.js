import { createApp } from 'vue'
import App from './App.vue'

import ListA from './components/ListA.vue'
import ListB from './components/ListB.vue'

const app = createApp(App)

app.component('ListA', ListA)
.component('ListB', ListB)

app.mount('#app')
