<template lang="html">
    <div class="glazing-reminder">
        <img src="@/assets/glazing.svg">
        <p>Un garde-corps est obligatoire aux escaliers ainsi, qu'aux fênetres à plus de 80cm du sol. </p>
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
