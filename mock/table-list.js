const Mock = require('mockjs')

const List = [
  // {
  //   id:1,
  //   name:张三,
  //   sno:202160,
  //   birthday:1996-12-01
  // },
  // {
  //   id:2,
  //   name:李四,
  //   sno:202161,
  //   birthday:1997-11-21
  // },
  // {
  //   id:3,
  //   name:王五,
  //   sno:202163,
  //   birthday:1998-10-15
  // },
  // {
  //   id:4,
  //   name:赵六,
  //   sno:202164,
  //   birthday:1997-07-01
  // },
  // {
  //   id:5,
  //   name:田七,
  //   sno:202165,
  //   birthday:1997-05-10
  // }
]
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    name: '@cname',
    sno: '21@string(number, 4, 4)',
    birthday: '@Date("yyyy-MM-dd")'
  }))
}

module.exports = [
  {
    url: '/vue-element-admin/custom/table-list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 20 } = config.query

      const pageList = List.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: List.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/vue-element-admin/custom/form/add',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
