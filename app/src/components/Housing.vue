<template lang="html">
    <div class="housing">
        <form>
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
                    Appartement
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
        </form>
    </div>
</template>

<script>
    import vueSlider from 'vue-slider-component'

    export default {
        name : 'housing',

        components : {vueSlider},

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
                width: 128px;
                display: inline-block;
                cursor: pointer;
                margin-right: 72px;
            }
        }
    }
</style>