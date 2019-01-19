<template lang="html">
    <div class="information-stepper">
        <component v-bind:is="currentStepComponent"></component>
    </div>
</template>

<script>
    import WizardStore from '@/store/WizardStore'

    export default {
        name : 'information-stepper',

        store : WizardStore,

        computed : {
            currentStepComponent () {
                return this.$store.state.currentStepComponent
            }
        }
    }
</script>

<style lang="css" scoped>
    .information-stepper {

    }


</style>