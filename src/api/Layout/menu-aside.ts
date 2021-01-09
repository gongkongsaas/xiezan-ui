/*eslint-disable*/
export const menuAsideData = require('../../../public/menu.json')
/*eslint-enable*/
import axios from 'axios'

export const testData = async () => {
  const data = await axios
    .get('http://dev.delixi.com/acl/menu/list-menu-count-info')
    .then((res) => {
      if (res.data.code === 0) {
        return res.data.data
      }
    })

  return data
}

export const apiMenuAsideData = axios
  .get('http://dev.delixi.com/acl/menu/list')
  .then((res) => {
    if (res.data.code === 0) {
      return res.data
    }
  })
