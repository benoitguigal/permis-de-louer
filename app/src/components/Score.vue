<template lang="html">
    <div class="score">
        <div v-for="(val, index) in colors"
             v-bind:style="getStyle(val, index)"
             v-bind:class="{'is--selected' : index === current}"
        >
            {{ index }}
        </div>
    </div>
</template>

<script>
    export default {
        name : 'score',

        methods : {
            getStyle (val, index) {
                return {
                    'background-color' : val,
                    // 'outline-color' : val,
                }
            }
        },

        data () {
            return {
                current : 'd',
                colors : {
                    a : '#038141',
                    b : '#85BB30',
                    c : '#FECB03',
                    d : '#EE8101',
                    e : '#E63D12'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $width : 100px;

    .score {
        width: $width * 5;
        display: inline-flex;
        height: 80px;
        line-height: 80px;
        text-align: center;
        text-transform: uppercase;
        font-size: 50px;

        div {
            flex: 1;
            color : rgba(255, 255, 255, 0.6);

            &.is--selected {
                color : white;
                outline : 6px transparent solid;
                position: relative;
                z-index: 2;

                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 74%;
                    top: -4px;
                    height: 60%;
                    bottom: 0;
                    left: -9px;
                    right: 0;
                    border-radius: 5px;
                    border: 20px solid #EE8101;
                }
            }

            &:first-of-type {
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
            }
            
            &:last-of-type {
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }
    }
</style>