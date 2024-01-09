<template>
  <div class="home">
   <sidebar/>
  
   <div class="  mt-2 flex flex-row px-3 justify-center md:justify-start md:ml-96 md:mr-40  dark:bg-slate-900 bg-teal-500 font-mono items-center mx-auto max-w-full  relative gap-x-3 z-30  rounded-sm">
    <Footer/>
  
</div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue'
import Footer from '@/components/footer.vue';
// @ is an alias to /src
 

export default {
  name: 'HomeView',
  components: {
    Sidebar,
    Footer,
    
}
}
</script>
