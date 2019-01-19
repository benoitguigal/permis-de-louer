<template lang="html">
    <div class="information-stepper">
        <component v-bind:is="currentStepComponent"></component>
        <div class="next">
            <NextStep></NextStep>
        </div>
    </div>
</template>

<script>
    import WizardStore from '@/store/WizardStore'
    import NextStep from '@/components/NextStep.vue'

    export default {
        name : 'information-stepper',

        store : WizardStore,

        components : {NextStep},

        watch : {
            currentStepComponent () {
                this.$emit('change-component')
            }
        },

        computed : {
            currentStepComponent () {
                return this.$store.state.currentStepComponent
            }
        }
    }
</script>

<style lang="scss" scoped>
    .information-stepper {
        padding-bottom: 100px;
    }

</style>