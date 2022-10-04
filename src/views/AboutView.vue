<template>
  <main class=" min-h-screen bg-slate-300"> 
    <div class=""> 
  <nav class="flex border-b-2 border-slate-50 flex-row px-5 justify-center md:justify-end font-mono items-center mx-auto max-w-full gap-x-3 md:fixed top-0 right-40 left-96 text-white  bg-blue-800 rounded-sm h-1">
    <router-link class=" text-lg text-white font-medium active:text-white" to="/">Home</router-link>
    <router-link class=" text-lg text-white font-medium active:text-white" to="/about">About</router-link>
    <router-link class=" text-lg text-white font-medium active:text-white" to="/">contact</router-link>
    
    <div class=" text-white font-mono text-xl hidden  md:flex pl-32">+254757733263</div>
  
  </nav>
  <div class="flex flex-row px-5 justify-center md:justify-start md:ml-96 md:mr-40  h-40 bg-blue-800 font-mono items-center mx-auto max-w-full md:top-14  relative gap-x-3 z-30 rounded-sm ">
    <span class=" text-white"></span>
    <span class=" text-white bg-blue-800  text-2xl"> HOME/ABOUT</span>
  </div>
</div>

  </main>
</template>

<script>
export default {
    components: {  }
}
</script>

<style>

</style>
