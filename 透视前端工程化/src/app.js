import Vue from 'vue';
import App from './app.vue';
import router from './router/index.js';
import print from './print.js';
print();
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('接收更新后的模块');
        print();
    })
}