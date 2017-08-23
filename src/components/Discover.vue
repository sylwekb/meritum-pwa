<template>
<div class="content">
    <md-layout md-align="center" v-if="loadingInProgress">
        <md-spinner md-indeterminate class="md-accent"></md-spinner>
    </md-layout>
    <component :is="chooseComponent(element)" v-for="element in feed" :object="element.object" :key="element.object.id">
    </component>
</div>
</template>

<script>
import CardPost from './CardPost.vue'
import VerticalCategories from './VerticalCategories.vue'
import VerticalChannels from './VerticalChannels.vue'

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
        meritumVerticalCategories: VerticalCategories,
        meritumVerticalChannels: VerticalChannels,
    },
    computed: {
        ...mapGetters({
            feed: 'discoverFeed',
        }),
    },
    methods: {
        chooseComponent(element) {
            switch(element.type) {
                case 'post':
                    return 'meritum-card-post';
                case 'categories':
                    return 'meritum-vertical-categories';
                case 'channels':
                    return 'meritum-vertical-channels';
            }
        },
        loadMoreFeed(){
            this.$store.dispatch('loadMoreFeed', () => {
                this.loadingInProgress = false;
            });
        },
        handleScroll(){
            if (window.scrollY + window.innerHeight >=
                    (document.documentElement.scrollHeight - window.innerHeight / 2)){
                if (!this.loadingInProgress) {
                    this.loadingInProgress = true
                    this.loadMoreFeed();
                }
            }
        },
    },
    created() {
        let resource = this.$resource('discover/');
        this.$store.commit('setDiscoverResource', resource);
        this.loadMoreFeed();
        window.addEventListener('scroll', _.throttle(this.handleScroll, 100));
    }
}
</script>

<style scoped>
.content {
    padding: 10px;
}
</style>
