import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const state = {
    postsFollowed: [],
    limit: 10,
    offsetFollowed: 0,
    postResource: this.$resource('posts/'),
}

const getters = {
    postsFollowed: state => state.postsFollowed,
    limit: state => state.limit,
    offsetFollowed: state => state.offsetFollowed,
}

const mutations = {
    addPostsFollowed(state, payload) {
        state.postsFollowed.push(...payload);
    },
    nextOffsetFollowed(state) {
        state.offsetFollowed += 10;
    },
}

const actions = {
    loadMorePosts(state) {

    }
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})
