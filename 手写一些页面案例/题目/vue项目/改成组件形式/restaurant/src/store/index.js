import Vue from "vue";
import Vuex from 'vuex'

import mask from '@/store/mask'
import requireerr from '@/store/requireerr'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        mask,
        requireerr
    }
})
