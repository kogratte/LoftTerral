import { createLocalVue, mount, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex, { Store } from 'vuex';
import SearchBar from '@/components/Searchbar.vue';
import * as researchModule from '@/store/modules/research';

const ROLLING_DELAY = 5000;

describe('SearchBar.vue', () => {
  const localVue = createLocalVue();
  let vuetify: Vuetify;
  let wrapper: Wrapper<SearchBar, Element>;

  beforeEach(() => {
    jest.useFakeTimers();
    vuetify = new Vuetify();
    wrapper = mount(SearchBar, {
      localVue,
      vuetify,
      store: new Vuex.Store({
        modules: {
          research: researchModule,
        },
      }),
      attachTo: document.body,
    });
  });

  afterEach(() => {
    jest.useRealTimers();
    wrapper.destroy();
  });

  test('It should expose a search bar', () => {
    const sb = wrapper.find('#searchbar');

    expect(sb.exists()).toBeTruthy();
  });

  [
    { city: 'London', delay: 0 },
    { city: 'New-York', delay: 1 * ROLLING_DELAY },
    { city: 'Bali', delay: 2 * ROLLING_DELAY },
    { city: 'Shanghai', delay: 3 * ROLLING_DELAY },
    { city: 'Tokyo', delay: 4 * ROLLING_DELAY },
    { city: 'London', delay: 5 * ROLLING_DELAY },
  ].forEach(({ city, delay }) => {
    test(`Label should be "I want to go to... ${city} ?" at T = ${delay}ms`, (done) => {
      const label = wrapper.find('label[for="searchbar"]');
      jest.advanceTimersByTime(delay);

      wrapper.vm.$nextTick(() => {
        expect(label.text()).toEqual(`I want to go to... ${city}?`);

        done();
      });
    });
  });

  test('Placeholder should be "Where do I want to go?"', async () => {
    const sb = wrapper.find('#searchbar');
    await sb.trigger('click'); // Mandatory. Label is set when input has focus to avoid glitchs
    const placeholder = sb.attributes('placeholder');

    expect(placeholder).toEqual('Where do I want to go?');
  });

  test('A research action should be dispatched when input is "ab"', async () => {
    const textInput = wrapper.find('#searchbar');
    wrapper.vm.$store.dispatch = jest.fn();

    await textInput.setValue('ab');

    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith('research/SET_SEARCH', { input: 'ab' });
  });
});
