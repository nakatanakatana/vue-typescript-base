import {ActionContext} from 'vuex';
import {getStoreAccessors} from 'vuex-typescript';
import {State as RootState} from '../state';

import {CounterState} from './counterState';

type CounterContext = ActionContext<CounterState, RootState>;
const {commit, read, dispatch} = getStoreAccessors<CounterState, RootState>('counter');

const mutations = {
  add (state: CounterState, num: number) {
    state.count = state.count + num;
  }
};
const add = commit(mutations.add);

export const counter = {
  namespaced: true,
  state: {
    count: 0,
  },
  getters: {
    getCount (state: CounterState) {
      return state.count;
    }
  },
  mutations: mutations,
  actions: {
    async increment (context: CounterContext): Promise<number> {
      add(context, 1);
      return context.state.count;
    },
    async decrement (context: CounterContext): Promise<number> {
      add(context, -1);
      return context.state.count;
    },
    async reset (context: CounterContext): Promise<number> {
      add(context, -1 * context.state.count);
      return context.state.count;
    }
  }
};

const getters = counter.getters;
export const getCount = read(getters.getCount);

const actions = counter.actions;
export const increment = dispatch(actions.increment);
export const decrement = dispatch(actions.decrement);
export const reset = dispatch(actions.reset);
