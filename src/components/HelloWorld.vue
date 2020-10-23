<template>
  <div class="hello">
  
    <el-button type="primary" @click="out">退出登陆</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
    
    };
  },
  methods:{
    out(){
      sessionStorage.clear();
      location.reload();
      this.$router.push(
        { path: "/login" },
      );
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
