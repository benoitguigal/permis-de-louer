<template lang="html">
    <div class="area-size-reminder">
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
        name : 'area-size-reminder'
    }
</script>

<style lang="scss" scoped>
    .area-size-reminder {
        i.fa-cube {
            font-size: 45px;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left: 25px;
        }

        span {
            display: block;
            margin-left: 22px;
        }
    }
</style>