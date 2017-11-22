<template>
  <div class="box">
    <div @click="close" style="float: right;    margin-top: -20px;">X</div>
    <div>
      <label>
        标题：
      </label>
      <div>{{title}}</div>
    </div>
    <div>
      <label>
        内容：
      </label>
      <div>{{name}}</div>
    </div>
    <div>
      <label>
        时间：
      </label>
      <div>{{time}}</div>
    </div>
  </div>
</template>
<script>
  import {bus} from '../assets/eventBus.js'

  export default {
    name: 'detail',
    data () {
      return {
        title: '',
        name: '',
        time: ''
      }
    },
    mounted () {
      bus.$on('handledetail', info => {
        this.title = info.title
        this.name = info.name
        this.time = info.time
      })
    },
    methods: {
      close () {
        this.$emit('showbox', false)
      }
    }
  }
</script>
<style scoped>
  .box {
    position: absolute;
    right: 0;
    top: 0;
    background: #fff;
    bottom: 0;
    width: 500px;
    border: 1px solid #ccc;
    box-shadow: 0 0 3px;
    padding: 40px 20px;
    z-index: 2;
  }

  .box > div > div {
    display: inline-block;
  }
</style>
