<template lang="html">
    <div class="start">
        <h1>
            Le diagnotic
        </h1>

        <div class="content">
            <div class="left-part">
                <h2>
                    Vos informations
                </h2>
                <component v-bind:is="currentReminder"></component>
            </div>
            <div class="center-part">
                <div class="wrapper">
                    <InformationStepper v-on:change-component="scroll()"></InformationStepper>
                </div>
            </div>
            <div class="right-part">
                <Stepper></Stepper>
            </div>
        </div>
    </div>
</template>

<script lang="js">
    import InformationStepper from '@/components/InformationStepper'
    import Stepper from '@/components/Stepper'
    import ReminderStore from '@/store/ReminderStore'
    import WizardStore from '@/store/WizardStore'

    export default {
        name : 'start',

        components : {InformationStepper, Stepper},

        store : ReminderStore,

        mounted () {
            document.body.scrollTop            = 0
            document.documentElement.scrollTop = 0

            WizardStore.dispatch('reset')
            ReminderStore.dispatch('reset')
        },

        methods : {
            scroll () {
                document.getElementsByClassName('center-part')[0].scrollTop = 0
            }
        },

        computed : {
            currentReminder () {
                return this.$store.state.currentReminder
            }
        }
    }
</script>

<style lang="scss" scoped>
    @mixin flexPart() {
        h2 {
            text-align: center;
        }
    }

    .start {

        width: 100%;
        height: 100%;
        overflow: hidden;

        .content {
            display: flex;
            height: 100%;

            .left-part {
                @include flexPart();

                background: #f6f6f6;
                flex: 1;
                overflow: hidden;
                position: relative;
            }

            .center-part {
                @include flexPart();

                /*background: #eeeeee;*/
                flex: 2;
                height: 98%;
                overflow: scroll;
            }

            .right-part {
                @include flexPart();

                flex: 0 0 100px;
                height: 100%;
            }
        }
    }
</style>