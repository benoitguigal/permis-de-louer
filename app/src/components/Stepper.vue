<template lang="html">
    <div class="stepper">
        <i v-for="(index) in range" class="far fa-circle"
           v-bind:data-number="index"
           v-bind:class="{'is--active' : index === step}"
        ></i>
        <div class="line"></div>
    </div>
</template>

<script>
    import WizardStore from '@/store/WizardStore'

    export default {
        name : 'stepper',

        store : WizardStore,

        computed : {
            step () {
                return this.$store.state.currentTab + 1
            }
        },

        data () {
            return {
                range   : [1, 2, 3, 4, 5, 6, 7, 8]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .stepper {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - 100px);
        position: relative;

        .line {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 44px;
            height: 100%;
            width: 1px;
            border-left: 2px dotted rgba(#2c3e50, 0.3);
            color: #fff;
            background-color: transparent;
        }

        i {
            font-size: 30px;
            position: relative;
            background: white;
            z-index: 255;

            color: rgba(#2c3e50, 0.3);

            &.is--active {
                color: #2c3e50;

                &:after {
                    color: #2c3e50;
                }
            }

            &:after {
                content: attr(data-number);
                font-size: 18px;
                position: relative;
                text-transform: uppercase;
                color: rgba(#2c3e50, 0.3);
                left: -19px;
                top: -6px;
            }
        }
    }
</style>
