<template>
<div class="content">
    <md-layout md-align="center" v-if="showSpinner">
        <md-spinner md-indeterminate class="md-accent"></md-spinner>
    </md-layout>
    <meritum-card-post v-for="post in posts" :post="post" :key="post.id"></meritum-card-post>
</div>
</template>

<script>
import CardPost from './CardPost.vue'

var _ = require('lodash');

export default {
    data() {
        return {
            posts: [],
            postResource: {},
            limit: 10,
            offset: 0,
            showSpinner: true,
        };
    },
    components: {
        meritumCardPost: CardPost,
    },
    methods: {
        handleScroll(cos){
            if (window.scrollY + window.innerHeight >= (document.documentElement.scrollHeight - 400)){
                this.getPosts();
            }
        },
        getPosts(){
            console.log('offset', this.offset);
            this.showSpinner = true;
            this.postResource.query({limit: 10, offset: this.offset})
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.posts = this.posts.concat(data['results']);
                    this.offset += 10;
                    this.showSpinner = false;
                })
        },
    },
    created() {
      window.addEventListener('scroll', _.throttle(this.handleScroll, 500));
        this.postResource = this.$resource('posts/');
        this.getPosts();
    }
}
</script>

<style scoped>
.content {
    padding: 10px;
}
</style>
