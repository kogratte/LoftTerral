/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-shadow */

import { Commit } from 'vuex';

export interface ResearchState {
  currentResearch: string
}

interface SetSearchInput {
  input: string,
}

const defaultState = (): ResearchState => ({
  currentResearch: '',
});

export const namespaced = true;
export const state = defaultState;

export const mutations = {
  SET_SEARCH(state: ResearchState, input: string): void {
    state.currentResearch = input;
  },
};

export const getters = {
  hasPendingResearch: (state: ResearchState) => state.currentResearch.length > 2,
};

export const actions = {
  SET_SEARCH({ commit }: { commit: Commit }, payload: SetSearchInput): void {
    commit('SET_SEARCH', payload.input);
  },
};
