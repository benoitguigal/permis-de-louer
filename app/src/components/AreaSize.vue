<template lang="html">
    <div class="area">
        <div class="size">
            <div>
                <label>
                    Surface du logement (en m2)
                </label>
                <vue-slider ref="slider" v-model="size" :max="100"
                            :width="200"
                            :tooltip="'always'"
                            tooltip-dir="bottom"
                ></vue-slider>
            </div>
            <br>
            <div>
                <label>
                    Nombre de pièce
                </label>
                <vue-slider ref="slider" v-model="pieces" :max="5"
                            :width="200"
                            :tooltip="'always'"
                            tooltip-dir="bottom"
                ></vue-slider>
            </div>
        </div>
    </div>
</template>

<script>
    import vueSlider from 'vue-slider-component'
    import TitleStore from '@/store/TitleStore'

    export default {
        name : 'area',

        components : {vueSlider},

        store : TitleStore,

        mounted () {
            this.$store.dispatch('changeTitle', 'Superficies')
        },

        data () {
            return {
                size   : 15,
                pieces : 3
            }
        }
    }
</script>

<style lang="scss" scoped>
    .area {
        padding-left: 80px;

        .size > div {
            margin-bottom: 15px;
        }
    }
</style>