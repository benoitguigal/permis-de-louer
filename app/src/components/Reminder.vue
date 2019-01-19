<template lang="html">
    <div class="reminder">
        <i class="fas fa-plus"></i>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name : 'reminder',

        props : ['iconClass']
    }
</script>

<style lang="scss" scoped>
    .reminder {
        background-color: #FFD185;
        width: 295px;
        height: 350px;
        padding-left: 37px;
        overflow: hidden;
        padding-top: 68px;
        box-sizing: border-box;
        position: relative;
        left: 5px;

        i.fa-plus {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 40px;
        }

        span {
            font-size: 28px;
            text-transform: capitalize;
            font-weight: 700;
        }

        p {
            font-size: 20px;
            font-weight: 700;
        }
    }
</style>