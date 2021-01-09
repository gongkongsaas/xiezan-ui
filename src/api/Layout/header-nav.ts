/*eslint-disable*/
export const menuAsideData = require('../../../public/menu.json')
/*eslint-enable*/
import axios from 'axios'

export const userData = async () => {
  const getCookie = (name: string) => {
    const arr = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]*)(;|$)'),
    )
    if (arr !== null) {
      return arr[2]
    }
    return ''
  }

  const datas = await axios({
    url: '/user/session/ajax-login',
    params: {
      ticket: getCookie('ticket'),
    },
  }).then((res) => res)
  console.log(datas)
  return datas
}
