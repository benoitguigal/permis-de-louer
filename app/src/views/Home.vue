<template>
    <div class="home">
        <div class="slide-container">
            <div class="slide__header">
                <h1>
                    Plateforme de mise en relation
                    <br/>
                    Propriétaire-Locataire
                </h1>
            </div>
            <div id="slide">

            </div>
            <header>
                <div class="is--first">
                    Diagnostic appartement
                </div>
                <div class="is--last">
                    <section>
                        <span>échange simplifié</span>
                        <span>
                            Entre bailleur et locataire
                        </span>
                    </section>
                </div>
            </header>

            <button v-on:click="start()" class="is--default is--normal">
                Inscription propriétaire
            </button>

        </div>
    </div>
</template>

<script>
    export default {
        name : 'home',

        data () {
            return {
                links    : [
                    'https://images.unsplash.com/photo-1532339877285-0c24490b8e28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    'https://images.unsplash.com/photo-1477764864052-f721644f01a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    'https://images.unsplash.com/photo-1546552356-3fae876a61ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80',
                    'https://images.unsplash.com/photo-1488257907837-523fe2051fc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
                ],
                interval : null
            }
        },

        mounted () {
            this.createSlide()

            document.body.scrollTop            = 0
            document.documentElement.scrollTop = 0
        },

        destroyed () {
            clearInterval(this.interval)
        },

        methods : {
            start () {
                this.$router.push({name : 'start'})
            },

            appendImageOnLoad (link) {
                return new Promise((resolve) => {
                    let img = new Image()

                    img.onload = () => {
                        document.getElementById('slide').append(img)
                        resolve()
                    }

                    img.style.width    = `${100 / this.links.length}%`
                    img.src            = link
                    img.style.cssFloat = 'left'
                })
            },

            createSlide () {
                let promises = []

                for (let link of this.links) {
                    promises.push(this.appendImageOnLoad(link))
                }

                document.getElementById('slide').style.width = `${promises.length * 100}%`

                Promise.all(promises).then(() => {
                    this.startAnimation()
                })
            },

            startAnimation () {
                let count = 0
                let left  = 0
                // this.interval = setInterval(() => {
                //     if (count === this.links.length) {
                //         left  = 0
                //         count = 0
                //     }
                //
                //     document.getElementById('slide').style.left = `${left}%`
                //
                //     left -= 100
                //     count++
                // }, 4000)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        width: 100%;
        text-align: center;

        header {
            display: flex;
            padding-top: 22px;
            width: 230px * 2;
            margin-left: auto;
            margin-right: auto;

            div {
                flex: 1;
                margin-bottom: 100px;
                height: 60px;
                margin-left: 2px;
                margin-right: 2px;


                span {
                    display: block;
                }

                &.is--first {
                    text-align: right;
                    border-bottom: 8px rgb(142, 207, 101) solid;
                    line-height: 60px;
                    padding-right: 15px;
                }

                &.is--last {
                    text-align: left;
                    padding-left: 15px;
                    align-items: center;
                    border-bottom: 8px rgb(249, 209, 144) solid;

                    section {
                        display: inline-block;
                    }
                }
            }
        }

        svg {
            width: 200px;
            margin-top: 30px;

            path {
                stroke-dasharray: 20;
            }
        }

        h1 {
            text-align: center;
            padding-top: 30px;
        }

        .slide-container {
            width: 100%;
            /*height: 500px;*/
            overflow: hidden;
            margin-bottom: 1000px;
            position: relative;
        }

        .slide__header {
            position: absolute;
            background-color: rgba(198, 198, 198, 0.53);
            width: 450px;
            height: 130px;
            text-align: center;
            color: #FFFFFF;
            font-weight: 700;
            padding-top: 27px;
            top: -250px;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            z-index: 1;
            font-size: 14px;
            box-sizing: border-box;

            h1 {
                margin: 0;
                padding: 0;
            }
        }

        #slide {
            width: 100%;
            height: 500px;
            overflow: hidden;
            left: 0;
            transition: all 1s linear;
            position: relative;
        }
    }
</style>
