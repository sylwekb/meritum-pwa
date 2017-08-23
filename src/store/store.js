import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const state = {
    discoverFeed: [],
    discoverResource: {},
    limit: 20,
    offsetDiscover: 0,
    offsetFollowed: 0,
    postResource: {},
    postsFollowed: [],
}

const getters = {
    discoverFeed: state => state.discoverFeed,
    discoverResource: state => state.discoverResource,
    limit: state => state.limit,
    offsetDiscover: state => state.offsetDiscover,
    offsetFollowed: state => state.offsetFollowed,
    postResource: state => state.postResource,
    postsFollowed: state => state.postsFollowed,
}

const mutations = {
    addPostsFollowed(state, payload) {
        state.postsFollowed.push(...payload);
    },
    nextOffsetFollowed(state) {
        state.offsetFollowed += 10;
    },
    setPostsResource(state, payload) {
        state.postResource = payload;
    },
    addDiscoverFeed(state, payload) {
        state.discoverFeed.push(...payload);
    },
    nextOffsetDiscover(state) {
        state.offsetDiscover += 10;
    },
    setDiscoverResource(state, payload) {
        state.discoverResource = payload;
    },
}

const actions = {
    loadMorePosts(context, callback) {
        context.getters.postResource.query(
            {
                limit: context.getters.limit,
                offset: context.getters.offsetFollowed,
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                context.commit('nextOffsetFollowed');
                context.commit('addPostsFollowed', data['results']);
                callback();
            })
    },
    loadMoreFeed(context, callback) {
        context.getters.discoverResource.query(
            {
                limit: context.getters.limit,
                offset: context.getters.offsetDiscover,
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                context.commit('nextOffsetDiscover');
                context.commit('addDiscoverFeed', data['results']);
                callback();
            })
    },
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})
