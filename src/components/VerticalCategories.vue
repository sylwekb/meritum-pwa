<template>
    <div class="horizontal-container">
        <meritum-vertical-category
            v-for="category in object"
            :category="category"
            :key="category.id"
        >
        </meritum-vertical-category>
    </div>
</template>


<script>
import VerticalCategory from './VerticalCategory.vue'

export default {
    props: [
        'object',
    ],
    components: {
        meritumVerticalCategory: VerticalCategory,
    }
}
</script>

<style>
</style>
