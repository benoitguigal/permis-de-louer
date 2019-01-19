<template lang="html">
    <div class="area">
        <div class="reminder">
            <i class="fas fa-plus"></i>
            <span>
                Rappel
            </span>
            <br>
            <i class="fas fa-cube"></i>
            <p>
                Surface légale <9m2
                <br>
                Hauteur de plafond <2,20m
                <br>
                Volume <20m3
            </p>
        </div>
        <h2>
            Superficie
        </h2>
        <NextStep v-on:click="nextStep()"></NextStep>
    </div>
</template>

<script>
    import NextStep from '@/components/NextStep.vue'

    export default {
        name : 'area',

        components : {NextStep},

        methods : {
            nextStep () {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .area {
        min-height: 775px;
        position: relative;
        padding-left: 80px;

        .next-step {
            position: relative;
            left: -50px;
            margin-top: 100px;
        }

        .reminder {
            left: -320px;

            i.fa-cube {
                font-size: 35px;
                margin-top: 10px;
            }
        }
    }
</style>