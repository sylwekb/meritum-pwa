<template>
<div class="phone-viewport">
    <div class="content">
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

<style scoped>
</style>
