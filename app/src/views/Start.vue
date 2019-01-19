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
                    <img src="../assets/glazing.svg">
                    <p>Un garde-corps est obligatoire aux escaliers ainsi, qu'aux fênetres à plus de 80cm du sol. </p>

            </div>
            <div class="right-part">
                <h2>
                    Votre logement
                </h2>
                <InformationStepper></InformationStepper>
            </div>
        </div>
    </div>
</template>

<script>
    import InformationStepper from '@/components/InformationStepper'

    export default {
        name : 'start',

        components : {InformationStepper}
    }
</script>

<style lang="scss" scoped>
    @mixin flexPart () {
        h2 {
            text-align: center;
        }
    }

    .start {
        .content {
            display: flex;

            .left-part {
                @include flexPart();

                img{
                    width: 100px;
                    margin-left:1em;
                    }
                p{
                    margin:2em;
                }

                background: #ddd;
                flex: 1;
            }

            .right-part {
                @include flexPart();

                background: #eeeeee;
                flex: 2;
            }
        }
    }
</style>