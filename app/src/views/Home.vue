<template>
    <div class="home">
        <div class="slide-container">
            <div id="slide">

            </div>
            <h1>
                Auto-diagnotic et mise en relation
                <br>
                avec des professionnel
            </h1>
            <br>
            <button v-on:click="start()" class="is--default is--large">
                Commencez
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
                let count     = 0
                let left      = 0
                this.interval = setInterval(() => {
                    if (count === this.links.length) {
                        left  = 0
                        count = 0
                    }

                    document.getElementById('slide').style.left = `${left}%`

                    left -= 100
                    count++
                }, 4000)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        width: 100%;
        text-align: center;

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
            overflow: hidden;
            margin-bottom: 1000px;
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
