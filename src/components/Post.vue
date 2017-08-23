<template>
    <div class="content">
        <h2>{{ post.title }}</h2>
        <p v-html="post.content">
        </p>
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
                console.log(response);
                return response.json();
            })
            .then(data => {
                this.post = data;
            })
    }
}
</script>

<style>
.content {
    padding: 10px;
}
</style>
