import Mock from 'mockjs'

const User = [];

for(let i=0;i<100;i++){
  User.push(Mock.mock({
    id: Mock.Random.increment(),
    name: Mock.Random.cname(),
    addr: Mock.Random.city(true),
    'age|18-50': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0,1)
  }))
}

export default User;
