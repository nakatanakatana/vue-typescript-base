import {shallowMount} from '@vue/test-utils';

import CountButtonComponent from './countButton.vue';

describe('CountButtonComponent', () => {
  const wrapper = shallowMount(CountButtonComponent);
  test('has button', () => {
    console.log(wrapper.html());
  });
});
