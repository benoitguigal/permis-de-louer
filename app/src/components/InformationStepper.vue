<template lang="html">
    <div class="information-stepper">
        <Glazing></Glazing>
        <Area></Area>
    </div>
</template>

<script>
    import Glazing from '@/components/Glazing.vue'
    import Area from '@/components/Area.vue'

    export default {
        name : 'information-stepper',

        components : {Glazing, Area}
    }
</script>

<style lang="scss" scoped>
    .information-stepper {

    }
</style>