import Vue from 'vue'
import Vuex from 'vuex'

import Api from '../api';

var querystring = require('querystring');

Vue.use(Vuex);

const state = {
    discoverFeed: [],
    limit: 20,
    offsetDiscover: 0,
    offsetFollowed: 0,
    postsFollowed: [],
    User: {
        isAuthenticated: false,
    },
}

const getters = {
    discoverFeed: state => state.discoverFeed,
    limit: state => state.limit,
    offsetDiscover: state => state.offsetDiscover,
    offsetFollowed: state => state.offsetFollowed,
    postsFollowed: state => state.postsFollowed,
    User: state => state.User,
}

const mutations = {
    addPostsFollowed(state, payload) {
        state.postsFollowed = [...state.postsFollowed, ...payload];
    },
    nextOffsetFollowed(state) {
        state.offsetFollowed += state.limit;
    },
    addDiscoverFeed(state, payload) {
        state.discoverFeed.push(...payload);
    },
    nextOffsetDiscover(state) {
        state.offsetDiscover += state.limit;
    },
    setUser(state, payload) {
        state.User = payload;
        state.User.isAuthenticated = true;
    }
}

const actions = {
    loadMorePosts(context) {
        return Api.posts.getPosts(
            {
                limit: context.getters.limit,
                offset: context.getters.offsetFollowed,
            })
            .then( ({ data }) => {
                context.commit('nextOffsetFollowed');
                context.commit('addPostsFollowed', data['results']);
            })
    },
    loadMoreFeed(context) {
        return Api.discover.getDiscoverFeed(
            {
                limit: context.getters.limit,
                offset: context.getters.offsetDiscover,
            })
            .then( ({ data }) => {
                context.commit('nextOffsetDiscover');
                context.commit('addDiscoverFeed', data['results']);
            })
    },
    authenticate(context, payload) {
        return Api.auth.login(payload)
            .then( ({ data }) => {
                console.log("Then", data)
                context.commit('setUser', data);
            });
    },
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})
