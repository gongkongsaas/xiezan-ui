import { shallowMount } from '@vue/test-utils'
import Main from '../main'

describe('Main', () => {
  it('slot is health', () => {
    const wrapper = shallowMount(Main, {
      slots: {
        default: () => 'testSlot',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
