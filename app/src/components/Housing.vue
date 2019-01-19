<template lang="html">
    <div class="housing">
        <form v-on:submit.prevent="">
            <span>
                Nature du logement
            </span>

            <br>

            <div class="housing__type">
                <label for="housing-type-1">
                    <input type="radio" value="appartement"
                           v-model="housing.type"
                           id="housing-type-1"
                    />
                    Apparement
                </label>
                <label for="housing-type-2">
                    <input type="radio" value="maison"
                           v-model="housing.type"
                           id="housing-type-2"
                    />
                    Maison
                </label>
            </div>

            <br>

            <div class="housing__size">
                <label>
                    Surface du logement (en m2)
                </label>
                <vue-slider ref="slider" v-model="housing.surfece" :max="100"
                            :width="200"
                            :tooltip="'always'"
                            tooltip-dir="bottom"
                ></vue-slider>
            </div>

            <div class="next">
                <NextStep v-on:click="nextStep()"></NextStep>
            </div>
        </form>
    </div>
</template>

<script>
    import vueSlider from 'vue-slider-component'
    import NextStep from '@/components/NextStep'

    export default {
        name : 'housing',

        components : {vueSlider,NextStep},

        data () {
            return {
                housing : {
                    type    : '',
                    surface : 5
                }
            }
        },

        methods : {
            nextStep () {
                alert ('nextStep')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .housing {
        padding-left: 80px;
        min-height: 530px;
        position: relative;

        .next-step {
            position: relative;
            left: -80px;
            margin-top: 100px;
        }

        span {
            margin-bottom: 6px;
            display: inline-block;
        }

        &__type {
            margin-bottom: 35px;

            label {
                width: 128px;
                display: inline-block;
                cursor: pointer;
                margin-right: 72px;
            }
        }
    }
</style>