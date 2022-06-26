<template>
  <div>你好Vue</div>
</template>

<script>
import axios from 'axios'
export default {
  created() {
    axios({
      url: 'https://httpbin.org/get',
      params: {
        name:'张三',
        age:18
      }
    })
      .then((res) => {
        console.log(res)
      })
  }
}
</script>

<style></style>
