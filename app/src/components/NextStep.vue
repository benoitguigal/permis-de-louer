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
    export default {
        name : 'next-step',

        methods : {
            click () {
                this.$emit('click')
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