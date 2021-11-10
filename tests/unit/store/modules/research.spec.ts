import * as researchModule from '@/store/modules/research';

describe('Store Research Module', () => {
  let fakeState: researchModule.ResearchState;
  beforeEach(() => {
    fakeState = {
      currentResearch: '',
    };
  });

  describe('Actions', () => {
    const fakeCommit = jest.fn();

    afterEach(() => {
      fakeCommit.mockReset();
    });

    test('SET_SEARCH should commit SET_SEARCH with provided input', () => {
      researchModule.actions.SET_SEARCH({ commit: fakeCommit }, { input: 'fake input' });

      expect(fakeCommit).toHaveBeenCalledWith('SET_SEARCH', 'fake input');
    });
  });

  describe('Mutations', () => {
    test('SET_SEARCH should commit SET_SEARCH with provided input', () => {
      researchModule.mutations.SET_SEARCH(fakeState, 'fake input');

      expect(fakeState.currentResearch).toBe('fake input');
    });
  });

  describe('Getters', () => {
    test('hasPendingResearch should return false if research is lower or equal to 2 char, true otherwise', () => {
      expect(researchModule.getters.hasPendingResearch(fakeState)).toBeFalsy();

      fakeState.currentResearch = 'b';
      expect(researchModule.getters.hasPendingResearch(fakeState)).toBeFalsy();

      fakeState.currentResearch = 'ba';
      expect(researchModule.getters.hasPendingResearch(fakeState)).toBeFalsy();

      fakeState.currentResearch = 'barc';
      expect(researchModule.getters.hasPendingResearch(fakeState)).toBeTruthy();
    });
  });

  test('Module should be namespaced', () => {
    expect(researchModule.namespaced).toBeTruthy();
  });
});
