<template>
  <div class="box">你好</div>
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
    console.log('beforeCreate已经执行了')
  },
  created() {
    console.log('created已经执行了')
  },
  beforeMount() {
    console.log('beforeMount执行了', this.msg, this.fn)
    console.log('beforeMount执行了', document.querySelector('.box'))
  },
  mounted() {
    console.log('mounted执行了', this.msg, this.fn)
    console.log('mounted执行了', document.querySelector('.box'))
  }
}
</script>

<style></style>
