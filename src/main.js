import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from './components/UI/BaseDialog.vue'

const app = createApp(App);

const generalComponents = [
  BaseCard,
  BaseButton,
  BaseDialog,
];

generalComponents.forEach(component => {
  app.component(component.name, component);
})

app.mount('#app')
