<template>
    <div>
        <md-card>
          <md-card-media-cover md-text-scrim>
            <md-card-media md-ratio="16:9">
              <img :src="channel.cover_photo" :alt="channel.name">
            </md-card-media>

            <md-card-area>
              <md-card-header>
                <div class="md-title">{{ channel.name }}</div>
              </md-card-header>

            </md-card-area>
          </md-card-media-cover>
        </md-card>
    </div>
</template>


<script>
export default {
    props: [
        'channel',
    ],
}
</script>

<style scoped>
</style>
