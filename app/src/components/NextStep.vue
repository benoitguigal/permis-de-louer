<template lang="html">
    <div class="next-step">
        <button class="is--primary is--normal" v-on:click="click()">
            Étape suivant
        </button>
        <br>
        <i class="fas fa-angle-down" v-on:click="click()"></i>
    </div>
</template>

<script>
    import WizardStore from '@/store/WizardStore'

    export default {
        name : 'next-step',

        store : WizardStore,

        methods : {
            click () {
                this.$store.dispatch('nextStep').then(() => {

                }).catch(() => {
                    this.$router.push({'name' : 'result'})
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .next-step {
        text-align: center;
        display: inline-block;
        margin-left: auto;
        margin-right: auto;

        i {
            font-size: 40px;
            margin-top: 30px;

            &:hover {
                cursor: pointer;
            }
        }
    }
</style>