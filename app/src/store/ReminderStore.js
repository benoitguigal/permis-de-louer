import Vue from 'vue'
import Vuex from 'vuex'
import AreaSizeReminder from '@/components/reminders/AreaSizeReminder.vue'
import GlazingReminder from '@/components/reminders/GlazingReminder.vue'

Vue.use(Vuex)

const reminders = [
    null, GlazingReminder, AreaSizeReminder,
]

const ReminderStore = new Vuex.Store({
    state : {
        currentReminder : null
    },

    mutations : {},

    actions : {
        nexStep (ctx, step) {
            this.state.currentReminder = reminders[step]
        },
        reset (ctx) {
            this.state.currentReminder = null
        }
    }
});

export default ReminderStore