<template lang="html">
    <div class="glazing-reminder">
        <h3>
            Garde-corps
        </h3>
        <img src="@/assets/glazing.svg">
        <p>
            Pour toutes fenêtre
            <br>
            à plus de 80cm du sol, <br>
            le garde-corps<br>
            est obligatoire
        </p>
    </div>
</template>

<script>
    export default {
        name : 'glazing-reminder'
    }
</script>

<style lang="scss" scoped>
    .glazing-reminder {
        img {
            width: 100px;
            margin-left: 1em;
        }

        p {
            margin: 2em;
        }
    }
</style>
