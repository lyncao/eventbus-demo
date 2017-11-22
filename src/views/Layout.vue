<template>
  <div>
    <list @showbox="handleshow"></list>
    <detail @showbox="handleshow" v-show="showdetail"></detail>
  </div>
</template>
<script>
  import List from '../components/List.vue'
  import Detail from '../components/Detail.vue'

  export default {
    name: 'page',
    data () {
      return {showdetail: false}
    },
    components: {
      List,
      Detail
    },
    methods: {
      handleshow (flag) {
        this.showdetail = flag
      }
    }
  }
</script>
