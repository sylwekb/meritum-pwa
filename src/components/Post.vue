<template>
<div class="content">
    <md-layout md-align="center" v-if="!computedPost">
        <md-spinner md-indeterminate class="md-accent"></md-spinner>
    </md-layout>
    <template v-if="computedPost">
        <h2>{{ computedPost.title }}</h2>
        <img :src="computedPost.cover_photo">
        <p class="text" v-html="computedPost.content">
        </p>
    </template>
    <div style="height: 50px"></div>
</div>
</template>

<script>
import Api from '../api'

export default {
    data(){
        return {
            apiPost: null,
        }
    },
    props: [
        'post',
    ],
    computed: {
        computedPost() {
            if (this.post){
                return this.post;
            }
            return this.apiPost
        },
    },
    created() {
        if (!this.post) {
            Api.posts.getPost({id: this.$route.params.id})
                .then( ({ data }) => {
                    this.apiPost = data;
                });
        }
        else window.scrollTo(0, 0);
    },
}
</script>

<style scoped>
.content {
    padding: 10px;
}

.text {
    text-align: justify;
    text-justify: inter-word;
}
</style>
