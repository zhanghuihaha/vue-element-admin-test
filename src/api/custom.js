import request from '@/utils/request'

/**
 * 获取Table数据
 * @param {*} query
 * @returns
 */
export function fetchTableList(query) {
  return request({
    url: '/vue-element-admin/custom/table-list',
    method: 'get',
    params: query
  })
}

export function add(data) {
  return request({
    url: '/vue-element-admin/custom/form/add',
    method: 'post',
    data
  })
}
