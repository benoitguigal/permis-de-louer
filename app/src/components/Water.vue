<template lang="html">
    <div class="water">
        <form>
            <h2>
                Nature des fuites
            </h2>

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
            <hr>
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
    export default {
        name : 'water',

        data () {
            return {
                water : {
                    evacutation : ''
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .water {

        form {
            padding-left: 80px;

            section {
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