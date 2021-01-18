/*eslint-disable*/
export const menuAsideData = require('../../../public/menu.json')
/*eslint-enable*/
import axios from 'axios'

export const apiMenuAsideData = axios.get('/acl/menu/list').then((res) => {
  if (res.data.code === 0) {
    return res.data
  }
})
