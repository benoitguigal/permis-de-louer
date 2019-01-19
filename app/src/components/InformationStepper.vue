<template lang="html">
    <div class="information-stepper">
        <Glazing>
        </Glazing>
        <Area></Area>
        <Housing></Housing>
        <Glazing></Glazing>
        <AreaSize></AreaSize>
    </div>
</template>

<script>
    import Glazing from '@/components/Glazing.vue'
    import AreaSize from '@/components/AreaSize.vue'
    import Housing from '@/components/Housing.vue'

    export default {
        name : 'information-stepper',

        components : {Glazing, AreaSize, Housing}
    }
</script>

<style lang="css" scoped>
    .information-stepper { 
       
    }


</style>