<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
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
            >未冻结</el-button
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
  </div>
</template>
<script>
export default {
  name: "user",
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.$axios.get("/api2/admin/user").then((res) => {
      const userList = res.data.data.userlist;
      this.tableData = userList;
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
      //     this.$confirm("此操作将永久冻结该账号, 是否继续?", "提示", {
      //       confirmButtonText: "确定",
      //       cancelButtonText: "取消",
      //       type: "warning",
      //     })
      //       .then(() => {
      //     if (status === 0) {
      //         this.$message({
      //           type: "success",
      //           message: "冻结成功!",
      //         });
      //       })
      //       .catch(() => {
      //         this.$message({
      //           type: "info",
      //           message: "已取消删除",
      //         });
      //       });
      //   }
      // });
    },
    //处理删除操作方法
    handleTodelete(row, column) {
      console.log(row, column);
    },
  },
};
</script>
<style lang="">
</style>