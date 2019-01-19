<template>
    <div class="nav">
        <router-link to="/" class="nav-brand">
            <img src="../assets/logo.svg" alt="logo">
            Propriétaire responsable
        </router-link>

        <router-link to="/about">About</router-link>
    </div>
</template>

<style lang="scss" scoped>
    .nav {
        height: 80px;
        line-height: 59px;
        text-align: right;
        padding: 10px 40px;
        border-bottom: 1px #4c657b solid;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        box-sizing: border-box;
        z-index: 255;
        background: #ffffff;

        .nav-brand {
            float: left;
            color: #2c3e50 !important;

            img {
                width: 20px;
                position: relative;
                top: 4px;
                left: -4px;
            }
        }

        a {
            font-weight: bold;
            color: #2c3e50;
            margin-right: 10px;
            text-decoration: none;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>