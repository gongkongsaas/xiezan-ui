import { shallowMount } from '@vue/test-utils'
import Button from '../button'

describe('Button', () => {
  it('lg Button mounted', () => {
    const wrapper = shallowMount(Button, {
      props: {
        size: 'lg',
      },
    } as any)

    expect(wrapper.html()).toMatchSnapshot()
  })
  it('sm Button mounted', () => {
    const wrapper = shallowMount(Button, {
      props: {
        size: 'sm',
      },
    } as any)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
