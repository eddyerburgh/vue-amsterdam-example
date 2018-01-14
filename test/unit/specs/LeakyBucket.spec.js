import LeakyBucket from '@/components/LeakyBucket.vue'
import { mount } from 'vue-test-utils'

describe('LeakyBucket.vue', () => {
  test('renders title prop in h1', () => {
    const $http = {
      get: () => Promise.resolve()
    }
    const title = 'My title'
    const wrapper = mount(LeakyBucket, {
      mocks: {
        $http
      },
      propsData: {
        title
      }
    })
    expect(wrapper.find('h1').text()).toBe(title)
  })

  test('renders a default title if not passed as props', () => {
    const $http = {
      get: () => Promise.resolve()
    }
    const wrapper = mount(LeakyBucket, {
      mocks: {
        $http
      }
    })
    expect(wrapper.find('h1').text()).toBe('User details')
  })
})
