import { createApp } from 'vue'
import App from './App.vue'

import BlockA from './components/BlockA.vue'
import BlockB from './components/BlockB.vue'

const app = createApp(App)

app.component('BlockA', BlockA)
.component('BlockB', BlockB)

app.mount('#app')
