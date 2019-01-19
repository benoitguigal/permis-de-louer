<template lang="html">
    <div class="area">
        <h2>
            Superficie
        </h2>
        <NextStep v-on:click="nextStep()"></NextStep>
    </div>
</template>

<script>
    import NextStep from '@/components/NextStep.vue'
    import ReminderStore from '@/store/ReminderStore'
    import AreaSizeReminder from "@/components/reminders/AreaSizeReminder"

    export default {
        name : 'area',

        components : {NextStep},

        methods : {
            nextStep () {
                ReminderStore.dispatch('changeReminder', AreaSizeReminder)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .area {
        min-height: 775px;
        position: relative;
        padding-left: 80px;

        .next-step {
            position: relative;
            left: -50px;
            margin-top: 100px;
        }
    }
</style>