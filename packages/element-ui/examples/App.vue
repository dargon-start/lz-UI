<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  data() {
   return {
     theme: 'qbee-theme__default' 
   }
  },
  created() {
    this.setTheme()
  },
  mounted() {
  },
  methods: {
    // 退出登录
    setTheme() {
      document.body.className = this.theme
    },
  }
}

</script>
<style lang="less">
body {
  background-color: transparent !important;
}
</style>
