<template>
<footer class="footer">
    <md-bottom-bar>
        <md-bottom-bar-item :md-active="$router.history.current.name == 'followed'" md-icon="star_rate" class="md-warn">
            <router-link tag="span" class="md-text" :to="{name: 'followed'}">Obserwowane</router-link>
        </md-bottom-bar-item>

        <md-bottom-bar-item :md-active="$router.history.current.name == 'discover'" md-icon="whatshot">
            <router-link tag="span" class="md-text":to="{name: 'discover'}">Odkrywaj</router-link>
        </md-bottom-bar-item>

        <md-bottom-bar-item :md-active="$router.history.current.name == 'profile'" md-icon="person">
            <router-link tag="span" class="md-text" :to="{name: 'profile'}">Profil</router-link>
        </md-bottom-bar-item>
    </md-bottom-bar>
</footer>
</template>


<script>
export default {
    methods: {
        showIt(it) {
            console.log(it);
        }
    }
}
</script>

<style>
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    z-index: 1;
}
</style>
