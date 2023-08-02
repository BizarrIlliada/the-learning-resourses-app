import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'

const app = createApp(App);

const generalComponents = [
  BaseCard,
  BaseButton,
];

generalComponents.forEach(component => {
  app.component(component.name, component);
})

app.mount('#app')
