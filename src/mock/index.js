import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import User from './data/user'
import Goods from './data/goods'
import Admin from './data/admin'
let _User = User;

export default {
  init(){
    let mock = new MockAdapter(axios);

    // 拦截/user的路由
    mock.onGet('/user').reply(config=>{
      let {name,page} = config.params;
      let userData = _User.slice();
      if(name){
        userData = userData.filter(item=>item.name===name)
      }
      let total = userData.length;
      userData = userData.filter((item,index)=>index<20*page&&index>=20*(page-1));
      return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve([200,{code: 200,total,userData}]),500);
      });
    });

    // 删除用户
    mock.onGet('/user/delete').reply(config=>{
      let user = config.params;
      if(user instanceof Array){
        user.forEach((item)=>{
          _User = _User.filter(v=>v.name!==item.name)
        })
      }else{
        _User = _User.filter(item=>user.name!==item.name);
      }
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve([200,{code: 200,msg: 'success'}])
        })
      },500)
    });

    // 修改用户信息
    mock.onGet('/user/edit').reply(config=>{
      return new Promise((resolve,reject)=>{
        let user = config.params;
        _User = _User.map(item=>{
          return item.id===user.id?user:item;
        });
        setTimeout(()=>resolve([200,{code:200,msg:'success'}]),500)
      })
    });

    // 增加用户
    mock.onPost('/user/add').reply(config=>{
      return new Promise((resolve,reject)=>{
        let user = JSON.parse(config.data).params;
        user.birth = user.birth.split('T')[0];
        user&&_User.unshift(user);
        setTimeout(()=>resolve([200,{code:200,msg:'success'}]),500)
      })
    });

    // 登入路由
    mock.onPost('/login').reply(config=>{
      return new Promise((resolve,reject)=>{
        let user = JSON.parse(config.data).params;
        let result = false;
        Admin.forEach((item)=>{
          if(item.username===user.username&&item.password===user.password){
            result = true;
            user = item;
          }
        });
        if(result){
          setTimeout(()=>resolve([200,{code:200,msg:'success',user}]),500)
        }else{
          setTimeout(()=>resolve([200,{code:300,msg:'用户名或密码错误'}]),500)
        }

      })
    });

    mock.onGet('/goods').reply(200,{
      code: 200,
      msg: 'success',
      Goods
    });






  }
}
