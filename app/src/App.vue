<template>
    <div id="app">
        <Nav></Nav>
        <router-view/>
    </div>
</template>

<script>
    import Nav from '@/components/Nav.vue'

    export default {
        components : {Nav}
    }
</script>

<style lang="scss">
    html, body {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
