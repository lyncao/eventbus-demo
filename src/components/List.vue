<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="内容"
      >
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import {bus} from '../assets/eventBus.js'

  export default {
    name: 'list',
    data () {
      return {
        tableData: []
      }
    },
    mounted () {
      let that = this
      this.$axios.get('/getList').then(response => {
        if (response.status === 200) {
          that.tableData = response.data.data
        }
      }, response => {
        // error callback
      })
    },
    methods: {
      handleClick (row) {
        this.$emit('showbox', true)
        bus.$emit('handledetail', row)
      }
    }
  }
</script>
