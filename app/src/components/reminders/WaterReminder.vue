<template lang="html">
    <div class="water-reminder">
        <div class="is--flex">
            <div>
                Évacutation
                <br>
                <span>
                Ø 40mm
            </span>
            </div>
        </div>
        <div class="is--flex">
            <div>
                Adduction
                <br>
                <span>
                Ø 25 mm
            </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'water-reminder'
    }
</script>

<style lang="scss" scoped>
    .water-reminder {
        width: 100%;
        height: 125px;
        display: flex;
        background: #49559c;
        position: absolute;
        right: 0;

        div.is--flex {
            flex: 1;
            color: white;
            font-size: 17px;
            display: flex;
            align-items: center;

            &:first-of-type {
                padding-left: 14px;
            }

            span {
                opacity: 0.8;
                font-size: 15px;
                display: block;
                margin-top: 10px;
            }
        }
    }
</style>