import { shallowMount } from '@vue/test-utils'
import Crumb from '@/components/crumb'

describe('Curmb', () => {
  it('title mounted Curmb', () => {
    const wrapper = shallowMount(Crumb, {
      props: {
        title: '标题',
      },
      slots: {
        default: () => '测试',
      },
    } as any)

    expect(wrapper.find('.main-crumb-btns').text()).toBe('测试')
  })
})
