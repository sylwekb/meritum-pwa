<template>
<div class="content">
    <md-layout md-align="center" v-if="loadingInProgress">
        <md-spinner md-indeterminate class="md-accent"></md-spinner>
    </md-layout>
    <meritum-card-post v-for="post in posts" :object="post" :key="post.title + post.id"></meritum-card-post>
</div>
</template>

<script>
import CardPost from './CardPost.vue'
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
        this.loadMorePosts();
        window.addEventListener('scroll', _.throttle(this.handleScroll, 100));
    }
}
</script>

<style scoped>
.content {
    padding: 10px;
}
</style>
