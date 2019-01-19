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

                <component v-bind:is="currentTabComponent"></component>
            </div>
            <div class="center-part">
                <div class="wrapper">
                    <h2>
                        Votre logement
                    </h2>
                    <InformationStepper></InformationStepper>
                </div>
            </div>
            <div class="right-part">
                <Stepper></Stepper>
            </div>
        </div>
    </div>
</template>

<script>
    import InformationStepper from '@/components/InformationStepper'
    import Stepper from '@/components/Stepper'
    import ReminderStore from '@/store/ReminderStore'

    export default {
        name : 'start',

        components : {InformationStepper, Stepper},

        store : ReminderStore,

        mounted () {
            document.body.scrollTop            = 0
            document.documentElement.scrollTop = 0
        },

        computed : {
            currentTabComponent () {
                return this.$store.state.currentTabComponent
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

                background: #ddd;
                flex: 1;
                overflow: hidden;
            }

            .center-part {
                @include flexPart();

                background: #eeeeee;
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