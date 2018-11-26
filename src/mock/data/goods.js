import Mock from 'mockjs'
const Goods = [];

for(let i=0;i<100;i++){
  Goods.push(Mock.mock({
    ID: Mock.Random.increment(),
    title: Mock.Random.ctitle(7),
    'price|10-100.2': 1,
    desc: Mock.Random.cparagraph(10,20),
    img: Mock.Random.image('200x200')
  }))
}

export default Goods;
