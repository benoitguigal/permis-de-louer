<template lang="html">
    <div class="next-step">
        <button class="is--primary is--normal" v-on:click="click()">
            {{ label }}
        </button>
        <br>
        <i class="fas fa-angle-down" v-on:click="click()" v-if="showArrow"></i>
    </div>
</template>

<script>
    import WizardStore from '@/store/WizardStore'

    export default {
        name : 'next-step',

        store : WizardStore,

        data () {
            return {
                label : 'Étape suivant',
                showArrow : true
            }
        },

        props : ["content"],

        mounted () {
            if (this.content) {
                this.label = this.content
                this.showArrow = false
            }
        },

        methods : {
            click () {
                if (this.content) {
                    this.$emit('click')
                } else {
                    this.$store.dispatch('nextStep').then(() => {

                    }).catch(() => {
                        this.$router.push({'name' : 'result'})
                    })
                }
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
            margin-top: 10px;

            &:hover {
                cursor: pointer;
            }
        }
    }
</style>