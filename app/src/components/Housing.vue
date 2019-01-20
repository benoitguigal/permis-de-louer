<template lang="html">
    <div class="housing">
        <form>
            <div class="housing__type">
                <label for="housing-type-1">
                    <input type="radio" value="appartement"
                           v-model="housing.type"
                           id="housing-type-1"
                    />
                    Appartement
                </label>
                <br>
                <label for="housing-type-2">
                    <input type="radio" value="maison"
                           v-model="housing.type"
                           id="housing-type-2"
                    />
                    Maison
                </label>
            </div>

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
        </form>
    </div>
</template>

<script>
    import vueSlider from 'vue-slider-component'
    import TitleStore from '@/store/TitleStore'

    export default {
        name : 'housing',

        components : {vueSlider},

        store : TitleStore,

        mounted () {
            this.$store.dispatch('changeTitle', 'Nature du logement')
        },

        data () {
            return {
                housing : {
                    type    : '',
                    surface : 5
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .housing {
        form {
            padding-left: 80px;
        }

        span {
            margin-bottom: 6px;
            display: inline-block;
        }

        &__type {
            margin-bottom: 35px;

            label {
                width: 120px;
                display: inline-block;
                cursor: pointer;
                margin-right: 72px;

                input {
                    position: relative;
                    top: -2px;
                    margin-right: 4px;
                }
            }
        }
    }
</style>