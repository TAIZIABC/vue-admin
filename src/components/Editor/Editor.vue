<template>
    <div class="editor">
      <Editors
        :config           = "Config"
        v-model          = "Value"
        :url              = "Url"
        :max-size         = "MaxSize"
        :accept           = "Accept"
        :with-credentials = false
        @on-ready         = "onEditorReady"
        @on-destroy       = "onEditorDestroy"
        @on-upload-success= "onEditorUploadComplete"
        @on-upload-fail   = "onEditorUploadFail"
      ></Editors>
    </div>
</template>

<script>
  import Editors from './Editors'
    export default {
      name: "Editor",
      data(){
        return {
          Config: {},
          Value: '',
          Url: '',
          MaxSize: 10000,
          Accept: 'image/jpeg, image/png'
        }
      },
      components: {
        Editors
      },
      methods: {
        onEditorReady(){
          // console.log('初始化完成执行')
        },
        onEditorDestroy(){
          // console.log('销毁完成执行')
        },
        onEditorUploadComplete(){
          // console.log('上传图片成功执行')
        },
        onEditorUploadFail(){
          // console.log('上传图片失败执行')
        }
      }
    }
</script>

<style scoped>
  .editor{
    width: 100%;
    margin: 10px auto;
  }
</style>
