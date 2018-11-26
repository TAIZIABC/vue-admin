<template>
  <div class="home">
    <el-row class="container">
      <el-col :span="24" class="header">
        <el-col :span="4" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
          {{collapsed?'对接':sysName}}
        </el-col>
        <el-col :span="16">
          <div class="tools" @click.prevent="collapse">
            <i class="fa fa-align-justify"></i>
          </div>
        </el-col>
        <el-col :span="4" class="userinfo">
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-col>
    </el-row>
    <el-row  class="main">
      <el-col :span="4" :class="collapsed?'col-menu':'menu'">
          <el-menu
            :collapse-transition="false"
            :collapse="collapsed"
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#eef1f6"
            active-text-color="#ffd04b">
            <el-submenu :index="String(index)" v-if="item.children" v-for="(item,index) in menu" :key="index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
              <router-link v-for="(menu,key) in item.children" :to="menu.path" :key="key">
                <el-menu-item :index="menu.path">{{ menu.name }}</el-menu-item>
              </router-link>
            </el-submenu>
            <router-link v-else="item.children" :to="item.path">
              <el-menu-item :index="item.path">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.name}}</span>
              </el-menu-item>
            </router-link>
          </el-menu>


        <!--<el-menu-->
          <!--:collapse="collapsed"-->
          <!--default-active="3"-->
          <!--class="el-menu-vertical-demo"-->
          <!--background-color="#eef1f6"-->
          <!--active-text-color="#ffd04b">-->
          <!--<el-submenu index="1">-->
            <!--<template slot="title">-->
              <!--<i class="el-icon-location"></i>-->
              <!--<span>导航一</span>-->
            <!--</template>-->
            <!--<router-link to="/tables">-->
              <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
            <!--</router-link>-->
            <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
          <!--</el-submenu>-->
          <!--<router-link to="/chart">-->
            <!--<el-menu-item index="2">-->
              <!--<i class="el-icon-menu"></i>-->
              <!--<span slot="title">导航二</span>-->
            <!--</el-menu-item>-->
          <!--</router-link>-->
          <!--<router-link to="/table">-->
            <!--<el-menu-item index="3" >-->
              <!--<i class="el-icon-document"></i>-->
              <!--<span slot="title">表格</span>-->
            <!--</el-menu-item>-->
          <!--</router-link>-->
          <!--<router-link to="/form">-->
            <!--<el-menu-item index="4">-->
              <!--<i class="el-icon-setting"></i>-->
              <!--<span slot="title">表单</span>-->
            <!--</el-menu-item>-->
          <!--</router-link>-->
        <!--</el-menu>-->
      </el-col>
      <el-col :span="20" class="content">
        <el-breadcrumb separator="/" class="breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
          <transition name="fade" mode="out-in">
            <div>
              <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
              </keep-alive>
              <router-view v-if="!$route.meta.keepAlive"></router-view>
            </div>
          </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Menu from './Menu'
 export default {
   name: 'home',
   data(){
     return {
       collapsed: false,
       sysName: '对接系统',
       sysUserAvatar: 'https://avatars3.githubusercontent.com/u/24958677?v=4&s=120',
       sysUserName: '刘某某',
       menu: Menu
     }
   },
   methods: {
     collapse: function(){
       this.collapsed = !this.collapsed
     }
   }
 }
</script>


<style scoped lang="scss">
  .container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .header{
      height: 60px;
      line-height: 60px;
      background-color: #20a0ff;
      .logo-collapse-width{
        width: 80px;
      }
      .logo{
        padding-left: 20px;
        font-size: 25px;
        font-family: '华文行楷';
      }
      .tools{
        width: 40px;
      }
      .userinfo{
        text-align: right;
        float: right;
        padding-right: 35px;
        img{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin: 10px 0 10px 10px;
          float: right;
        }
      }
    }

  }
  .main{
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    /*display: flex;*/
    .menu{
      height: 100%;
      background-color: #eef1f6;
    }
    .col-menu{
      width: 56px;
    }
    .content{
      height: 100%;
      overflow-y: scroll;
      padding: 20px;
      .breadcrumb{
        margin-bottom: 20px;
      }
    }
  }
</style>
