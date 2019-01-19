<template>
    <div class="nav">
        <router-link to="/" class="home">
            <i class="fas fa-home"></i> Accueil
        </router-link>
        <router-link to="/sign-in">
            Connexion
        </router-link>
        <router-link to="/sign-up">
            Inscription
        </router-link>

        <router-link to="/about">About</router-link>
    </div>
</template>

<style lang="scss" scoped>
    .nav {
        height: 50px;
        line-height: 50px;
        text-align: right;
        padding: 10px 40px;
        border-bottom: 1px #2c3e50 solid;

        .home {
            float: left;
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