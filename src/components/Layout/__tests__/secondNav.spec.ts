import { shallowMount } from '@vue/test-utils'
import SecondNav from '../menu-aside/second-nav/secondNav'

describe('SecondNav', () => {
  it('testSlot', () => {
    const wrapper = shallowMount(SecondNav, {
      slots: {
        default: () => 'test',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
