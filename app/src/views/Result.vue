<template lang="html">
    <div class="result">
        <div class="left-part">
            <div class="result__score">
                score :
                <span>{{ score }}%</span>
            </div>
            <div class="result__details">
                <h2>
                    Éléments critiques
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br>
                    Sed tincidunt congue ligula in rutrum. Morbi nec lacus
                    <br>
                    condimentum, hendrerit mi eu, feugiat.
                </p>
                <h2>
                    Optionnels
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br>
                    Sed tincidunt congue ligula in rutrum. Morbi nec lacus
                    <br>
                    condimentum, hendrerit mi eu, feugiat.
                </p>
            </div>
        </div>
        <div class="right-part">
            <div class="download-details">
                Télécharger le pdf
                <br>
                <button class="is--normal is--default">pdf</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'result',

        data () {
            return {
                score : 40
            }
        }
    }
</script>

<style lang="scss" scoped>
    .result {
        padding-left: 130px;
        padding-top: 50px;


        display: flex;

        .left-part {
            flex: 1;
        }

        .right-part {
            flex: 0 0 200px;
            padding-top: 100px;
        }

        &__score {
            width: 420px;
            height: 100px;
            font-size: 50px;
            text-align: left;
            line-height: 100px;
            padding: 0;

            span {
                float: right;
                font-size: 70px;
            }
        }

        &__details {
            p:first-of-type {
                margin-bottom: 140px;
            }
        }

        .download-details {
            button {
                text-transform: uppercase;
                width: 60px;
                height: 60px;
                line-height: 60px;
                border : none;
                margin-top: 8px;
            }
        }
    }
</style>