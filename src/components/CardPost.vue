<template>
    <div @click="goToPost">
    <md-card>

        <md-card-header>

                <md-avatar>
                    <img :src="post.channel.avatar" :alt="post.channel.name">
                </md-avatar>

                <div class="md-title">{{ post.channel.name }}</div>
                <div class="md-subhead">{{ post.datetime_created | timeAgo }}</div>

                <md-chip style="float: right; margin-top: -35px;" class="md-accent">

                    {{ post.votes_count }}
                </md-chip>


        </md-card-header>

      <md-card-media-cover md-text-scrim md-solid>
        <md-card-media md-ratio="16:9">
          <img :src="post.cover_photo">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <div class="md-title">{{ post.title }}</div>
            <div class="md-subhead">
            <md-icon>access_time</md-icon>

            {{ post.read_time | readTime }} czytania
            </div>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>

    </md-card>
</div>
</template>

<script>
export default {
    props: [
        'post',
    ],
    methods: {
        goToPost(){
            this.$router.push({name: 'post', params: {id: this.post.id }});
        }
    }
}
</script>

<style scoped>
    .md-card {
        margin-bottom: 10px;
    }
</style>

