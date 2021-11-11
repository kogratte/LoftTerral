// import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
// import Vuetify from 'vuetify';
// import Vue from 'vue';
// import Vuex from 'vuex';
// import SearchBar from '@/components/Searchbar.vue';

describe('SearchBar.vue', () => {
  // const localVue = createLocalVue();
  // let vuetify: Vuetify;
  // let wrapper: Wrapper<Vue>;
  // const fakeStore = {};
  // beforeEach(() => {
  //   vuetify = new Vuetify();
  //   // jest.useFakeTimers();
  //   wrapper = shallowMount(SearchBar, {
  //     localVue,
  //     vuetify,
  //     store: new Vuex.Store(fakeStore),
  //   });
  // });

  // afterEach(() => {
  //     wrapper.destroy();
  // });

  test('Label should be dynamic', () => {
expect(true).toBeFalsy();:
    // expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    // expect(attributes.label).toBe('I want to go to London!');
    // expect(setTimeout).toHaveBeenCalledTimes(2);
    // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    // expect(attributes.label).toBe('I want to go to New-York!');
    // jest.runOnlyPendingTimers();
    // expect(attributes.label).toBe('I want to go to Bali!');
    // jest.runOnlyPendingTimers();
    // expect(attributes.label).toBe('I want to go to Tokyo!');
    // jest.runOnlyPendingTimers();
    // expect(attributes.label).toBe('I want to go to London!');
  });

  // test('Placeholder should be "Where do I want to go?"', async () => {
  //   const sb = wrapper.find('#searchbar');
  //   await sb.trigger('click'); // Mandatory. Label is set when input has focus to avoid glitchs
  //   const placeholder = sb.attributes('placeholder');

  //   expect(placeholder).toEqual('Where do I want to go?');
  // });

  // test('A research action should be dispatched when input is "ab"', async () => {
  //   const textInput = wrapper.find('.searchbar');
  //   wrapper.vm.$store.dispatch = jest.fn();

  //   await textInput.setValue('ab');

  //   expect(wrapper.vm.$store.dispatch).toHaveBeenCalledTimes(1);
  //   expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith('research/SET_SEARCH', { input: 'ab' });
  // });
});
