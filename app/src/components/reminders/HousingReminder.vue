<template lang="html">
    <div class="template-reminder">

        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
        <input type="text" placeholder="Téléphone" />
        <span>
            Les données récoltées ne <br>
            font l'objet d'aucun <br>
            traitement.
        </span>

        <router-link to="/conditions-legales" target="_blank">
            Voir les conditions légales
        </router-link>
    </div>
</template>

<script>
    export default {
        name : 'template-reminder'
    }
</script>

<style lang="scss" scoped>
    .template-reminder {

        span {
            padding: 22px;
            display: block;
        }

        input {
            margin-bottom: 7px;
            margin-left: 22px;
        }

        a {
            margin-left: 22px;
        }
    }
</style>