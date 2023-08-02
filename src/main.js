import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue'

const app = createApp(App);

const generalComponents = [
  BaseCard,
];

generalComponents.forEach(component => {
  app.component(component.name, component);
})

app.mount('#app')
