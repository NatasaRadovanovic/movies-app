import Vue from 'vue'
import Router from 'vue-router';

import AppMovies from './containers/AppMovies.vue';
import AddMovie from './containers/AddMovie.vue';
import Login from './components/Login.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', redirect: 'movies',  name:'home'},
        {path: '/movies', component: AppMovies, name: 'movie'},
        {path: '/add', component: AddMovie, name: 'add-movie'},
        {path: '/login', component: Login, name: 'login' }
        
      ]
})
