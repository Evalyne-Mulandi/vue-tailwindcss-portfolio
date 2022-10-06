<template>
  <main class=" relative max-w-full">
    <Aside/>
    <router-view/>
  </main>
 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

 
</style>
<script>
import Aside from './components/aside.vue';
export default {
    components: { Aside,   }
}
</script>