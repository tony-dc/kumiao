<template>
  <div>
    <el-table :data="NowList" border style="width: 100%">
      <el-table-column
        prop="date"
        align="center"
        label="日期"
      ></el-table-column>
      <el-table-column
        prop="username"
        align="center"
        label="姓名"
      ></el-table-column>
      <el-table-column
        prop="email"
        align="center"
        label="邮箱"
      ></el-table-column>
      <el-table-column prop="hanle" align="center" label="操作">
        <template slot-scope="scope">
          <el-button
            @click="handleTofreeze(scope.$index, scope.row)"
            type="warning"
            size="mini"
            >{{ scope.row.isFreeze?'已冻结':'未冻结'}}</el-button
          >
          <el-button
            type="danger"
            size="mini"
            @click="handleTodelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :current-page.sync='currentpage'
        :total="tableData.length">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "user",
  data() {
    return {
      tableData: [],
      currentpage:1,
      pageSize:4
    };
  },
  //分页功能
  computed:{
      NowList(){
      //根据截取指定的条数，返回对应新的每页渲染数据
      return   this.tableData.slice((this.currentpage-1)*this.pageSize,this.currentpage*this.pageSize)||[]
      }
  },
  mounted() {
    //获取进入页面时所需要渲染的数据
    this.$axios.get("/api2/admin/user").then((res) => {
      this.tableData = res.data.data.userlist
    });
  },
  methods: {
    //处理冻结方法
    handleTofreeze(row, column) {
      const { email, isFreeze } = column;
      console.log(email, isFreeze);
      this.$axios
        .post("/api2/admin/updatefreeze", {
          email: email,
          isFreeze: !isFreeze,
        })
        .then((res) => {
          const status = res.data.status;
          //判断当结果为true时
          if (status === 0) {
            this.$alert("确认是否冻结该账户", "冻结账户", {
              confirmButtonText: "确定",
              callback: (action) => {
                column.isFreeze=!isFreeze
                this.$message({
                  type: "info",
                  message: res.data.msg,
                });
              },
            });
          }else{
             this.$alert("确认是否冻结该账户", "冻结账户", {
              confirmButtonText: "确定",
              callback: (action) => {
                this.$message({
                  type: "info",
                  message: res.data.msg,
                });
              },
            });
          }
         
        });
    },
    //处理删除操作方法
    handleTodelete(row, column) {
      const { email} = column;
      this.$axios
        .post("/api2/admin/deleteuser", {
           email
        }).then(res=>{
          const status=res.data.status
          if(status===0){
              this.$alert("确认是否删除该账户", "删除账户", {
              confirmButtonText: "确定",
              callback: (action) => {
                this.tableData.splice(row,1)
                this.$message({
                  type: "info",
                  message: res.data.msg,
                });
              },
            });
          }else{
             this.$alert("确认是否删除该账户", "删除账户", {
              confirmButtonText: "确定",
              callback: (action) => {
                this.$message({
                  type: "info",
                  message: res.data.msg,
                });
              },
            });
          }
        })
    },
  },
};
</script>
<style scoped>
.el-pagination{
  margin-top:10px;
}
</style>