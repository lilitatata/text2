<template>
  <div>
    <div class="box">你好</div>
    <h1>{{ num }}</h1>
    <button @click="num++">点击加1</button>
    <button @click="fn">点击我销毁App</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello, Vue',
      num: 0
    }
  },
  methods: {
    fn() {
      this.$destroy()
    }
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
  },
  beforeUpdate() {
    console.log('beforeUpdate被执行了')
  },
  updated() {
    console.log('updated被执行了')
  },
  beforeDestroy() {
    console.log('beforeDestroy被执行了')
  },
  destroyed() {
    console.log('destroyed被执行了')
  }
}
</script>

<style></style>
