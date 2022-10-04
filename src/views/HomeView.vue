<template>
  <div class="home">
   <sidebar/>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue'
// @ is an alias to /src
 

export default {
  name: 'HomeView',
  components: {
    Sidebar
   
  }
}
</script>
