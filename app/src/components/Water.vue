<template lang="html">
    <div class="water">
        <form>
            <section>
                <span>
                    évacuation (eau usées)
                </span>
                <br>
                <select v-model="water.evacutation">
                    <option value="Toilettes">Toilettes</option>
                    <option value="Douche">Douche</option>
                    <option value="Lave-vaissable">Lave-vaisselle</option>
                    <option value="Machine à laver">Machine à laver</option>
                </select>
            </section>

            <section>
            <span>
                Adduction (eau potable)
            </span>
                <br>
                <select>
                    <option value="Toilettes">Toilettes</option>
                    <option value="Douche">Douche</option>
                    <option value="Lave-vaissable">Lave-vaisselle</option>
                    <option value="Machine à laver">Machine à laver</option>
                </select>
            </section>
        </form>
    </div>
</template>

<script>
    import TitleStore from '@/store/TitleStore'

    export default {
        name : 'water',

        store : TitleStore,

        data () {
            return {
                water : {
                    evacutation : ''
                }
            }
        },

        mounted () {
            this.$store.dispatch('changeTitle', 'Nature des fuites')
        }
    }
</script>

<style lang="scss" scoped>
    .water {

        form {
            padding-left: 80px;

            section {
                margin-bottom: 15px;
                span {
                    display: block;
                }
            }

            h2 {
                margin-bottom: 20px;
            }

            hr {
                width: calc(100% - 80px);
                position: relative;
                left: -40px;
                margin-top: 50px;
                margin-bottom: 50px;
            }
        }
    }
</style>