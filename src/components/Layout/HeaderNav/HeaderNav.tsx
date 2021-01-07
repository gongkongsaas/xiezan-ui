import { defineComponent, PropType } from 'vue'
import { UserInfoType } from '@/types/userInfoType'

export default defineComponent({
  props: {
    companyName: {
      type: String,
      default: '运营中心菜单',
    },
    userInfoData: {
      type: Object as PropType<UserInfoType>,
      default: {},
    },
  },
  setup(props) {
    return () => {
      return (
        <div class="header-nav">
          <div class="header-information">
            <a class="logo" href="/">
              <img src="/upload/logo/favorites_icon.png" alt="LOGO" />
            </a>
          </div>
          <div class="header-option">
            <div class="mall-company-name">
              <div class="company-name">{props.companyName}</div>
            </div>
            <div class="search-box"></div>
            <ul class="option-box">
              <li class="home">
                <a href="/">商城</a>
              </li>
              <li class="task">
                <a
                  href="/approval/approval-center/approval-unfinished-management"
                  target="_blank"
                >
                  待办
                </a>
              </li>
              <li class="message">
                <a href="/message/message/message-list" target="_blank">
                  消息
                </a>
              </li>
              <li class="service">
                <a
                  href="http://q.url.cn/ABRGOl?_type=wpa&qidian=true"
                  target="_blank"
                >
                  客服
                </a>
              </li>
              <li class="help">
                <a href="/help/help/index" target="_blank">
                  帮助
                </a>
              </li>
              <li class="info">
                <a href="#">
                  <i class="iconfont">&#xe976;</i>
                  <span>{props.userInfoData.userName}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  },
})
