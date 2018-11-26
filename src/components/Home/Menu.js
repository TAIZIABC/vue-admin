export default [
  {
    name: '导航一',
    icon: 'el-icon-location',
    children: [
      {
        name: '选项一',
        path: '/tables'
      },
      {
        name: 'Store',
        path: '/store'
      }
    ]
  },
  {
    name: '图形',
    icon: 'el-icon-menu',
    children: [
      {
        name: '图表',
        path: '/chart'
      },
      {
        name: '地图',
        path: '/map'
      }
    ]
  },
  {
    name: '消息',
    path: '/message',
    icon: 'el-icon-bell'
  },
  {
    name: '富文本',
    path: '/text',
    icon: 'el-icon-edit-outline'
  },
  {
    name: '表格',
    path: '/table',
    icon: 'el-icon-document'
  },
  {
    name: '表单',
    path: '/form',
    icon: 'el-icon-setting'
  }
]
