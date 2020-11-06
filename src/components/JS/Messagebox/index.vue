<template>
  <div class="messageBox">
    <h2>{{title}}</h2>
    <p>{{content}}</p>
    <div class="sure">
      <div v-if='cancel' @touchstart="handleCancel">{{cancel}}</div>
      <div v-if='ok' @touchstart="handleOk">{{ok}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "messagebox"
};
</script>
<style lang="scss" scoped>
.messageBox {
  width: 200px;
  height: 120px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 3px 3px 3px 3px #ccc;
  position: absolute;
  background-color: #fff;
  left: 50%;
  top: 50%;
  margin: -60px 0px 0px -100px;
  h2 {
    text-align: center;
    line-height: 40px;
    font-size: 18px;
  }
  p {
    text-align: center;
    line-height: 40px;
  }
  .sure {
    display: flex;
    position: absolte;
    width: 100%;
    bottom: 0;
    border-top: 1px solid #ccc;
    div {
      flex: 1;
      line-height: 40px;
      text-align: center;
      border-right: 1px solid #ccc;
    }
    div:last-child {
      border: none;
    }
  }
}
</style>