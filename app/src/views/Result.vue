<template lang="html">
    <div class="result">
        <div class="result__score">
            <h1>
                Votre score
            </h1>
            <Score></Score>
        </div>

        <div class="wrapper">
            <div class="left-part">
                <div class="result__details">
                    <div>
                        <h2>
                            Éléments critiques
                        </h2>
                        <p>
                            <b class="is--underline">
                                Surface non conforme
                            </b>
                            <br>
                            Un aménagement est à prévoir. Attention à la démolition d'une
                            <br/>
                            cloison : ce travail ne peut être effectué seul, il necéssite
                            <br/>
                            l'intervention d'un expert. Sa fonction est
                            <br/>
                            essentielle pour maintenir la charpente et les planchers.
                            <br/>
                            Cette tâche nécessite des autorisations.
                        </p>
                        <p>
                            <b>
                                Un dossier avec les devis de l'entreprise de maçonnerie, de
                                <br/>
                                l'architecte de l'immeuble et du
                                <br/>
                                BET (Bureau d'Etudes Techniques)
                            </b>
                        </p>
                    </div>
                    <div>
                        <h2>
                            Optionnels
                        </h2>
                        <p>
                            <b class="is--underline">
                                Fuite d'eau à un robinet
                            </b>
                            <br>

                            Un joint de robinet usé cause une augmentation des charges lié
                            <br/>
                            à la consomation d'eau. A terme la fuite peut déteriorer le
                            <br/>
                            matériel autour (évier, meuble...).
                        </p>

                        <p>
                            <b class="is--underline">Simple vitrage</b>
                            <br/>
                            Le simple vitrage certe éconimique à l'achat, est un très mauvais
                            <br/>
                            isolant thermique. Pour procéder au remplacement d’un vitrage
                            <br/>
                            adapté à la fenêtre, le vitrier va se déplacer pour faire un constat
                            <br/>
                            de l’environnement.
                        </p>
                    </div>
                </div>
            </div>
            <div class="right-part">
                <div class="download-details">
                    Télécharger le pdf
                    <br>
                    <button class="is--normal is--default">pdf</button>
                    <br>
                    <div class="next">
                        <NextStep :content="'Carte des artisans'" v-on:click="showMap()"></NextStep>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NextStep from '@/components/NextStep.vue'
    import Score from '@/components/Score.vue'

    export default {
        name : 'result',

        components : {NextStep, Score},

        data () {
            return {
                score : 40
            }
        },

        methods : {
            showMap () {
                this.$router.push({name : 'map'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .result {
        padding-top: 50px;

        .wrapper {
            display: flex;
            padding-left: 100px;
        }

        .next {
            text-align: left;
            display: inline-block;
            margin-top: 15px;
        }

        .left-part {
            flex: 1;
        }

        .right-part {
            flex: 0 0 250px;
            padding-top: 100px;
        }

        &__score {
            text-align: center;
            margin-bottom: 30px;

            h1 {
                margin-top: 0;
            }
        }

        &__details {
            width: 100%;

            div {
                padding-bottom: 10px;
            }

            p {
                b {
                    display: block;

                    &.is--underline {
                        text-decoration: underline;
                    }
                }
            }
        }

        .download-details {
            button {
                text-transform: uppercase;
                width: 60px;
                height: 60px;
                line-height: 60px;
                border: none;
                margin-top: 8px;
            }
        }
    }
</style>