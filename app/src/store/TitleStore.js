import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const TitleStore = new Vuex.Store({
    state : {
        title : ''
    },

    actions : {
        changeTitle (ctx, title) {
            ctx.state.title = title
        }
    }
});

export default TitleStore