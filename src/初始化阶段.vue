<template>
  <div>你好</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello, Vue'
    }
  },
  methods: {
    fn() {}
  },
  beforeCreate() {
    console.log(this.msg, this.fn)
    console.log('beforeCreate已经执行了')
  },
  created() {
    console.log(this.msg, this.fn)
    console.log('created已经执行了')
  }
}
</script>

<style></style>
