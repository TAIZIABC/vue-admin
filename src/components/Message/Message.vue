<template>
    <div class="message">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="`未读消息(${getUnMsg.data.length})`" name="first">
          <div class="tab-content">
            <msg-table :msgData="getUnMsg"></msg-table>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="`已读消息(${getReadMsg.data.length})`" name="second">
          <div class="tab-content">
            <msg-table :msgData="getReadMsg"></msg-table>
            <!--<el-button type="warning">批量移入回收站</el-button>-->
          </div>
        </el-tab-pane>
        <el-tab-pane :label="`回收站(${getTrashMsg.data.length})`" name="third">
          <msg-table :msgData="getTrashMsg"></msg-table>
          <!--<el-button type="danger">批量删除</el-button>-->
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import MsgTable from './MsgTable'
    export default {
      name: "Message",
      data(){
        return {
          activeName: 'first',
          search: '',
          unReadSel: [],
          readSel: [],
          trashSel: []
        }
      },
      computed: {
        ...mapGetters(['getUnMsg','getReadMsg','getTrashMsg'])
      },
      components: {
        'msg-table': MsgTable
      },
      methods: {
        handleClick(tab,event){
          // console.log(tab,event)
        }
      },
      mounted(){
        // console.log(this.$store)
      }
    }
</script>

<style scoped>
.message{
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 450px;
}
</style>
