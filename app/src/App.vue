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
        padding-top: 80px;
    }
</style>
