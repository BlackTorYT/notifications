import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';
import router from './router/router';
//import router from './router'

const app = createApp(App).use(router)

//Глобальная регистрация компонента
components.forEach(component => {
  app.component(component.name, component)
})

app
    .use(router)
    .mount('#app');