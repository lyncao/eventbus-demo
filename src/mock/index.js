import Mock from 'mockjs'

Mock.mock(/\/getList/, {
  'data|10': [{
    'id': '@increment',
    'title': '@ctitle(10, 20)',
    'name|1-10': /[a-z]/,
    'time': Mock.mock('@date("yyyy yy y MM M dd d")')
  }]
})
