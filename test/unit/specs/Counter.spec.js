import { mount } from 'vue-test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  it('increments counter on click', () => {
    const wrapper = mount(Counter)
    expect(wrapper.find('span').text()).toBe('counter: 0')
    wrapper.find('button').trigger('click')
    expect(wrapper.find('span').text()).toBe('counter: 1')
  })
})
