<template lang="html">
    <div class="glazing">
        <h2>
            Fenêtres
        </h2>

        <h3>Le vitrage est :</h3>
        <button class="is--default">
            Simple
        </button>

        <button class="is--default">
            Double
        </button>

        <h3>Les fenêtres ont des garde-corps : :</h3>
        <button class="is--default">
            Oui
        </button>

        <button class="is--default">
            Non
        </button>

        <h3>Les pièces principales possèdent elle des fenêtres :</h3>
        <button class="is--default">
            Oui
        </button>

        <button class="is--default">
            Non
        </button>
    </div>
</template>

<script>
    export default {
        name : 'glazing',
    }
</script>

<style lang="scss" scoped>
    .glazing {
        min-height: 600px;
        background-color: #13CE66;
        padding-left: 5%;
    }
</style>