<template>
    <div>
        <meritum-vertical-channel
            v-for="channel in object"
            :channel="channel"
            :key="channel.id"
        >
        </meritum-vertical-channel>
    </div>
</template>


<script>
import VerticalChannel from './VerticalChannel.vue'

export default {
    props: [
        'object',
    ],
    components: {
        meritumVerticalChannel: VerticalChannel,
    }
}
</script>
