import Vue from 'vue'
import Router from 'vue-router';

import AppMovies from './containers/AppMovies.vue';
import AddMovie from './containers/AddMovie.vue';
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import MovieDetail from './components/MovieDetail.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', redirect: 'movies',  name:'home',  meta: { requiresAuth: true }},
        {path: '/movies', component: AppMovies, name: 'movie', meta: { requiresAuth: true }},
        {path: '/add', component: AddMovie, name: 'add-movie', meta: { requiresAuth: true }},
        {path: '/login', component: Login, name: 'login' },
        {path: '/register', component: Register, name: 'register'},
        {path: '/movies/:id', component: MovieDetail, name: 'single-movie',  meta: { requiresAuth: true }}
        
      ],
})
