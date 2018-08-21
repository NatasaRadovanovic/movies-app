import Vue from 'vue'
import Router from 'vue-router';

import AppMovies from './containers/AppMovies.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', redirect: 'movies',  name:'home'},
        {path: '/movies', component: AppMovies, name: 'movie'},
        
      ]
})
