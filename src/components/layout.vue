<template>
  <div id="loyout">
    <layoutAside></layoutAside>
    <el-container>
      <el-main id="elmain">
        <transition name="main" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import layoutAside from "../components/header";

export default {
  name: "dc-home",
  components: {
    layoutAside,
  }, 
  data() {
    return {
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scope>
.main-enter,
.main-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.main-enter-active {
  transition: all 0.2s;
}
.main-leave-active {
  position: absolute;
  transition: all 0.3s;
}
.content {
  background: rgb(84, 92, 100);
}
#loyout {
  height: 100%;
}
.el-footer {
  padding: 0 0 !important;
}
</style>
<style>
* {
  margin: 0px;
  padding: 0px;
}

body {
  background-color: #f2f2f2;
  font-size: 14px;
  color: #333333;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

#elmain {
  background-color: #f0f2f5;
}
.el-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
