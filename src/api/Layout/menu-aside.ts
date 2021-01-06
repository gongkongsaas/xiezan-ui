/*eslint-disable*/
export const menuAsideData = require('../../../public/menu.json')
/*eslint-enable*/
import axios from 'axios'

export const testData = async () => {
  const data = await axios
    .get('http://dev.delixi.com/acl/menu/list-menu-count-info?_=1609903654206')
    .then((res) => res)

  return data
}
