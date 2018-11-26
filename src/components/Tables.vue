<template>
    <div class="table">
      <el-col :span="24" class="toolbar">
        <el-form :inline="true" v-model="formData">
          <el-form-item label="名称">
            <el-input v-model="formData.name" placeholder="请输入名称" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSearch">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addUser" >增加用户</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        :data="tableData"
        @selection-change="handleSelectionChange"
        max-height="500"
        height="500"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column type="index" width="60"></el-table-column>
        <el-table-column
          sortable
          label="Name"
          prop="name">
        </el-table-column>
        <el-table-column
          sortable
          label="Age"
          prop="age">
        </el-table-column>
        <el-table-column
          sortable
          label="Sex"
          :formatter="formatSex"
          prop="sex">
        </el-table-column>
        <el-table-column
          label="Birth"
          prop="birth">
        </el-table-column>
        <el-table-column
          label="Addr"
          prop="addr">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-col :span="24" style="margin-top: 20px">
        <el-col :span="4">
          <el-button type="info" plain @click="mapDelete">批量删除</el-button>
        </el-col>
        <el-col :span="6" :offset="14">
          <el-pagination
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            background
            :page-size="20"
            :total="total">
          </el-pagination>
        </el-col>
      </el-col>

      <!--修改弹出框-->
      <el-dialog title="修改信息" :visible.sync="dialogFormVisible" >
        <el-form :model="editRow" label-width="80px">
          <el-form-item label="Name" >
            <el-input v-model="editRow.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Age" >
            <el-input v-model="editRow.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Addr" >
            <el-input v-model="editRow.addr" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Birth">
              <el-date-picker type="date" placeholder="选择日期" v-model="editRow.birth" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="Sex" >
            <el-radio-group v-model="editRow.sex">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="editSubmit">确 定</el-button>
        </div>
      </el-dialog>

      <!--新增弹出框-->
      <el-dialog title="增加用户" :visible.sync="addModel" >
        <el-form :model="editRow" label-width="80px">
          <el-form-item label="Name" >
            <el-input v-model="editRow.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Age" >
            <el-input v-model="editRow.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Addr" >
            <el-input v-model="editRow.addr" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Birth">
            <el-date-picker type="date" placeholder="选择日期" v-model="editRow.birth" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="Sex" >
            <el-radio-group v-model="editRow.sex">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addModel = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </div>
      </el-dialog>


    </div>
</template>

<script>
  import {getUserList,mapDelete,getEdit,postAddUser} from "../api";

  export default {
      name: "Tables",
      data(){
          return {
            formData: {
              name: ''
            },
            loading: false,
            tableData: [],
            total: 0,
            currentPage: 1,
            sels: [],
            dialogFormVisible: false,
            addModel: false,
            editRow: {name:'',age:'',sex:'',addr:'',birth:''}
          }
      },
      methods: {
        // 表格复选框事件
        handleSelectionChange(val){
          this.sels = val;
        },
        handleEdit(index,row){
          this.dialogFormVisible = true;
          this.editRow = row;
        },
        handleDelete(index,row){
          mapDelete(row).then(res=>{
            if(res.code===200){
              this.$message('删除成功！');
              this.getUser();
            }else{
              this.$message({message: '删除失败',type: 'error'})
            }
          })
        },
        onSearch(){
          this.getUser();
        },
        addUser(){
          this.editRow = {name:'',age:'',sex:'',addr:'',birth:''};
          this.addModel = true;
        },
        addSubmit(){
          postAddUser(this.editRow).then(res=>{
            if(res.code===200){
              this.$message('添加成功！');
              this.getUser();
            }else{
              this.$message({message: '添加失败',type: 'error'})
            }
            this.addModel = false;
          })
        },
        editSubmit(){
          this.dialogFormVisible = false;
          getEdit(this.editRow).then(res=>{
            if(res.code===200){
              this.$message('修改成功！');
            }else{
              this.$message({message: '修改失败',type: 'error'})
            }
          })
        },
        handleCurrentChange(page){
          this.currentPage = page;
          this.getUser();
        },
        mapDelete(){
          mapDelete(this.sels).then((res)=>{
            if(res.code===200){
              this.$message('删除成功！');
              this.getUser();
            }else{
              this.$message({message: '删除失败',type: 'error'})
            }
          })
        },
        getUser(){
          this.loading = true;
          getUserList({page:this.currentPage,name:this.formData.name}).then(data=>{
            this.loading = false;
            this.tableData = data.userData;
            this.total = data.total;
          });
        },
        formatSex(row,column){
          return row.sex===1?'男':'女';
        }
      },
      created(){
        this.getUser();
      }

    }
</script>

<style scoped>

</style>
