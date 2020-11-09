<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" align="center" label="日期" ></el-table-column>
      <el-table-column prop="username"  align="center"  label="姓名" ></el-table-column>
      <el-table-column prop="email" align="center"  label="邮箱"></el-table-column>
       <el-table-column prop="hanle" align="center"  label="操作"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "user",
  data(){
      return {
          tableData:[]
      }
  },
  mounted(){
      this.$axios.get('/api2/admin/user').then(res=>{
          console.log(res)
      })
  }
};
</script>
<style lang="">
</style>