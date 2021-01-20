export interface MenuAsideNavData {
  id: number
  parentId: number
  name: string
  url: string
  icon: string
  urlFilterRegex: null | string
  menu: null | string
  rowSequence: null | number
  columnSequence: null | number
  code: string
  level: number
  category: null | string
  children: MenuAsideNavData[]
  show?: boolean
}
