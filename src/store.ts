import Vuex from 'vuex'
import {State} from './state'
import {counter} from './store/counter'

export const createStore = () => new Vuex.Store<State>({
  modules: {
    counter,
  },
})
