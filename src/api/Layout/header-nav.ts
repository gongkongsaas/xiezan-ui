/*eslint-enable*/
import axios from 'axios'

export const testData = async () => {
  const getCookie = (name: string) => {
    const arr = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]*)(;|$)'),
    )
    if (arr !== null) {
      return arr[2]
    }
    return ''
  }

  if (getCookie('ticket')) {
    const datas = await axios({
      url: '/user/session/ajax-login',
      params: {
        ticket: getCookie('ticket'),
      },
    }).then((res) => res)

    return datas
  }
}
