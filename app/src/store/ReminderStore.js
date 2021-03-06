import Vue from 'vue'
import Vuex from 'vuex'
import AreaSizeReminder from '@/components/reminders/AreaSizeReminder.vue'
import GlazingReminder from '@/components/reminders/GlazingReminder.vue'
import HousingReminder from '@/components/reminders/HousingReminder.vue'
import WaterReminder from "@/components/reminders/WaterReminder"

Vue.use(Vuex)

const reminders = [
    HousingReminder, GlazingReminder, AreaSizeReminder, WaterReminder
]

const ReminderStore = new Vuex.Store({
    state : {
        currentReminder : HousingReminder
    },

    mutations : {},

    actions : {
        nexStep (ctx, step) {
            ctx.state.currentReminder = reminders[step]
        },
        reset (ctx) {
            ctx.state.currentReminder = HousingReminder
        }
    }
});

export default ReminderStore