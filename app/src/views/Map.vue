<template lang="html">
    <div class="artisan-map">
        <h1>
            Cartes des artisans
        </h1>
        <div class="map-container">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle is--third"></div>
            <div class="circle is--four"></div>
            <img src="@/assets/map.png" alt="map">
            <div class="map-card">
                <h3>Artisan 1</h3>
                <span>
                    Compétences
                </span>
                <address>
                    Artisant 1
                    <br/>
                    1 rue hoche
                    <br/>
                    Marseille 13001<br/>
                    artisant1@mail.com<br/>
                    06 00 00 00 00
                </address>
                <button class="is--small is--default">
                    Envoyer mon diagnotic à l'artisant
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'artisan-map'
    }
</script>

<style lang="scss" scoped>
    .artisan-map {

        h1 {
            text-align: left;
            padding-left: 80px;
        }


        .map-container {
            position: relative;

            img {
                width: 100%;
            }

            .circle {
                background-color: #FFC82C;
                border-radius: 100%;
                width: 36px;
                height: 36px;
                position: absolute;
                top: 35px;
                left: 18px;

                &:first-of-type {
                    left: 135px !important;
                    top: 135px !important;
                }

                &:nth-child(even) {
                    left: 435px;
                    top: 45px;
                }

                &.is--third {
                    left: 435px;
                    top: 345px;
                }

                &.is--four {
                    left: 220px;
                    top: 305px;
                }
            }

            .map-card {
                position: absolute;
                top: 69px;
                right: 117px;
                background: #ffffff;
                width: 300px;
                padding-left: 41px;
                padding-bottom: 40px;

                address {
                    margin-top: 20px;
                    font-size: 14px;
                    color: rgb(159, 159, 159);
                }

                h3 {
                    color: #47525E;
                    font-size: 40px;
                    font-weight: 700;
                    margin-bottom: 7px;
                }

                span {
                    color: #8190A5;
                    font-size: 18px;
                    font-weight: 400;
                }

                button {
                    margin-top: 34px;
                }
            }
        }
    }
</style>