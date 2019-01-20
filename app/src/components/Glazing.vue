<template lang="html">
    <div class="glazing">
        <h2>
            Vitrage
        </h2>

        <h3>Le vitrage est :</h3>

        <div>
            <label for="simple">
                <input id="simple" type="radio" v-model="glazing.type"/> Simple
            </label>
            <label for="double">
                <input id="double" type="radio" v-model="glazing.type"/> Double
            </label>
        </div>

        <h3>Les fenêtres ont des garde-corps :</h3>

        <div>
            <label for="oui">
                <input id="oui" type="radio" v-model="glazing.type"/> Oui
            </label>
            <label for="non">
                <input id="non" type="radio" v-model="glazing.type"/> Non
            </label>
        </div>

        <h3>Les pièces principales possèdent elle des fenêtres :</h3>
        <div>
            <label for="principal-oui">
                <input id="principal-oui" type="radio" v-model="glazing.type"/> Oui
            </label>
            <label for="principal--non">
                <input id="principal--non" type="radio" v-model="glazing.type"/> Non
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'glazing',

        data () {
            return {
                glazing : {
                    type : ''
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .glazing {
        padding-left: 80px;
    }
</style>