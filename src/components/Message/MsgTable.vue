<template>
  <div class="mag-table">
    <el-table
      :data="showData"
      @selection-change="handleSelectionChange"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="title"
        label="消息内容">
      </el-table-column>
      <el-table-column
        prop="date"
        label="时间"
        width="150">
      </el-table-column>
      <el-table-column
        width="180"
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            :type="config[msgData.type].btnType"
            @click="handleEdit(scope.$index, scope.row)">{{config[msgData.type].title}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button v-if="showData.length" :type="config[msgData.type].btnType" @click="handleClick">
      {{config[msgData.type].info}}</el-button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {fuzzySearch} from '../../util/index'
    export default {
      name: "MsgTable",
      props: [
        'msgData'
      ],
      data(){
        return {
          search: '',
          sels: [],
          config: {
            a: {
              title: '标记为已读',
              btnType: 'primary',
              info: '批量标记为已读',
              btn: this.addToRead,
              btns: this.addSomeToRead
            },
            b: {
              title: '移入回收站',
              btnType: 'warning',
              info: '批量移入回收站',
              btn: this.addToTrash,
              btns: this.addSomeToTrash
            },
            c: {
              title: '删除',
              btnType: 'danger',
              info: '批量删除',
              btn: this.delete,
              btns: this.deleteSome
            }
          }
        }
      },
      computed: {
        showData(){
          return fuzzySearch(String(this.search),this.msgData.data,'title');
        }
      },
      methods: {
        ...mapActions(['addToRead','addSomeToRead','addToTrash','addSomeToTrash','delete','deleteSome']),
        handleEdit(index,row){
          this.config[this.msgData.type].btn(row);
        },
        // 表格复选框事件
        handleSelectionChange(val){
          this.sels = val;
        },
        handleClick(){
          if(!this.sels.length) return;
          this.config[this.msgData.type].btns(this.sels);
        }
      }
    }
</script>

<style scoped>
.el-table{
  margin-bottom: 30px;
}
</style>
