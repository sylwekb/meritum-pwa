<template>
<div class="phone-viewport">
    <div class="contet">
        <router-view></router-view>
    </div>
    <meritum-nav-bar></meritum-nav-bar>

</div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
    components: {
        meritumNavBar: Navigation,
    }
}

</script>

<style>

</style>
