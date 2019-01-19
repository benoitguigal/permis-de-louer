<template lang="html">
    <div class="area-size-reminder">
        <Reminder>
            <span>
                Rappel
            </span>
            <br>
            <i class="fas fa-cube"></i>
            <p>
                Surface légale <9m2
                <br>
                Hauteur de plafond <2,20m
                <br>
                Volume <20m3
            </p>
        </Reminder>
    </div>
</template>

<script>
    import Reminder from "@/components/Reminder"

    export default {
        name : 'area-size-reminder',

        components : {Reminder}
    }
</script>

<style lang="scss" scoped>
    .area-size-reminder {
        i.fa-cube {
            font-size: 35px;
            margin-top: 10px;
        }
    }
</style>