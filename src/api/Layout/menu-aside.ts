/*eslint-disable*/
export const menuAsideData = require('../../../public/menu.json')
/*eslint-enable*/
import axios from 'axios'

export const testData = async () => {
  const data = await axios
    .get('http://dev.delixi.com/acl/menu/list-menu-count-info')
    .then((res: any) => {
      if (res.code === 0) {
        return res.data
      }
    })

  return data
}

export const testData2 = async () => {
  const data = await axios
    .get('http://dev.delixi.com/acl/menu/list')
    .then((res: any) => {
      if (res.code === 0) {
        return res.data
      }
    })
  return data
}
