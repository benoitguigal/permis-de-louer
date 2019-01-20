<template lang="html">
    <div class="housing">
        <form>
            <div class="housing__type">
                <b>
                    Nature du logement
                </b>
                <br>
                <br>
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

                <br>
                <br>

                <b>
                    S'agit-il d'une copropriété ?
                </b>

                <br>
                <br>

                <label for="housing-cop-1">
                    <input type="radio" value="oui"
                           v-model="housing.cop"
                           id="housing-cop-1"
                    />
                    oui
                </label>
                <br>
                <label for="housing-cop-2">
                    <input type="radio" value="non"
                           v-model="housing.cop"
                           id="housing-cop-2"
                    />
                    non
                </label>

                <br>
                <br>

                <input type="text" placeholder="Adresse du logement" />
                <br>
                <input type="text" placeholder="Ville" />
                <br>
                <input type="text" placeholder="Code postal" />
            </div>
        </form>
    </div>
</template>

<script>
    import TitleStore from '@/store/TitleStore'

    export default {
        name : 'housing',

        store : TitleStore,

        mounted () {
            this.$store.dispatch('changeTitle', 'Logement')
        },

        data () {
            return {
                housing : {
                    type    : '',
                    cop : ''
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

        input[type="text"] {
            margin-bottom: 7px;
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