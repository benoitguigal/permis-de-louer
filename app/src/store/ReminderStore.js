import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ReminderStore = new Vuex.Store({
    state : {
        currentTabComponent : null
    },

    mutations : {},

    actions : {
        changeReminder (ctx, reminder) {
            this.state.currentTabComponent = reminder
        }
    }
});

export default ReminderStore