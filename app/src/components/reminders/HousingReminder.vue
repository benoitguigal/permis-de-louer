<template lang="html">
    <div class="template-reminder">
        <span>
            Les données récoltées ne <br>
            font l'objet d'aucun <br>
            traitement.
        </span>

        <router-link to="/conditions-legales" target="_blank">
            Voir les conditions légales
        </router-link>

        <br>

        <i class="fas fa-cube"></i>

        <span>
            Surface légale <9m2
            <br>
            Hauteur de plafond <2,20m
            <br>
            Volume <20m3
        </span>
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

        a {
            margin-left: 22px;
        }

        i.fa-cube {
            font-size: 45px;
            margin-top: 100px;
            margin-bottom: 0;
            margin-left: 25px;
        }
    }
</style>