import Vue from 'vue'
import Vuex from 'vuex'
import Glazing from '@/components/Glazing.vue'
import AreaSize from '@/components/AreaSize.vue'
import Housing from '@/components/Housing.vue'
import Water from '@/components/Water.vue'
import ReminderStore from '@/store/ReminderStore'

Vue.use(Vuex)

const tabComponents = [
    Housing, Glazing, AreaSize, Water
]

const WizardStore = new Vuex.Store({
    state : {
        currentTab           : 0,
        currentStepComponent : Housing
    },

    actions : {
        nextStep (ctx) {
            if (ctx.state.currentTab === tabComponents.length - 1) {
                return Promise.reject()
            } else {
                ctx.state.currentTab++
                ctx.state.currentStepComponent = tabComponents[ctx.state.currentTab]

                ReminderStore.dispatch('nexStep', ctx.state.currentTab)

                return Promise.resolve()
            }
        },
        reset (ctx) {
            ctx.state.currentTab           = 0
            ctx.state.currentStepComponent = Housing
        }
    }
})

export default WizardStore