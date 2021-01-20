import { shallowMount } from '@vue/test-utils'
import HeaderNav from '../header-nav/headerNav'

describe('HeaderNav', () => {
  it('mounted health', () => {
    const wrapper = shallowMount(HeaderNav, {
      props: {
        companyName: '测试菜单名',
        userInfoData: {
          accountType: 1,
          avatarFilePath: '/path',
          companyName: 'testCompany',
          masterSign: false,
          operatorSign: false,
          sellerSign: true,
          userName: '测试名字',
        },
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
