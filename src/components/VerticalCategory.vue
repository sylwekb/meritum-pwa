<template>
    <div>
        <md-card>
          <md-card-media-cover md-text-scrim>
            <md-card-media md-ratio="16:9">
              <img :src="category.cover_photo" :alt="category.name">
            </md-card-media>

            <md-card-area>
              <md-card-header>
                <div class="md-title">{{ category.name }}</div>
              </md-card-header>

            </md-card-area>
          </md-card-media-cover>
        </md-card>
    </div>
</template>


<script>
export default {
    props: [
        'category',
    ],
}
</script>

<style scoped>
</style>
