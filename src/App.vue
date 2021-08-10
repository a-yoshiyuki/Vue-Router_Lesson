<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from "./views/Home.vue";
  export default {
    components: {
      Home
    }
  };
</script>

<style scoped>
  .link {
    margin-right: 10px;
  }

  .link--active {
    font-size: 20px;
  }
</style>