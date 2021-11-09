import { shallowMount } from '@vue/test-utils';
import SearchBar from '@/components/Searchbar.vue';

describe('SearchBar.vue', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  [
    { city: 'London', delay: 0 },
    { city: 'New-York', delay: 2500 },
    { city: 'Bali', delay: 5000 },
    { city: 'Shanghai', delay: 7500 },
    { city: 'Tokyo', delay: 10000 },
    { city: 'London', delay: 12500 },
  ].forEach(({ city, delay }) => {
    test('Placeholder should be "I want to go to..."', (done) => {
      const wrapper = shallowMount(SearchBar);
      const input = wrapper.find('#searchbar');

      jest.advanceTimersByTime(delay);

      wrapper.vm.$nextTick(() => {
        expect(input.attributes().placeholder).toBe(`I want to go to... ${city}`);

        done();
      });
    });
  })


});
