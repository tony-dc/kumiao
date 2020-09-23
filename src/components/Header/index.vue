<template>
  <header id="header">
    <h1 class="logo">{{title}}</h1>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "酷喵电影"
    }
  }
};
</script>
<style lang="scss" scoped>
#header {
  position: relative;
  width: 100%;
  height: 50px;
  color: #fff;
  background-color: #e54847;
  border-bottom: 1px solid #e54847;
  .logo {
    font-size: 22px;
    text-align: center;
    line-height: 50px;
    font-weight: normal;
  }
  i {
    position: absolute;
    left: 5px;
    top: 50%;
    margin-top: -13px;
    font-size: 26px;
  }
}
</style>