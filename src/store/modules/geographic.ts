/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-shadow */

import { ActionContext } from 'vuex';
import apolloSvc from '@/services/apollo';
import GET_ALL_DATA from '@/graphql/queries/getAll';
import { ContinentResponse, Language } from '@/models/continentsQueryResponse';

interface City {
  name: string;
  countryCode: string;
}

interface Continent {
  name: string;
  code: string;
}

export interface State {
  languages: Language[];
  currencies: string[];
  cities: City[];
  continents: Continent[];
  loading: boolean;
  error?: Error;
}

const defaultState = (): State => ({
  languages: [],
  currencies: [],
  cities: [],
  continents: [],
  loading: false,
});

export const namespaced = true;
export const state = defaultState;

export const mutations = {
  SET_DATA(state: State, response: ContinentResponse[]): void {
    const languages: Language[] = [];
    const cities: City[] = [];
    const currencies: string[] = [];
    const continents: Continent[] = [];

    response.forEach((continent) => {
      continents.push({
        code: continent.code,
        name: continent.name,
      });

      continent.countries.forEach((country) => {
        country.languages.forEach((language) => {
          if (!languages.find((l) => l.code === language.code)) {
            languages.push(language);
          }
        });
        cities.push({
          countryCode: country.code,
          name: country.capital,
        });
        if (currencies.indexOf(country.currency) === -1) {
          currencies.push(country.currency);
        }
      });
    });
    state.cities = cities;
    state.currencies = currencies;
    state.languages = languages;
    state.continents = continents;
    // eslint-disable-next-line no-console
    console.log(state);
    delete state.error;
  },
  SET_LOADING(state: State, loading: boolean): void {
    state.loading = loading;
  },
};

export const getters = {
  continentsCount: (state: State) => state.continents.length,
  citiesCount: (state: State) => state.cities.length,
  languagesCount: (state: State) => state.languages.length,
  currenciesCount: (state: State) => state.currencies.length,
};

export const actions = {
  INIT({ commit }: unknown): void {
    const client = apolloSvc.getApolloClient();
    commit('SET_LOADING', true);
    try {
      client.query({
        query: GET_ALL_DATA,
      }).then((data) => {
        commit('SET_DATA', data.data.continents);
      }).catch((e) => {
        throw e;
      });
    } catch (e) {
      commit('SET_ERROR', e);
    } finally {
      commit('SET_LOADING', false);
    }
  },
};
