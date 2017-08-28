<template>
<div class="content">
    <md-layout md-align="center" v-if="loadingInProgress">
        <md-spinner md-indeterminate class="md-accent"></md-spinner>
    </md-layout>
    <template v-if="$store.getters.User.isAuthenticated">
        <meritum-card-post v-for="post in posts" :object="post" :key="post.title + post.id"></meritum-card-post>
    </template>
    <meritum-not-authenticated-user-page v-else>
        Aby zobaczyć obserwowane, zaloguj się.
    </meritum-not-authenticated-user-page>
</div>
</template>

<script>
import CardPost from './CardPost.vue'
import NotAuthenticatedUserPage from './NotAuthenticatedUserPage.vue'

import { mapGetters } from 'vuex'

var _ = require('lodash');

export default {
    data() {
        return {
            loadingInProgress: false,
        };
    },
    components: {
        meritumCardPost: CardPost,
        meritumNotAuthenticatedUserPage: NotAuthenticatedUserPage,
    },
    computed: {
        ...mapGetters({
            posts: 'postsFollowed',
        }),
    },
    methods: {
        loadMorePosts(){
            this.$store.dispatch('loadMorePosts').then(() => {
                this.loadingInProgress = false;
            }).catch((response) => console.error(response));
        },
        handleScroll(){
            if (window.scrollY + window.innerHeight >=
                    (document.documentElement.scrollHeight - window.innerHeight / 2)){
                if (!this.loadingInProgress) {
                    this.loadingInProgress = true
                    this.loadMorePosts();
                }
            }
        },
    },
    created() {
        if (_.isEmpty(this.feed)) this.loadMorePosts();
        window.addEventListener('scroll', _.throttle(this.handleScroll, 100));
    }
}
</script>

<style scoped>
.content {
    padding: 10px;
}

.custom-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    width: 100px;
    height: 100px;
}
</style>
