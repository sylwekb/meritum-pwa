<template>
    <div class="content">
        <h2>{{ post.title }}</h2>
        <img :src="post.cover_photo">
        <p class="text" v-html="post.content">
        </p>
        <div style="height: 50px"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {},
            postResource: {},
        }
    },
    created() {
        this.postResource = this.$resource('posts/' + this.$route.params.id + '/');
        this.postResource.get()
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.post = data;
            })
    }
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
