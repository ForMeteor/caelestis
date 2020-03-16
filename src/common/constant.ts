// 公用常量
export const ShowButtonList = ['home', 'fi']
export const HomeSwiperUrl = [
  require('@/assets/home/steep.jpg'),
  require('@/assets/home/steep1.jpg'),
  require('@/assets/home/steep2.jpg'),
  require('@/assets/home/steep3.jpg'),
  require('@/assets/home/steep4.jpg')
]
export const MenuData = [
  {
    title: '1.1',
    level: 1,
    ifOpen: false,
    children: [ {
      title: '1.1.1',
      ifOpen: false,
      level: 2,
      children: [
        {
          title: '1.1.1.1',
          level: 3,
          ifOpen: false,
          children: []
        },
        {
          title: '咕噜咕噜咕噜咕噜',
          level: 3,
          ifOpen: false,
          children: []
        }
      ]
    },
    {
    title: '1.1.2',
    ifOpen: false,
    level: 2,
    children: []
    },
    {
    title: '1.1.3',
    ifOpen: false,
    level: 2,
    children: []
    },
    {
    title: '1.1.4',
    level: 2,
    ifOpen: false,
    children: []
    },
    {
    title: '1.1.5',
    level: 2,
    ifOpen: false,
    children: []
    }]
  },
  {
    title:"1.2",
    ifOpen:false,
    level:1,
    children:[
    {
        title:"1.2.1",
        level:2,
        ifOpen:false,
        children:[]
    },
    {
        title:"1.2.2",
        level:2,
        ifOpen:false,
        children:[]
    }
    ]
  },
  {
    title:"1.3",
    level:1,
    ifOpen:false,
    children:[]
  },
  {
    title:"1.4",
    level: 1,
    ifOpen: false,
    children: []
  }, {
    title: "1.5",
    level: 1,
    ifOpen: false,
    children: []
  }, {
    title: '1.6',
    level: 1,
    ifOpen: false,
    children: []
  }]
export default {
  ShowButtonList,
  HomeSwiperUrl
}
