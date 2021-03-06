// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import javascript_time_ago from 'javascript-time-ago'

javascript_time_ago.locale(require('javascript-time-ago/locales/en'))
const time_ago_english = new javascript_time_ago('en-US')

import App from './App'
import { routes } from './routes'
import store from './store/store'

Vue.use(VueMaterial);
Vue.use(VueRouter);

Vue.filter('timeAgo', value => {
    let dateObject = Date.parse(value);
    return time_ago_english.format(dateObject);
});

Vue.filter('readTime', value => {
    let pieces = value.split(':');
    let hour = parseInt(pieces[0], 10);
    let minute = parseInt(pieces[1], 10);
    let second = parseInt(pieces[2], 10);

    let seconds = 3600 * hour + 60 * minute + second;
    return Math.round(seconds / 60) + ' min'

});

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        return {x: 0, y: 0};
    },
    mode: 'history',
})

Vue.mixin({
    methods: {
        goToPost(post) {
            this.$router.push({name: 'post', params: {id: post.id, post: post}});
        },
    },
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})
