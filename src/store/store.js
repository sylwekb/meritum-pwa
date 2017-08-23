import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const state = {
    postsFollowed: [],
    limit: 10,
    offsetFollowed: 0,
    postResource: {},
}

const getters = {
    postsFollowed: state => state.postsFollowed,
    limit: state => state.limit,
    offsetFollowed: state => state.offsetFollowed,
    postResource: state => state.postResource,
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
    }
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
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})
