import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import vueResource  from 'vue-resource';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import VueI18n from 'vue-i18n'
// 加载语言包
import locales from './lang/index.js' 
// vuex的状态管理
import store from './store/index.js' 
Vue.use(VueI18n);
Vue.use(vueResource);
Vue.use(ElementUI);
Vue.config.lang = window.navigator.languages[1];
// Vue.config.lang = 'zh';
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
