import { createApp } from 'vue'

import 'ant-design-vue/lib/style/themes/default.less';

import App from './App'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
