<template lang="html">
    <div class="glazing">
        <h2>
            Fenetres
        </h2>
        <NextStep></NextStep>
    </div>
</template>

<script>
    import NextStep from '@/components/NextStep'

    export default {
        name : 'glazing',

        components : {NextStep}
    }
</script>

<style lang="scss" scoped>
    .glazing {
        min-height: 775px;
    }
</style>