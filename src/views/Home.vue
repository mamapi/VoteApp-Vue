<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>

//1/ 1. In vue project @ is an alias to /src.
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  //2/ 3. Name is not required, but it's usually good to add it
  //info https://vuejs.org/v2/api/#name
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
.home {
  //1/ 2. You can use absolute paths in styles, but remember about tilde as a prefix
  background-repeat: no-repeat;
  background-position: center;
  height: 192px;
}
</style>
