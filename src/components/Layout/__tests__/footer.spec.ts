import { shallowMount } from '@vue/test-utils'
import Footer from '../footer'

describe('footer', () => {
  it('footer is mounted', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
