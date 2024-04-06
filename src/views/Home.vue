<script setup>
import Sidebar from "../components/Sidebar.vue";
import Info from "../components/Info.vue";
</script>
<template>
  <div class="main">
    <div class="main__sidebar">
      <Sidebar />
    </div>
    <div class="main__info">
      <Info />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  &__sidebar {
    width: 20%;
  }
  &__info {
    width: 80%;
  }
}
</style>
