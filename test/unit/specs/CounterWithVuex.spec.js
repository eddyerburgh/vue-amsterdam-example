import Counter from '@/components/CounterWithVuex.vue'
import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import storeConfig from '@/store/store-config'

describe('Counter.vue', () => {
  it('calls commit with increment when button is clicked', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(storeConfig)
    const wrapper = mount(Counter, {
      localVue,
      store
    })
    expect(wrapper.find('span').text()).toBe('counter: 0')
    wrapper.find('button').trigger('click')
    expect(wrapper.find('span').text()).toBe('counter: 1')
  })
})
