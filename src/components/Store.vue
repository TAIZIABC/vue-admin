<template>
    <div class="store">
      {{getCount}}
      <br>
      <el-button type="primary" @click="increment">+</el-button>
      <el-button type="success" @click="decrement">-</el-button>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
    export default {
      name: "Store",
      data(){
        return {
        }
      },
      computed: {
        ...mapGetters(['getCount'])
      },
      methods: {
        ...mapActions(['increment','decrement'])
      }
    }
</script>

<style scoped>

</style>
